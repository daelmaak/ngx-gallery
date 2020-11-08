import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subject } from 'rxjs';

import {
  isBrowser,
  Orientation,
  SUPPORT,
  ThumbTemplateContext,
} from '../../core';
import { Aria } from '../../core/aria';
import {
  GalleryItemInternal,
  GalleryItemEvent,
  isVideo,
} from '../../core/gallery-item';

@Component({
  selector: 'doe-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThumbsComponent implements OnChanges, OnDestroy {
  @Input() items: GalleryItemInternal[] = [];
  @Input() selectedIndex: number;
  @Input() aria: Aria;
  @Input() orientation: Orientation;
  @Input() arrows: boolean;
  @Input() arrowSlideByLength: number;
  @Input() autoScroll: boolean;
  @Input() thumbTemplate: TemplateRef<ThumbTemplateContext>;
  @Input() arrowTemplate: TemplateRef<void>;
  @Input() errorTemplate: TemplateRef<void>;
  @Input()
  set scrollBehavior(val: ScrollBehavior) {
    this._scrollBehavior = val || 'smooth';
  }
  get scrollBehavior() {
    return this._smoothScrollAllowed ? this._scrollBehavior : 'auto';
  }
  @Input() isRtl: boolean;

  @Output() thumbClick = new EventEmitter<GalleryItemEvent>();
  @Output() thumbHover = new EventEmitter<GalleryItemEvent>();

  @ViewChild('thumbs', { static: true }) thumbListRef: ElementRef<HTMLElement>;
  @ViewChildren('thumb') thumbsRef: QueryList<ElementRef<HTMLElement>>;

  isVideo = isVideo;

  _showStartArrow = false;
  _showEndArrow = false;
  _vertical: boolean;

  private _destroy$ = new Subject();
  private _arrowObserver: IntersectionObserver;
  private _scrollBehavior: ScrollBehavior;
  private _scrollId: number;
  private _smoothScrollAllowed = false;

  @HostBinding('class')
  get cssClass() {
    return `doe-thumbs--${this.orientation}`;
  }

  private get _hostOffsetAxis(): number {
    return this._vertical
      ? this._elRef.nativeElement.offsetHeight
      : this._elRef.nativeElement.offsetWidth;
  }

  private get _scrollKey(): string {
    return this._vertical ? 'scrollTop' : 'scrollLeft';
  }

  constructor(
    private _cd: ChangeDetectorRef,
    private _elRef: ElementRef<HTMLElement>
  ) {}

  ngOnChanges({ arrows, items, orientation }: SimpleChanges) {
    if (orientation && orientation.currentValue != null) {
      const newOrientation: Orientation = orientation.currentValue;
      this._vertical = newOrientation === 'left' || newOrientation === 'right';
    }
    if (arrows) {
      if (arrows.currentValue && this.items && this.items.length) {
        this.observeArrows();
      } else if (!arrows.currentValue) {
        this._showStartArrow = false;
        this._showEndArrow = false;
        this.unobserveArrows();
      }
    }

    if (items && items.currentValue) {
      const currItems = (items.currentValue || []) as GalleryItemInternal[];
      const prevItems = (items.previousValue || []) as GalleryItemInternal[];

      if (currItems.length === prevItems.length) {
        return;
      }

      if (this.arrows && currItems.length) {
        this.observeArrows();
      }
      if (!prevItems.length) {
        setTimeout(() => {
          this.centerThumbIfNeeded(this.selectedIndex);
          this._smoothScrollAllowed = true;
        });
      }
    }
  }

  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
    this._arrowObserver && this._arrowObserver.disconnect();
  }

  slide(direction: number) {
    let delta: number;

    if (this.arrowSlideByLength) {
      delta = this.arrowSlideByLength;
    } else {
      // Note: Slide by the full height/width of the gallery
      // or by the overflow of the thumbs - to prevent unnecessary requestAnimationFrame calls while trying to scroll
      // outside of the min/max scroll of the thumbs
      const thumbList = this.thumbListRef.nativeElement as HTMLElement;
      const thumbListScrollAxis = this._vertical
        ? thumbList.scrollHeight
        : thumbList.scrollWidth;
      const thumbListOffsetAxis = this._vertical
        ? thumbList.offsetHeight
        : thumbList.offsetWidth;

      delta = Math.min(
        thumbListOffsetAxis,
        thumbListScrollAxis - thumbListOffsetAxis
      );
    }
    this.scroll(delta * direction);
  }

  centerThumbIfNeeded(index: number) {
    if (!this.items || this.items.length <= 1) {
      return;
    }

    const nextItemRef = this.thumbsRef.toArray()[index];

    if (!nextItemRef) {
      return;
    }

    const nextItemEl = nextItemRef.nativeElement;
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = nextItemEl;

    const itemOffset = this._vertical ? offsetTop : offsetLeft;
    const itemOffsetAxis = this._vertical ? offsetHeight : offsetWidth;

    const hostScrollAxis = this._hostOffsetAxis;
    const thumbListScroll = this.thumbListRef.nativeElement[this._scrollKey];

    const nextScrollDelta =
      itemOffset + itemOffsetAxis / 2 - hostScrollAxis / 2 - thumbListScroll;

    if (
      thumbListScroll + hostScrollAxis < itemOffset + itemOffsetAxis ||
      thumbListScroll > itemOffset
    ) {
      this.scroll(nextScrollDelta);
    }
  }

  select(index: number) {
    this.selectedIndex = index;
    this._cd.detectChanges();

    if (this.autoScroll) {
      setTimeout(() => this.centerThumbIfNeeded(index));
    }
  }

  _emitEvent(
    index: number,
    item: GalleryItemInternal,
    event: Event,
    emitter: EventEmitter<GalleryItemEvent>
  ) {
    emitter.emit({
      index,
      item,
      event,
    });
  }

  _onLoadChange(item: GalleryItemInternal, success: boolean) {
    item._thumbFailed = !success;
  }

  private scroll(totalScrollDelta: number) {
    if (!isBrowser) {
      return;
    }
    if (SUPPORT.scrollBehavior || this.scrollBehavior === 'auto') {
      this.thumbListRef.nativeElement[this._scrollKey] += totalScrollDelta;
      return;
    }
    if (this._scrollId != null) {
      cancelAnimationFrame(this._scrollId);
    }

    const totalDistance = Math.abs(totalScrollDelta);
    const startTime = Date.now();
    const baseArrowSlideTime = 200;
    let totalTime = (Math.log10(totalDistance) - 1.1) * baseArrowSlideTime;
    if (totalTime < 0) {
      totalTime = baseArrowSlideTime;
    }
    let currentScroll = 0;

    // Emulating native scroll-behavior: smooth
    // NOTE: This function is called on per frame basis recursively to create smooth animation.
    // The scroll value is updated proportionally to the time elapsed since the animation's start.
    // The period of requested frames should match the display's refresh rate as recommended in W3C spec.
    const animate = () => {
      const suggestedScroll = Math.ceil(
        ((Date.now() - startTime) / totalTime) * totalDistance
      );
      let frameScroll = Math.min(
        suggestedScroll - currentScroll,
        totalDistance - currentScroll
      );
      frameScroll *= Math.sign(totalScrollDelta);
      currentScroll = suggestedScroll;

      this.thumbListRef.nativeElement[this._scrollKey] += frameScroll;

      if (currentScroll <= totalDistance) {
        this._scrollId = requestAnimationFrame(animate);
      }
    };

    this._scrollId = requestAnimationFrame(animate);
  }

  private onArrowsObserved: IntersectionObserverCallback = entries => {
    const entryEl1 = entries[0].target as HTMLElement;
    const firstThumbEntry =
      entryEl1 === this.thumbsRef.first.nativeElement ? entries[0] : entries[1];
    const lastThumbEntry =
      entryEl1 === this.thumbsRef.last.nativeElement ? entries[0] : entries[1];

    if (firstThumbEntry) {
      this._showStartArrow = firstThumbEntry.intersectionRatio < 1;
    }
    if (lastThumbEntry) {
      this._showEndArrow = lastThumbEntry.intersectionRatio < 1;
    }

    this._cd.detectChanges();
  };

  private observeArrows() {
    if (!this._arrowObserver) {
      this._arrowObserver = new IntersectionObserver(this.onArrowsObserved, {
        root: this.thumbListRef.nativeElement,
        threshold: 1.0,
      });
    } else {
      this._arrowObserver.disconnect();
    }
    setTimeout(() => {
      this._arrowObserver.observe(this.thumbsRef.first.nativeElement);
      this._arrowObserver.observe(this.thumbsRef.last.nativeElement);
    });
  }

  private unobserveArrows() {
    this._arrowObserver && this._arrowObserver.disconnect();
  }
}
