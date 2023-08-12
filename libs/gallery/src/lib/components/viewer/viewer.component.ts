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

export const NEXT_THRESHOLD_PX = 25;

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
  @Input() items!: GalleryItemInternal[];
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
  @Input() loop: boolean;

  @Input() visibleItems: number;
  @Input() touched: boolean;

  @HostBinding('class.rtl')
  @Input()
  isRtl: boolean;

  @Output() imageClick = new EventEmitter<GalleryItemEvent>();
  @Output() descriptionClick = new EventEmitter<Event>();
  @Output() selection = new EventEmitter<number>();

  @ViewChild('itemList', { static: true }) itemListRef: ElementRef<HTMLElement>;
  @ViewChildren('itemsRef') itemsRef: QueryList<ElementRef<HTMLElement>>;

  displayedItems: GalleryItemInternal[];
  fringeCount: number;
  private _itemWidth: number;
  private pointerDeltaX = 0;

  set _noAnimation(value: boolean) {
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
    private _hostRef: ElementRef<HTMLElement>,
    private _cd: ChangeDetectorRef,
    private _destroyRef: DestroyRef,
    private _zone: NgZone
  ) {}

  ngOnChanges({ visibleItems, items, loop }: SimpleChanges) {
    if (loop || items) {
      this.loop = this.items?.length > 1 ? this.loop : false;
      this.fringeCount = this.getFringeCount();
      this.displayedItems = this.getItemsToBeDisplayed(this.fringeCount);
    }
    if (visibleItems) {
      this.itemListRef.nativeElement.style.setProperty(
        '--item-width',
        `calc(100% / ${this.visibleItems})`
      );
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

  isYoutube(item: GalleryItemInternal) {
    return !!item.src.match(/youtube.*\/embed\//);
  }

  select(index: number) {
    if (this.selectedIndex === index) {
      return this.center();
    }

    if (this.items[this.selectedIndex].video) {
      this.stopCurrentVideo();
    }

    const indexOutOfBounds = !this.items[index];
    const looping = this.loop && indexOutOfBounds;

    if (looping) {
      this.loopTo(index);
    } else {
      this.selectedIndex = indexOutOfBounds
        ? this.correctIndexOutOfBounds(index)
        : index;
      this.center(); // we center only for this branch since looping does a delayed centering
    }
    this.selection.emit(this.selectedIndex);
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
    nextItemIndex = nextItemIndex - this.fringeCount;
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
    index = index - this.fringeCount;
    return index >= 0 && index < this.items.length ? 0 : -1;
  }

  private center() {
    this.shift();
  }

  private correctIndexOutOfBounds(index: number) {
    return index < 0 ? 0 : this.items.length - 1;
  }

  private getFringeCount() {
    return this.loop
      ? Math.min(Math.ceil(this.visibleItems), this.items.length)
      : 0;
  }

  private getItemsToBeDisplayed(fringeCount: number) {
    return this.loop
      ? [
          ...this.items.slice(-fringeCount),
          ...this.items,
          ...this.items.slice(0, fringeCount),
        ]
      : this.items;
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
        this.pointerDeltaX = 0;

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
      let horizontal: boolean | undefined;
      let touchstart: TouchEvent | undefined;
      let lastTouchmove: TouchEvent | undefined;

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
            moveTouch.clientX - (lastTouchmove ?? touchstart).touches[0].clientX
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

        if (touchstart && lastTouchmove) {
          const distance =
            touchstart.touches[0].clientX - lastTouchmove.touches[0].clientX;

          this._zone.run(() => this.selectBySwipeStats(distance));
        }
        horizontal = undefined;
        touchstart = undefined;
        lastTouchmove = undefined;
        this.pointerDeltaX = 0;
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
    const deltaX = this.pointerDeltaX % this._itemWidth;
    this._noAnimation = true;

    this.selectedIndex =
      desiredIndex < 0
        ? desiredIndex + this.items.length
        : desiredIndex - this.items.length;
    this.shift(
      desiredIndex < 0 ? deltaX - this._itemWidth : this._itemWidth + deltaX
    );

    setTimeout(() => {
      this._noAnimation = false;
      this.center();
    });
  }

  private onResize = () => {
    // the setTimeout is here to prevent layout trashing when inquiring layout properties like offsetWidth
    // using setTimeout increases chance the trashing will be avoided and cashed layout calculation will be used
    setTimeout(() => {
      this.updateDimensions();
      this.center();
    });
  };

  private readDimensions() {
    this._itemWidth =
      this._hostRef.nativeElement.querySelector('li')!.offsetWidth;
  }

  private selectBySwipeStats(distance: number) {
    const indexDelta = Math.ceil(
      (Math.abs(distance) - NEXT_THRESHOLD_PX) / this._itemWidth
    );
    this.selectByDelta(indexDelta * Math.sign(distance));
  }

  private shift(delta = 0) {
    const multiplier = this.isRtl ? 1 : -1;
    const index = (this.selectedIndex + this.fringeCount) * multiplier;
    delta *= -multiplier;
    const shift = `calc(${index} * var(--item-width) + ${delta}px)`;

    this.itemListRef.nativeElement.style.transform = `translate3d(${shift}, 0, 0)`;
  }

  private shiftByDelta = (delta: number) => {
    this.pointerDeltaX += delta;
    this.shift(this.pointerDeltaX);
  };

  private stopCurrentVideo() {
    const videoEl = this.itemsRef
      .get(this.selectedIndex)
      ?.nativeElement.querySelector('video');

    if (videoEl) {
      videoEl.pause();
    }
  }

  private updateDimensions() {
    if (this.items?.length) {
      this.readDimensions();
    }
  }
}
