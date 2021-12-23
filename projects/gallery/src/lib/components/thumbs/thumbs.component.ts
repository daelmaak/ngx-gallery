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
import {
  isBrowser,
  Orientation,
  SUPPORT,
  ThumbTemplateContext,
} from '../../core';
import { Aria } from '../../core/aria';
import {
  GalleryItemEvent,
  GalleryItemInternal,
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
  @Input() scrollBehavior: ScrollBehavior;
  @Input() isRtl: boolean;

  @Output() thumbClick = new EventEmitter<GalleryItemEvent>();
  @Output() thumbHover = new EventEmitter<GalleryItemEvent>();

  @ViewChild('thumbs', { static: true }) thumbListRef: ElementRef<HTMLElement>;
  @ViewChildren('thumb') thumbsRef: QueryList<ElementRef<HTMLElement>>;

  isVideo = isVideo;

  showStartArrow = false;
  showEndArrow = false;

  private arrowObserver: IntersectionObserver;
  private scrollId: number;

  @HostBinding('class')
  get cssClass() {
    return `doe-thumbs--${this.orientation}`;
  }

  private get hostOffsetAxis(): number {
    return this.vertical
      ? this.elRef.nativeElement.offsetHeight
      : this.elRef.nativeElement.offsetWidth;
  }

  private get scrollKey(): string {
    return this.vertical ? 'scrollTop' : 'scrollLeft';
  }

  private get thumbsEmpty(): boolean {
    return !this.thumbsRef || !this.thumbsRef.length;
  }

  private get vertical(): boolean {
    return this.orientation === 'left' || this.orientation === 'right';
  }

  constructor(
    private cd: ChangeDetectorRef,
    private elRef: ElementRef<HTMLElement>
  ) {}

  ngOnChanges({ arrows, items }: SimpleChanges) {
    if (arrows) {
      if (arrows.currentValue) {
        this.observeArrows();
      } else if (!arrows.currentValue) {
        this.showStartArrow = this.showEndArrow = false;
        this.unobserveArrows();
      }
    }

    if (items) {
      setTimeout(() => {
        if (this.arrows) {
          this.observeArrows();
        }
        this.centerThumbIfNeeded(this.selectedIndex);
      });
    }
  }

  ngOnDestroy() {
    this.unobserveArrows();
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
      const thumbListScrollAxis = this.vertical
        ? thumbList.scrollHeight
        : thumbList.scrollWidth;
      const thumbListOffsetAxis = this.vertical
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

    const itemOffset = this.vertical ? offsetTop : offsetLeft;
    const itemOffsetAxis = this.vertical ? offsetHeight : offsetWidth;

    const hostScrollAxis = this.hostOffsetAxis;
    const thumbListScroll = this.thumbListRef.nativeElement[this.scrollKey];

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
    this.cd.detectChanges();

    if (this.autoScroll) {
      setTimeout(() => this.centerThumbIfNeeded(index));
    }
  }

  emitEvent(
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

  onLoadChange(item: GalleryItemInternal, success: boolean) {
    item._thumbFailed = !success;
  }

  private scroll(totalScrollDelta: number) {
    if (!isBrowser) {
      return;
    }
    if (SUPPORT.scrollBehavior || this.scrollBehavior === 'auto') {
      this.shiftByDelta(totalScrollDelta);
      return;
    }
    if (this.scrollId != null) {
      cancelAnimationFrame(this.scrollId);
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

      this.shiftByDelta(frameScroll);

      if (currentScroll <= totalDistance) {
        this.scrollId = requestAnimationFrame(animate);
      }
    };

    this.scrollId = requestAnimationFrame(animate);
  }

  private shiftByDelta(delta: number) {
    this.thumbListRef.nativeElement[this.scrollKey] += delta;
  }

  private onArrowsObserved: IntersectionObserverCallback = entries => {
    if (this.thumbsEmpty) return;

    const firstTarget = entries[0].target;
    const { first, last } = this.thumbsRef;

    const firstThumbEntry =
      firstTarget === first.nativeElement ? entries[0] : entries[1];
    const lastThumbEntry =
      firstTarget === last.nativeElement ? entries[0] : entries[1];

    this.setObservedArrows(firstThumbEntry, lastThumbEntry);

    this.cd.detectChanges();
  };

  private observeArrows() {
    if (this.thumbsEmpty) return;

    if (!this.arrowObserver) {
      this.arrowObserver = new IntersectionObserver(this.onArrowsObserved, {
        root: this.thumbListRef.nativeElement,
        threshold: 1.0,
      });
    } else {
      this.unobserveArrows();
    }
    this.arrowObserver.observe(this.thumbsRef.first.nativeElement);
    this.arrowObserver.observe(this.thumbsRef.last.nativeElement);
  }

  private setObservedArrows(
    firstThumb: IntersectionObserverEntry,
    lastThumb: IntersectionObserverEntry
  ) {
    const inverse = this.isRtl && !this.vertical;

    if (inverse) {
      if (lastThumb) this.showStartArrow = lastThumb.intersectionRatio < 1;
      if (firstThumb) this.showEndArrow = firstThumb.intersectionRatio < 1;
    } else {
      if (firstThumb) this.showStartArrow = firstThumb.intersectionRatio < 1;
      if (lastThumb) this.showEndArrow = lastThumb.intersectionRatio < 1;
    }
  }

  private unobserveArrows() {
    this.arrowObserver && this.arrowObserver.disconnect();
  }
}
