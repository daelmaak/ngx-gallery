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
  ViewChildren
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  Aria,
  GalleryItemEvent,
  isBrowser,
  ItemTemplateContext,
  Loading,
  ObjectFit,
  OrientationFlag,
  UA,
  VerticalOrientation
} from '../../core';
import { GalleryItemInternal } from '../../core/gallery-item';
import { transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'ngx-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('removeMedia', [transition(':leave', animate('0ms 100ms'))])
  ]
})
export class ViewerComponent implements OnChanges, OnInit, OnDestroy {
  @Input() items: GalleryItemInternal[];
  @Input() arrows: boolean;
  @Input() selectedIndex: number;
  @Input() descriptions: boolean;
  @Input() errorText: string;
  @Input() mouseGestures: boolean;
  @Input() touchGestures: boolean;
  @Input() imageCounter: boolean;
  @Input() imageCounterOrientation: VerticalOrientation;
  @Input() loading: Loading;
  @Input() loop: boolean;
  @Input() objectFit: ObjectFit;
  @Input() itemTemplate: TemplateRef<ItemTemplateContext>;
  @Input() loadingTemplate: TemplateRef<void>;
  @Input() errorTemplate: TemplateRef<void>;
  @Input() prevArrowTemplate: TemplateRef<void>;
  @Input() nextArrowTemplate: TemplateRef<void>;
  @Input() thumbsOrientation: OrientationFlag;
  @Input() aria: Aria;

  @Output() imageClick = new EventEmitter<GalleryItemEvent>();
  @Output() descriptionClick = new EventEmitter<Event>();
  @Output() selection = new EventEmitter<number>();

  @ViewChild('itemList', { static: true }) itemListRef: ElementRef<HTMLElement>;
  @ViewChildren('items') itemsRef: QueryList<ElementRef<HTMLElement>>;

  UA = UA;

  private destroy$ = new Subject();
  // this flag is supposed to prevent unnecessary loading of other than selected images
  private itemWidth: number;
  private listX = 0;

  set noAnimation(value: boolean) {
    this.itemListRef.nativeElement.style.transitionDuration = value
      ? '0ms'
      : '';
  }

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
    if (items && items.currentValue && items.currentValue.length) {
      setTimeout(() => this.onResize());

      const selectedItem = items.currentValue[this.selectedIndex];
      if (selectedItem) {
        selectedItem._seen = true;
      }
    }
  }

  ngOnInit() {
    const listenerOpts = {
      passive: true
    };

    if (isBrowser) {
      fromEvent(window, 'resize', listenerOpts)
        .pipe(takeUntil(this.destroy$))
        .subscribe(this.onResize);
    }

    if (isBrowser && this.mouseGestures) {
      this.zone.runOutsideAngular(() => {
        const imageList = this.itemListRef.nativeElement;
        let mousedown: MouseEvent;
        let maxDeltaX = 0;
        let maxDeltaY = 0;

        const onmousedown = (e: MouseEvent) => {
          mousedown = e;
          this.noAnimation = true;

          document.addEventListener('mousemove', onmousemove, listenerOpts);
          document.addEventListener('mouseup', onmouseup, listenerOpts);
        };

        const onmousemove = (e: MouseEvent) => {
          maxDeltaX = Math.max(Math.abs(mousedown.x - e.x));
          maxDeltaY = Math.max(Math.abs(mousedown.y - e.y));
          this.shiftByDelta(mousedown.x - e.x);
        };

        const onmouseup = (e: MouseEvent) => {
          this.noAnimation = false;

          const time = e.timeStamp - mousedown.timeStamp;
          const distance = mousedown.x - e.x;

          this.selectBySwipeStats(time, distance);

          document.removeEventListener('mousemove', onmousemove);
          document.removeEventListener('mouseup', onmouseup);
        };

        const onclick = (e: MouseEvent) => {
          if (maxDeltaX > 10 || maxDeltaY > 10) {
            e.stopPropagation();
          }
          maxDeltaY = maxDeltaX = 0;
        };

        imageList.addEventListener('mousedown', onmousedown, listenerOpts);
        imageList.addEventListener('click', onclick, { capture: true });
        this.destroy$.subscribe(() => {
          imageList.removeEventListener('mousedown', onmousedown);
          imageList.removeEventListener('click', onclick);
        });
      });
    }

    if (isBrowser && this.touchGestures) {
      this.zone.runOutsideAngular(() => {
        const imageList = this.itemListRef.nativeElement;
        let horizontal = null;
        let touchstart: TouchEvent;
        let lastTouchmove: TouchEvent;

        const ontouchstart = (e: TouchEvent) => {
          touchstart = e;
          this.noAnimation = true;
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
            this.shiftByDelta(startTouch.clientX - moveTouch.clientX);
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

        imageList.addEventListener('touchstart', ontouchstart, listenerOpts);
        document.addEventListener('touchmove', ontouchmove, {
          passive: !UA.ios
        });
        document.addEventListener('touchend', ontouchend, listenerOpts);
        this.destroy$.subscribe(() => {
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
    const inProximity = this.isInScrollportProximity(index);
    return !this.lazyLoading || item._seen || inProximity ? item.src : '';
  }

  isInScrollportProximity(index: number) {
    const distance = Math.abs(this.selectedIndex - index);
    return (distance === this.items.length - 1 && this.loop) || distance <= 1;
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

  onDragstart(e: Event) {
    if (this.mouseGestures) {
      e.preventDefault();
    }
  }

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
      this.cd.detectChanges();
    }
  }

  onItemErrored(item: GalleryItemInternal, errEvent: Event) {
    const target = errEvent.target as HTMLElement;

    if (target.getAttribute('src')) {
      item._failed = true;
      this.cd.detectChanges();
    }
  }

  private center() {
    this.shift(this.selectedIndex * this.itemWidth);
  }

  private getItemWidth() {
    return this.hostRef.nativeElement.querySelector('li').offsetWidth;
  }

  private onResize = () => {
    // the setTimeout is here due to getItemWidth call
    // it prevents situations where layout calculations are invalidated before the call
    // this prevents unnecessary layout recalculation
    setTimeout(() => {
      this.noAnimation = true;
      if (!this.items || !this.items.length) {
        this.shift(0);
      } else {
        this.itemWidth = this.getItemWidth();
        this.center();
      }

      // the setTimeout makes sure that the animation is allowed AFTER the list was shifted
      setTimeout(() => (this.noAnimation = false));
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

  private shift(x: number) {
    const imageListEl = this.itemListRef.nativeElement;
    imageListEl.style.transform = `translate3d(${-(this.listX = x)}px, 0, 0)`;
  }

  private shiftByDelta = (delta: number) => {
    this.shift(this.selectedIndex * this.itemWidth + delta);
  };
}
