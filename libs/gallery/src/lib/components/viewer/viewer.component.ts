import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
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
export class ViewerComponent implements OnChanges, OnInit, AfterViewInit {
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
  @Input() moveByItems: number;

  @HostBinding('class.rtl')
  @Input()
  isRtl: boolean;

  @Output() itemClick = new EventEmitter<GalleryItemEvent>();
  @Output() descriptionClick = new EventEmitter<Event>();
  @Output() selection = new EventEmitter<number>();

  @ViewChild('itemList', { static: true }) itemListRef: ElementRef<HTMLElement>;
  @ViewChildren('itemsRef') itemsRef: QueryList<ElementRef<HTMLElement>>;

  displayedItems: GalleryItemInternal[];
  fringeCount: number;
  private _itemWidth: number;
  private fringeObserver?: IntersectionObserver;
  private pointerDeltaX = 0;
  private sliding = false;

  set noAnimation(value: boolean) {
    this.itemListRef.nativeElement.style.transitionDuration = value
      ? '0ms'
      : '400ms';
  }

  get counterIndex() {
    return Math.floor(this.selectedIndex / this.moveByItems);
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

      if (this.loop) {
        setTimeout(() => this.observeFringes());
      }
    }
    if (visibleItems) {
      this.itemListRef.nativeElement.style.setProperty(
        '--item-width',
        `calc(100% / ${this.visibleItems})`
      );
      setTimeout(this.updateDimensions);
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
      this._destroyRef.onDestroy(() => this.fringeObserver?.disconnect());
    }
  }

  ngAfterViewInit() {
    this.center();
    setTimeout(() => (this.noAnimation = false));
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
    this.itemClick.emit({
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
        this.noAnimation = this.sliding = true;

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

      const onmouseup = () => {
        this.noAnimation = this.sliding = false;
        this._zone.run(() => this.selectBySwipeStats(this.pointerDeltaX));
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
        this.noAnimation = this.sliding = true;
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
        this.noAnimation = this.sliding = false;
        this._zone.run(() => this.selectBySwipeStats(this.pointerDeltaX));
        this.pointerDeltaX = 0;

        horizontal = undefined;
        touchstart = undefined;
        lastTouchmove = undefined;
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
    window.addEventListener(
      'resize',
      this.updateDimensions,
      passiveEventListenerOpts
    );

    this._destroyRef.onDestroy(() => {
      window.removeEventListener('resize', this.updateDimensions);
    });
  }

  private loopTo(desiredIndex: number) {
    this.noAnimation = true;

    const shift = Math.sign(desiredIndex) * this.items.length * this._itemWidth;

    this.shiftByDelta(shift);
    this.selectedIndex =
      desiredIndex < 0
        ? desiredIndex + this.items.length
        : desiredIndex - this.items.length;

    // NOTE: This is needed so that animation is reactivated really only after the loop shift
    // happened. Without the requestAnimationFrame, the setTimeout is often not enough, as it
    // can happen still before the next frame is painted, which would cause the loop shift
    // to be animated.
    // But, requestAnimationFrame is not enough as its callback is called BEFORE the next paint,
    // not after. Second requestAnimationFrame would also be possible, but setTimeout is better
    // as it's called right after the next paint happens.
    requestAnimationFrame(() =>
      setTimeout(() => {
        this.pointerDeltaX = 0;
        this.noAnimation = false;
        this.center();
      })
    );
  }

  private observeFringes() {
    if (!isBrowser) {
      return;
    }
    this.fringeObserver?.disconnect();

    const observer = new IntersectionObserver(this.repositionOnFringe, {
      root: this._hostRef.nativeElement,
      threshold: 1.0,
    });
    observer.observe(this.itemsRef.first.nativeElement);
    observer.observe(this.itemsRef.last.nativeElement);

    this.fringeObserver = observer;
  }

  private repositionOnFringe: IntersectionObserverCallback = entries => {
    if (!this.loop || !this.sliding) {
      return;
    }
    const { first } = this.itemsRef;
    const visibleEntries = entries.filter(e => e.isIntersecting);

    if (visibleEntries.length === 0) {
      return;
    }

    const beginningVisible = entries[0].target === first.nativeElement;

    this.pointerDeltaX +=
      (beginningVisible ? -1 : 1) * this.items.length * this._itemWidth;
  };

  private updateDimensions = () => {
    this._itemWidth =
      this._hostRef.nativeElement.querySelector('li')!.offsetWidth;
  };

  private selectBySwipeStats(distance: number) {
    // I use round instead of previous ceil here because the ceil was pretty one-sided in where the
    // index delta would move. This was apparent in looping mode, where items that were clearly to be
    // scrolled to were actually hidden in favor of items that were barely visible, but selected thanks
    // to Math.ceil.
    // Now I use magical constant 2.25 to make sure a tiny swipe slides to next items, but there is still
    // a tiny threshold to make sure the slide doesn't always happen.
    const indexDelta =
      Math.round(
        (Math.abs(distance) + this._itemWidth / 2.25) / this._itemWidth
      ) * -Math.sign(distance);
    const newIndex = this.selectedIndex + indexDelta;

    this.select(newIndex);
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
}
