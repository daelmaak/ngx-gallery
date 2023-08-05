import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  Aria,
  ContentTemplateContext,
  GalleryItemEvent,
  ItemTemplateContext,
  Loading,
  ObjectFit,
  OrientationFlag,
  UA,
  VerticalOrientation,
  isBrowser,
} from '../../core';
import { GalleryItemInternal } from '../../core/gallery-item';
import { MediaDirective } from '../../directives/media.directive';
import { SafePipe } from '../../pipes/safe.pipe';
import { CounterComponent } from '../counter/counter.component';
import { ChevronIconComponent } from '../icons/chevron/chevron-icon.component';

const passiveEventListenerOpts = {
  passive: true,
};

@Component({
  selector: 'viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('mediaAnimate', [
      transition(':leave', animate('0ms 100ms')),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    ChevronIconComponent,
    MediaDirective,
    SafePipe,
  ],
})
export class ViewerComponent implements OnChanges, OnInit {
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
  @Input() errorTemplate: TemplateRef<any>;
  @Input() arrowTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<ContentTemplateContext>;
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
  @Input() touched: boolean;

  @HostBinding('class.rtl')
  @Input()
  isRtl: boolean;

  @Output() imageClick = new EventEmitter<GalleryItemEvent>();
  @Output() descriptionClick = new EventEmitter<Event>();
  @Output() selection = new EventEmitter<number>();

  @ViewChild('itemList', { static: true }) itemListRef: ElementRef<HTMLElement>;
  @ViewChildren('itemsRef') itemsRef: QueryList<ElementRef<HTMLElement>>;

  UA = UA;

  _displayedItems: GalleryItemInternal[];
  _fringeCount: number;
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
    private _destroyRef: DestroyRef,
    private _zone: NgZone
  ) {}

  ngOnChanges({ thumbsOrientation, items }: SimpleChanges) {
    if (thumbsOrientation && !thumbsOrientation.firstChange) {
      const axis =
        thumbsOrientation.currentValue | thumbsOrientation.previousValue;
      if (
        axis !== OrientationFlag.HORIZONTAL &&
        axis !== OrientationFlag.VERTICAL
      ) {
        this.onResize();
      }
    }
    if (items && items.currentValue && items.currentValue.length) {
      this.onResize();
    }
  }

  ngOnInit() {
    if (isBrowser) {
      this.handleResizes();

      if (this.mouseGestures) {
        this.handleMouseSlides();
      }

      if (this.touchGestures) {
        this.handleTouchSlides();
      }
    }
  }

  isInScrollportProximity(index: number) {
    if (this.loop) {
      index -= this._fringeCount;
    }
    const spread = this.getSelectedItemProximitySpread();
    const distance = Math.abs(this.selectedIndex - index);
    const isLeftFringeItemToLoad =
      this.loop && Math.abs(distance - this.items.length) <= spread;

    return isLeftFringeItemToLoad || distance <= spread;
  }

  isYoutube(item: GalleryItemInternal) {
    return !!item.src.match(/youtube.*\/embed\//);
  }

  select(index: number) {
    if (this.selectedIndex === index) {
      return this.center();
    }

    const indexOutOfBounds = !this.items[index];
    const looping = this.loop && indexOutOfBounds;

    if (looping) {
      this.loopTo(index);
    }

    if (indexOutOfBounds) {
      index = this.correctIndexOutOfBounds(index);
    }

    if (this.items[this.selectedIndex].video) {
      this.stopCurrentVideo();
    }

    this.selectedIndex = index;
    this.selection.emit(index);

    if (!looping) {
      this.center();
    }
  }

  selectByDelta(delta: number) {
    this.select(this.selectedIndex + delta);
  }

  onImageClick(item: GalleryItemInternal, event: Event) {
    this.imageClick.emit({
      event,
      item,
      index: this.items.indexOf(item),
    });
  }

  onTab(nextItemIndex: number) {
    nextItemIndex = nextItemIndex - this._fringeCount;
    // allow focus to escape viewer
    if (nextItemIndex >= 0 && nextItemIndex < this.items.length) {
      this.select(nextItemIndex);
      // focusing an item literally scrolls the item list, so I have to scroll it back
      requestAnimationFrame(() => (this._hostRef.nativeElement.scrollLeft = 0));
    }
  }

  onItemLoaded(item: GalleryItemInternal) {
    item._loaded = true;
    item._failed = false;
    this._cd.detectChanges();
  }

  onItemErrored(item: GalleryItemInternal) {
    item._failed = true;
    this._cd.detectChanges();
  }

  itemFailedToLoad(item: GalleryItemInternal) {
    return item._failed;
  }

  itemLoaded(item: GalleryItemInternal) {
    return item._loaded;
  }

  itemTabbable(index: number) {
    index = index - this._fringeCount;
    return index >= 0 && index < this.items.length ? 0 : -1;
  }

  private center() {
    const centeringOffset = (this._viewerWidth - this._itemWidth) / 2;
    this.shift(
      (this.selectedIndex + this._fringeCount) * this._itemWidth -
        centeringOffset
    );
  }

  private correctIndexOutOfBounds(index: number) {
    if (this.loop) {
      return index < 0 ? this.items.length - 1 : 0;
    }
    return index < 0 ? 0 : this.items.length - 1;
  }

  private getFringeCount() {
    return this.loop
      ? Math.min(
          Math.ceil(this._viewerWidth / (this._itemWidth + 1)),
          this.items.length
        )
      : 0;
  }

  private getItemsToBeDisplayed() {
    return this.loop
      ? [
          ...this.items.slice(-this._fringeCount),
          ...this.items,
          ...this.items.slice(0, this._fringeCount),
        ]
      : this.items;
  }

  private getSelectedItemProximitySpread() {
    return this.touched
      ? Math.ceil(this._viewerWidth / (this._itemWidth + 1)) || 1
      : Math.floor(Math.ceil(this._viewerWidth / this._itemWidth) / 2);
  }

  private handleMouseSlides() {
    this._zone.runOutsideAngular(() => {
      const hostEl = this._hostRef.nativeElement;
      let mousedown: MouseEvent;
      let maxDeltaX = 0;
      let maxDeltaY = 0;

      const onmousedown = (e: MouseEvent) => {
        mousedown = e;
        this._noAnimation = true;

        document.addEventListener(
          'mousemove',
          onmousemove,
          passiveEventListenerOpts
        );
        document.addEventListener(
          'mouseup',
          onmouseup,
          passiveEventListenerOpts
        );
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
          // to prevent playing a video on swipe
          e.preventDefault();
        }
        maxDeltaY = maxDeltaX = 0;
      };

      const ondragstart = (e: DragEvent) => e.preventDefault();

      hostEl.addEventListener(
        'mousedown',
        onmousedown,
        passiveEventListenerOpts
      );
      hostEl.addEventListener('click', onclick, { capture: true });
      hostEl.addEventListener('dragstart', ondragstart);

      this._destroyRef.onDestroy(() => {
        hostEl.removeEventListener('mousedown', onmousedown);
        hostEl.removeEventListener('click', onclick);
        hostEl.removeEventListener('dragstart', ondragstart);
      });
    });
  }

  private handleTouchSlides() {
    this._zone.runOutsideAngular(() => {
      const hostEl = this._hostRef.nativeElement;
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
            moveTouch.clientX - (lastTouchmove || touchstart).touches[0].clientX
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

      hostEl.addEventListener(
        'touchstart',
        ontouchstart,
        passiveEventListenerOpts
      );
      document.addEventListener('touchmove', ontouchmove, {
        passive: !UA.ios,
      });
      document.addEventListener(
        'touchend',
        ontouchend,
        passiveEventListenerOpts
      );
      this._destroyRef.onDestroy(() => {
        hostEl.removeEventListener('touchstart', ontouchstart);
        document.removeEventListener('touchmove', ontouchmove);
        document.removeEventListener('touchend', ontouchend);
      });
    });
  }

  private handleResizes() {
    window.addEventListener('resize', this.onResize, passiveEventListenerOpts);

    this._destroyRef.onDestroy(() => {
      window.removeEventListener('resize', this.onResize);
    });
  }

  private loopTo(desiredIndex: number) {
    this._noAnimation = true;

    setTimeout(() => {
      const shiftDelta =
        Math.sign(desiredIndex) * this.items.length * this._itemWidth;

      this.shiftByDelta(shiftDelta);

      setTimeout(() => {
        this._noAnimation = false;
        this.center();
      });
    });
  }

  private onResize = () => {
    // the setTimeout is here to prevent layout trashing when inquiring layout properties like offsetWidth
    // using setTimeout increases chance the trashing will be avoided and cashed layout calculation will be used
    setTimeout(() => {
      this._noAnimation = true;
      this.updateDimensionsAndCenter();
      // the setTimeout makes sure that the animation is allowed AFTER the list was shifted
      setTimeout(() => (this._noAnimation = false));
    });
  };

  private readDimensions() {
    this._viewerWidth = this._hostRef.nativeElement.offsetWidth;
    this._itemWidth =
      this._hostRef.nativeElement.querySelector('li').offsetWidth;
    this._fringeCount = this.getFringeCount();
    this._displayedItems = this.getItemsToBeDisplayed();
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
    const multiplier = this.isRtl ? 1 : -1;
    this.itemListRef.nativeElement.style.transform = `translate3d(${
      multiplier * (this._listX = x)
    }px, 0, 0)`;
  }

  private shiftByDelta = (delta: number) => {
    this.shift(this._listX - delta);
  };

  private stopCurrentVideo() {
    const videoEl: HTMLMediaElement = this.itemsRef
      .toArray()
      [this.selectedIndex].nativeElement.querySelector('video');

    if (videoEl) {
      videoEl.pause();
    }
  }

  private updateDimensionsAndCenter() {
    if (this.items && this.items.length) {
      this.readDimensions();
      this.center();
      this._cd.detectChanges();
    }
  }
}
