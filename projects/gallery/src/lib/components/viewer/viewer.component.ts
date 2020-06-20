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
import { GalleryItemInternal, isVideo } from '../../core/gallery-item';

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
  @Input() counter: boolean;
  @Input() counterOrientation: VerticalOrientation;
  @Input() loading: Loading;
  @Input() objectFit: ObjectFit;
  @Input() itemTemplate: TemplateRef<ItemTemplateContext>;
  @Input() loadingTemplate: TemplateRef<void>;
  @Input() errorTemplate: TemplateRef<void>;
  @Input() arrowTemplate: TemplateRef<void>;
  @Input() thumbsOrientation: OrientationFlag;
  @Input() aria: Aria;
  @Input()
  set loop(val: boolean) {
    this._loop = val;
  }
  get loop() {
    return this.items && this.items.length > 1 && this._loop;
  }

  @Input() set itemWidth(val: string) {
    this.itemListRef.nativeElement.style.setProperty('--item-width', val || '');
  }

  @Output() imageClick = new EventEmitter<GalleryItemEvent>();
  @Output() descriptionClick = new EventEmitter<Event>();
  @Output() selection = new EventEmitter<number>();

  @ViewChild('itemList', { static: true }) itemListRef: ElementRef<HTMLElement>;
  @ViewChildren('itemsRef') itemsRef: QueryList<ElementRef<HTMLElement>>;

  isVideo = isVideo;
  UA = UA;

  _displayedItems: GalleryItemInternal[];
  private _destroy$ = new Subject();
  private _fringeCount: number;
  private _itemWidth: number;
  private _loop: boolean;
  private _viewerWidth: number;
  private _listX = 0;

  set _noAnimation(value: boolean) {
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
    private _hostRef: ElementRef<HTMLElement>,
    private _cd: ChangeDetectorRef,
    private _zone: NgZone
  ) {}

  ngOnChanges({ thumbsOrientation, items }: SimpleChanges) {
    if (thumbsOrientation && !thumbsOrientation.firstChange) {
      if (!(thumbsOrientation.currentValue & thumbsOrientation.previousValue)) {
        setTimeout(() => {
          this.readDimensions();
          this.center();
          // accounts for multiple items visible in viewport, which need calculated dimensions
          this._cd.detectChanges();
        });
      }
    }
    if (items && items.currentValue && items.currentValue.length) {
      this.onResize();
    }
  }

  ngOnInit() {
    const listenerOpts = {
      passive: true,
    };

    if (isBrowser) {
      fromEvent(window, 'resize', listenerOpts)
        .pipe(takeUntil(this._destroy$))
        .subscribe(this.onResize);
    }

    if (isBrowser && this.mouseGestures) {
      this._zone.runOutsideAngular(() => {
        const imageList = this.itemListRef.nativeElement;
        let mousedown: MouseEvent;
        let maxDeltaX = 0;
        let maxDeltaY = 0;

        const onmousedown = (e: MouseEvent) => {
          mousedown = e;
          this._noAnimation = true;

          document.addEventListener('mousemove', onmousemove, listenerOpts);
          document.addEventListener('mouseup', onmouseup, listenerOpts);
        };

        const onmousemove = (e: MouseEvent) => {
          maxDeltaX = Math.max(Math.abs(mousedown.x - e.x));
          maxDeltaY = Math.max(Math.abs(mousedown.y - e.y));
          this.shiftByDelta(e.movementX);
        };

        const onmouseup = (e: MouseEvent) => {
          const distance = mousedown.x - e.x;

          this._noAnimation = false;
          this._zone.run(() => this.selectBySwipeStats(distance));

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
        this._destroy$.subscribe(() => {
          imageList.removeEventListener('mousedown', onmousedown);
          imageList.removeEventListener('click', onclick);
          imageList.removeEventListener('dragstart', ondragstart);
        });
      });
    }

    if (isBrowser && this.touchGestures) {
      this._zone.runOutsideAngular(() => {
        const imageList = this.itemListRef.nativeElement;
        let horizontal = null;
        let touchstart: TouchEvent;
        let lastTouchmove: TouchEvent;

        const ontouchstart = (e: TouchEvent) => {
          touchstart = e;
          this._noAnimation = true;
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
            this.shiftByDelta(
              moveTouch.clientX -
                (lastTouchmove || touchstart).touches[0].clientX
            );
            lastTouchmove = e;
            if (UA.ios) {
              e.preventDefault();
              e.stopPropagation();
            }
          }
        };

        const ontouchend = () => {
          this._noAnimation = false;

          if (lastTouchmove) {
            const distance =
              touchstart.touches[0].clientX - lastTouchmove.touches[0].clientX;

            this._zone.run(() => this.selectBySwipeStats(distance));
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
        this._destroy$.subscribe(() => {
          imageList.removeEventListener('touchstart', ontouchstart);
          document.removeEventListener('touchmove', ontouchmove);
          document.removeEventListener('touchend', ontouchend);
        });
      });
    }
  }

  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  isInScrollportProximity(index: number) {
    if (this.loop) {
      index -= this._fringeCount;
    }
    // the spread makes sure, that also 1 item outside of the visible scrollport in both directions is rendered
    // so if 3 items are displayed (although 2 partially), 5 items will be "in scroll proximity"
    const spread =
      Math.floor(Math.ceil(this._viewerWidth / (this._itemWidth + 1)) / 2) +
        1 || 1;
    const distance = Math.abs(this.selectedIndex - index);
    return (
      (this.loop && Math.abs(distance - this.items.length) <= spread) ||
      distance <= spread
    );
  }

  isYoutube(item: GalleryItemInternal) {
    return !!item.src.match(/youtube.*\/embed\//);
  }

  selectByDelta(delta: number) {
    this.select(this.selectedIndex + delta);
  }

  select(index: number) {
    const indexOutOfBounds = !this.items[index];

    if (this.selectedIndex === index || (!this.loop && indexOutOfBounds)) {
      this.center();
      return;
    }

    // if infinite looping
    if (this.loop && indexOutOfBounds) {
      const origIndex = index;
      index = origIndex - Math.sign(index) * this.items.length;

      this._noAnimation = true;

      setTimeout(() => {
        const shift =
          this._listX -
          Math.sign(origIndex) * this.items.length * this._itemWidth;
        this.shift(shift);

        setTimeout(() => {
          this._noAnimation = false;
          this.center();
        });
      });
    }

    // stop video when navigating away from it
    if (this.isVideo(this.items[index])) {
      const videoEl: HTMLMediaElement = this.itemsRef
        .toArray()
        [this.selectedIndex].nativeElement.querySelector('video');

      if (videoEl) {
        videoEl.pause();
      }
    }

    this.selectedIndex = index;
    this.selection.emit(index);

    if (!indexOutOfBounds) {
      this.center();
    }
  }

  onImageClick(item: GalleryItemInternal, event: Event) {
    this.imageClick.emit({
      event,
      item,
      index: this.items.indexOf(item),
    });
  }

  onTab(nextItemIndex: number) {
    // allow focus to escape viewer
    if (nextItemIndex >= 0 && nextItemIndex < this.items.length) {
      this.select(nextItemIndex);
      // focusing an item literally scrolls the item list, so I have to scroll it back
      requestAnimationFrame(() => (this._hostRef.nativeElement.scrollLeft = 0));
    }
  }

  onItemLoaded(item: GalleryItemInternal, loadEvent: Event) {
    const target = loadEvent.target as HTMLElement;

    // elements with empty src also get loaded event, therefore the check
    if (target.getAttribute('src')) {
      item._loaded = true;
      item._failed = false;
      this._cd.detectChanges();
    }
  }

  onItemErrored(item: GalleryItemInternal, errEvent: Event) {
    const target = errEvent.target as HTMLElement;

    if (target.getAttribute('src')) {
      item._failed = true;
      this._cd.detectChanges();
    }
  }

  private center() {
    const centeringOffset = (this._viewerWidth - this._itemWidth) / 2;
    this.shift(
      (this.selectedIndex + this._fringeCount) * this._itemWidth -
        centeringOffset
    );
  }

  private getFringeCount() {
    return this.loop
      ? Math.min(
          Math.ceil(this._viewerWidth / (this._itemWidth + 1)),
          this.items.length
        )
      : 0;
  }

  private onResize = () => {
    // the setTimeout is here to prevent layout trashing when inquiring layout properties like offsetWidth
    // using setTimeout increases chance the trashing will be avoided and cashed layout calculation will be used
    setTimeout(() => {
      const { items } = this;

      this._noAnimation = true;

      if (!items || !items.length) {
        this.shift(0);
      } else {
        this.readDimensions();
        this._fringeCount = this.getFringeCount();
        this._displayedItems = this.loop
          ? [
              ...items.slice(-this._fringeCount),
              ...items,
              ...items.slice(0, this._fringeCount),
            ]
          : items;
        this._cd.detectChanges();
        this.center();
      }

      // the setTimeout makes sure that the animation is allowed AFTER the list was shifted
      setTimeout(() => (this._noAnimation = false));
    });
  };

  private readDimensions() {
    this._viewerWidth = this._hostRef.nativeElement.offsetWidth;
    this._itemWidth = this._hostRef.nativeElement.querySelector(
      'li'
    ).offsetWidth;
  }

  private selectBySwipeStats(distance: number) {
    const indexDelta = Math.ceil((Math.abs(distance) - 25) / this._itemWidth);

    if (indexDelta) {
      this.selectByDelta(indexDelta * Math.sign(distance));
    } else {
      this.center();
    }
  }

  private shift(x: number) {
    this.itemListRef.nativeElement.style.transform = `translate3d(${-(this._listX = x)}px, 0, 0)`;
  }

  private shiftByDelta = (delta: number) => {
    this.shift(this._listX - delta);
  };
}
