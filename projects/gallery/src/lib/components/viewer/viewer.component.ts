import { animate, transition, trigger } from '@angular/animations';
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
  VerticalOrientation,
} from '../../core';
import { GalleryItemInternal, GalleryVideo } from '../../core/gallery-item';

@Component({
  selector: 'doe-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('remove', [transition(':leave', animate('0ms 100ms'))])],
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
  @Input() arrowTemplate: TemplateRef<void>;
  @Input() thumbsOrientation: OrientationFlag;
  @Input() aria: Aria;

  @Output() imageClick = new EventEmitter<GalleryItemEvent>();
  @Output() descriptionClick = new EventEmitter<Event>();
  @Output() selection = new EventEmitter<number>();

  @ViewChild('itemList', { static: true }) itemListRef: ElementRef<HTMLElement>;
  @ViewChildren('items') itemsRef: QueryList<ElementRef<HTMLElement>>;

  displayedItems: GalleryItemInternal[];

  UA = UA;

  private destroy$ = new Subject();
  private itemWidth: number;
  private viewerWidth: number;
  private listX = 0;

  get lazyLoading() {
    return this.loading === 'lazy';
  }

  set noAnimation(value: boolean) {
    this.itemListRef.nativeElement.style.transitionDuration = value
      ? '0ms'
      : '';
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

  ngOnChanges({ thumbsOrientation, items, loop }: SimpleChanges) {
    if (thumbsOrientation && !thumbsOrientation.firstChange) {
      if (!(thumbsOrientation.currentValue & thumbsOrientation.previousValue)) {
        setTimeout(() => {
          this.readDimensions();
          this.center();
          // accounts for multiple items visible in viewport, which need calculated dimensions
          this.cd.detectChanges();
        });
      }
    }
    if (items && items.currentValue && items.currentValue.length) {
      this.onResize();
      this.setDisplayedItems(this.loop);

      const selectedItem = items.currentValue[this.selectedIndex];
      if (selectedItem) {
        selectedItem._seen = true;
      }
    }
    if (loop && this.items) {
      this.setDisplayedItems(loop.currentValue);
      this.center();
    }
  }

  private setDisplayedItems(loop: boolean) {
    const { items } = this;
    this.displayedItems = loop
      ? [...items.slice(-2), ...items, ...items.slice(0, 2)]
      : items;
  }

  ngOnInit() {
    const listenerOpts = {
      passive: true,
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
          this.shiftByDelta(e.movementX);
        };

        const onmouseup = (e: MouseEvent) => {
          this.noAnimation = false;

          const time = e.timeStamp - mousedown.timeStamp;
          const distance = mousedown.x - e.x;

          this.zone.run(() => this.selectBySwipeStats(time, distance));

          document.removeEventListener('mousemove', onmousemove);
          document.removeEventListener('mouseup', onmouseup);
        };

        const onclick = (e: MouseEvent) => {
          if (maxDeltaX > 10 || maxDeltaY > 10) {
            e.stopPropagation();
          }
          maxDeltaY = maxDeltaX = 0;
        };

        const ondragstart = (e: DragEvent) => e.preventDefault();

        imageList.addEventListener('mousedown', onmousedown, listenerOpts);
        imageList.addEventListener('click', onclick, { capture: true });
        imageList.addEventListener('dragstart', ondragstart);
        this.destroy$.subscribe(() => {
          imageList.removeEventListener('mousedown', onmousedown);
          imageList.removeEventListener('click', onclick);
          imageList.removeEventListener('dragstart', ondragstart);
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

            this.zone.run(() => this.selectBySwipeStats(time, distance));
          }
          horizontal = null;
          touchstart = null;
          lastTouchmove = null;
        };

        imageList.addEventListener('touchstart', ontouchstart, listenerOpts);
        document.addEventListener('touchmove', ontouchmove, {
          passive: !UA.ios,
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
    return item.src;
  }

  isInScrollportProximity(index: number) {
    const distance = Math.abs(this.selectedIndex - index);
    // the spread makes sure, that also 1 item outside of the visible scrollport in both directions is rendered
    // so if 3 items are displayed (although 2 partially), 5 items will be "in scroll proximity"
    const spread =
      Math.floor(Math.ceil(this.viewerWidth / (this.itemWidth + 1)) / 2) + 1 ||
      1;
    return distance <= spread;
  }

  isYoutube(item: GalleryItemInternal) {
    return !!item.src.match(/youtube.*\/embed\//);
  }

  isVideo(index: number) {
    return this.items[index] instanceof GalleryVideo;
  }

  prev() {
    this.select(this.selectedIndex - 1);
  }

  next() {
    this.select(this.selectedIndex + 1);
  }

  select(index: number) {
    const indexOutOfBounds = index < 0 || index >= this.items.length;

    if (this.selectedIndex === index || (!this.loop && indexOutOfBounds)) {
      this.center();
      return;
    }

    // stop video when navigating away from it
    if (this.isVideo(this.selectedIndex)) {
      const videoEl: HTMLMediaElement = this.itemsRef
        .toArray()
        [this.selectedIndex].nativeElement.querySelector('video');

      if (videoEl) {
        videoEl.pause();
      }
    }

    if (indexOutOfBounds) {
      // if looping
      const { itemWidth, listX, viewerWidth } = this;
      index = index < 0 ? this.items.length - 1 : 0;
      this.noAnimation = true;

      setTimeout(() => {
        const centeringOffset = (viewerWidth - itemWidth) / 2;
        const outOfCenterShift = (listX + centeringOffset) % itemWidth;
        const baseShift =
          (index + (index === 0 ? 1 : outOfCenterShift ? 2 : 3)) * itemWidth;
        const shift = baseShift + outOfCenterShift - centeringOffset;
        this.shift(shift);

        setTimeout(() => {
          this.noAnimation = false;
          this.center();
        });
      });
    }

    this.items[index]._seen = true;
    this.selectedIndex = index;
    this.selection.emit(index);

    if (!indexOutOfBounds) {
      this.center();
    }
  }

  onImageClick(index: number, item: GalleryItemInternal, event: Event) {
    this.imageClick.emit({
      event,
      item,
      index,
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
    const centeringOffset = (this.viewerWidth - this.itemWidth) / 2;
    this.shift(
      (this.selectedIndex + (this.loop ? 2 : 0)) * this.itemWidth -
        centeringOffset
    );
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
        this.readDimensions();
        this.center();
      }

      // the setTimeout makes sure that the animation is allowed AFTER the list was shifted
      setTimeout(() => (this.noAnimation = false));
    });
  };

  private readDimensions() {
    this.viewerWidth = this.hostRef.nativeElement.offsetWidth;
    this.itemWidth = this.hostRef.nativeElement.querySelector('li').offsetWidth;
  }

  private selectBySwipeStats(time: number, distance: number) {
    if (Math.abs(time / distance) < 4 && Math.abs(distance) > 20) {
      this.select(this.selectedIndex + Math.sign(distance));
    } else {
      this.select(Math.round(this.listX / this.itemWidth - 2));
    }
  }

  private shift(x: number) {
    this.itemListRef.nativeElement.style.transform = `translate3d(${-(this.listX = x)}px, 0, 0)`;
  }

  private shiftByDelta = (delta: number) => {
    this.shift(this.listX - delta);
  };
}
