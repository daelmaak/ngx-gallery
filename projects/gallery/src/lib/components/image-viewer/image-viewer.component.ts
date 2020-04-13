import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
  HostListener
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  isBrowser,
  ObjectFit,
  Loading,
  UA,
  VerticalOrientation,
  OrientationFlag,
  ItemTemplateContext,
  Aria
} from '../../core';
import { GalleryItemInternal } from '../../core/gallery-item';
import { ImageClickEvent } from './image-viewer.model';

@Component({
  selector: 'ngx-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageViewerComponent implements OnChanges, OnInit, OnDestroy {
  @Input()
  items: GalleryItemInternal[];

  @Input()
  arrows: boolean;

  @Input()
  selectedIndex: number;

  @Input()
  descriptions: boolean;

  @Input()
  errorText: string;

  @Input()
  imageCounter: boolean;

  @Input()
  imageCounterOrientation: VerticalOrientation;

  @Input()
  loading: Loading;

  @Input()
  loop: boolean;

  @Input()
  objectFit: ObjectFit;

  @Input()
  itemTemplate: TemplateRef<ItemTemplateContext>;

  @Input()
  loadingTemplate: TemplateRef<void>;

  @Input()
  errorTemplate: TemplateRef<void>;

  @Input()
  prevArrowTemplate: TemplateRef<void>;

  @Input()
  nextArrowTemplate: TemplateRef<void>;

  @Input()
  thumbsOrientation: OrientationFlag;

  @Input()
  aria: Aria;

  @Output()
  imageClick = new EventEmitter<ImageClickEvent>();

  @Output()
  descriptionClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<number>();

  @ViewChild('itemList', { static: true }) itemListRef: ElementRef<HTMLElement>;
  @ViewChildren('items') itemsRef: QueryList<ElementRef<HTMLElement>>;

  imagesHidden = true;
  noAnimation = false;

  private destroy$ = new Subject();
  // this flag is supposed to prevent unnecessary loading of other than selected images
  private interacted = false;
  private itemWidth: number;
  private listX = 0;

  get lazyLoading() {
    return this.loading === 'lazy';
  }

  get showArrow() {
    return this.arrows && this.items && this.items.length > 1;
  }

  get showPrevArrow() {
    return this.showArrow && (this.selectedIndex > 0 || this.loop);
  }

  get showNextArrow() {
    return (
      this.showArrow &&
      (this.selectedIndex < this.items.length - 1 || this.loop)
    );
  }

  constructor(
    private hostRef: ElementRef<HTMLElement>,
    private cd: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngOnChanges({ thumbsOrientation, items }: SimpleChanges) {
    if (thumbsOrientation && !thumbsOrientation.firstChange) {
      if (!(thumbsOrientation.currentValue & thumbsOrientation.previousValue)) {
        requestAnimationFrame(() => {
          this.itemWidth = this.getItemWidth();
          this.center();
        });
      }
    }
    if (items && items.currentValue) {
      this.onResize();

      const selectedItem = items.currentValue[this.selectedIndex];
      if (selectedItem) {
        selectedItem._seen = true;
      }
    }
  }

  ngOnInit() {
    this.imageCounter === undefined && (this.imageCounter = true);
    this.imageCounterOrientation == null &&
      (this.imageCounterOrientation = 'top');
    this.objectFit == null && (this.objectFit = 'contain');

    if (isBrowser) {
      const opts = {
        passive: !UA.ios
      };

      fromEvent(window, 'resize', opts)
        .pipe(takeUntil(this.destroy$))
        .subscribe(this.onResize);

      this.zone.runOutsideAngular(() => {
        const imageList = this.itemListRef.nativeElement;

        let mousedown: MouseEvent;

        const onmousedown = (e: MouseEvent) => {
          mousedown = e;
          this.noAnimation = true;
          this.cd.detectChanges();

          document.addEventListener('mousemove', onmousemove, opts);
          document.addEventListener('mouseup', onmouseup, opts);
        };

        const onmousemove = (e: MouseEvent) => {
          this.shiftImagesByDelta(mousedown.x - e.x);
        };

        const onmouseup = (e: MouseEvent) => {
          this.noAnimation = false;

          const time = e.timeStamp - mousedown.timeStamp;
          const distance = mousedown.x - e.x;

          this.selectBySwipeStats(time, distance);

          document.removeEventListener('mousemove', onmousemove);
          document.removeEventListener('mouseup', onmouseup);
        };

        let horizontal = null;
        let touchstart: TouchEvent;
        let lastTouchmove: TouchEvent;

        const ontouchstart = (e: TouchEvent) => {
          touchstart = e;
          this.noAnimation = true;
          this.cd.detectChanges();
        };

        const ontouchmove = (e: TouchEvent) => {
          if (!touchstart || e.touches.length !== 1) {
            return;
          }
          const startTouch = touchstart.touches[0];
          const moveTouch = e.touches[0];

          if (horizontal == null) {
            const deltaX = Math.abs(moveTouch.clientX - startTouch.clientX);
            const deltaY = Math.abs(moveTouch.clientY - startTouch.clientY);

            if (deltaX || deltaY) {
              horizontal = deltaX * 1.2 >= deltaY;
            }
          }

          if (horizontal) {
            lastTouchmove = e;
            this.shiftImagesByDelta(startTouch.clientX - moveTouch.clientX);
            if (UA.ios) {
              e.preventDefault();
              e.stopPropagation();
            }
          }
        };

        const ontouchend = () => {
          this.noAnimation = false;

          if (lastTouchmove) {
            const time = lastTouchmove.timeStamp - touchstart.timeStamp;
            const distance =
              touchstart.touches[0].clientX - lastTouchmove.touches[0].clientX;

            this.selectBySwipeStats(time, distance);
          }
          horizontal = null;
          touchstart = null;
          lastTouchmove = null;
        };

        imageList.addEventListener('mousedown', onmousedown, opts);
        imageList.addEventListener('touchstart', ontouchstart, opts);
        document.addEventListener('touchmove', ontouchmove, opts);
        document.addEventListener('touchend', ontouchend);

        this.destroy$.subscribe(() => {
          imageList.removeEventListener('mousedown', onmousedown);
          document.removeEventListener('mousemove', onmousemove);
          document.removeEventListener('mouseup', onmouseup);
          imageList.removeEventListener('touchstart', ontouchstart);
          document.removeEventListener('touchmove', ontouchmove);
          document.removeEventListener('touchend', ontouchend);
        });
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  getSrc(item: GalleryItemInternal) {
    const index = this.items.indexOf(item);
    const inProximity = this.interacted
      ? Math.abs(this.selectedIndex - index) <= 1
      : this.selectedIndex === index;
    return !this.lazyLoading || item._seen || inProximity ? item.src : '';
  }

  isYoutube(item: GalleryItemInternal) {
    return !!item.src.match(/youtube.*\/embed\//);
  }

  prev() {
    this.select(this.selectedIndex - 1);
  }

  next() {
    this.select(this.selectedIndex + 1);
  }

  select(index: number) {
    if (this.selectedIndex === index) {
      this.center();
      return;
    }

    if (!this.loop && (index < 0 || index >= this.items.length)) {
      this.center();
      return;
    }

    if (index < 0) {
      index = this.items.length - 1;
    } else if (index >= this.items.length) {
      index = 0;
    }

    // stop video when navigating away from it
    if (this.items[this.selectedIndex].video) {
      const videoEl: HTMLMediaElement = this.itemsRef
        .toArray()
        [this.selectedIndex].nativeElement.querySelector('video');

      if (videoEl) {
        videoEl.pause();
      }
    }

    this.items[index]._seen = true;
    this.selectedIndex = index;
    this.selection.emit(index);
    this.center();
  }

  @HostListener('mousedown')
  @HostListener('touchstart')
  onInteraction = () => (this.interacted = true);

  onImageClick(item: GalleryItemInternal, event: Event) {
    this.imageClick.emit({
      event,
      item,
      index: this.items.indexOf(item)
    });
  }

  onTab(nextItemIndex: number) {
    // allow focus to escape viewer
    if (nextItemIndex >= 0 && nextItemIndex < this.items.length) {
      this.select(nextItemIndex);
      // focusing an item literally scrolls the item list, so I have to scroll it back
      requestAnimationFrame(() => (this.hostRef.nativeElement.scrollLeft = 0));
    }
  }

  onItemLoaded(item: GalleryItemInternal, loadEvent: Event) {
    const target = loadEvent.target as HTMLElement;

    // elements with empty src also get loaded event, therefore the check
    if (target.getAttribute('src')) {
      item._loaded = true;
    }
  }

  onItemErrored(item: GalleryItemInternal, errEvent: Event) {
    const target = errEvent.target as HTMLElement;

    if (target.getAttribute('src')) {
      item._failed = true;
    }
  }

  private center() {
    const shift = this.selectedIndex * this.itemWidth;

    this.shiftImages(shift);
  }

  private getItemWidth() {
    return this.hostRef.nativeElement.querySelector('li').offsetWidth;
  }

  private onResize = () => {
    requestAnimationFrame(() => {
      if (!this.items || !this.items.length) {
        this.shiftImages(0);
      } else {
        this.itemWidth = this.getItemWidth();
        this.center();
      }

      this.imagesHidden = false;
      this.cd.detectChanges();
    });
  };

  private selectBySwipeStats(time: number, distance: number) {
    if (Math.abs(time / distance) < 4 && Math.abs(distance) > 20) {
      this.select(this.selectedIndex + Math.sign(distance));
    } else {
      this.select(Math.round(this.listX / this.itemWidth));
    }
    this.cd.detectChanges();
  }

  private shiftImages(x: number) {
    const imageListEl = this.itemListRef.nativeElement;
    imageListEl.style.transform = `translate3d(${-(this.listX = x)}px, 0, 0)`;
  }

  private shiftImagesByDelta = (delta: number) => {
    this.shiftImages(this.selectedIndex * this.itemWidth + delta);
  };
}
