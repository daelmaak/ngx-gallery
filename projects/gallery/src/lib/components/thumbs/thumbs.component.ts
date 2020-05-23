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
import { GalleryItemInternal, GalleryItemEvent } from '../../core/gallery-item';

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
    return this.smoothScrollAllowed ? this._scrollBehavior : 'auto';
  }

  @Output() thumbClick = new EventEmitter<GalleryItemEvent>();
  @Output() thumbHover = new EventEmitter<GalleryItemEvent>();

  @ViewChild('thumbs', { static: true }) thumbListRef: ElementRef<HTMLElement>;
  @ViewChildren('thumb') thumbsRef: QueryList<ElementRef<HTMLElement>>;

  showStartArrow = false;
  showEndArrow = false;
  vertical: boolean;

  private destroy$ = new Subject();

  private arrowObserver: IntersectionObserver;
  private _scrollBehavior: ScrollBehavior;
  private smoothScrollAllowed = false;

  private scrollId: number;

  @HostBinding('class')
  get cssClass() {
    return `doe-thumbs--${this.orientation}`;
  }

  private get scrollKey(): string {
    return this.vertical ? 'scrollTop' : 'scrollLeft';
  }

  private get hostOffsetAxis(): number {
    return this.vertical
      ? this.elRef.nativeElement.offsetHeight
      : this.elRef.nativeElement.offsetWidth;
  }

  constructor(
    private cd: ChangeDetectorRef,
    private elRef: ElementRef<HTMLElement>
  ) {}

  ngOnChanges({ arrows, items, orientation }: SimpleChanges) {
    if (orientation && orientation.currentValue != null) {
      const newOrientation: Orientation = orientation.currentValue;
      this.vertical = newOrientation === 'left' || newOrientation === 'right';
    }
    if (arrows) {
      if (arrows.currentValue && this.items && this.items.length) {
        this.observeArrows();
      } else if (!arrows.currentValue) {
        this.showStartArrow = false;
        this.showEndArrow = false;
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
          this.smoothScrollAllowed = true;
        });
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
    this.arrowObserver && this.arrowObserver.disconnect();
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

    const nextItemEl = this.thumbsRef.toArray()[index].nativeElement;
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

  onItemErrored(item: GalleryItemInternal) {
    item._thumbFailed = true;
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

  private scroll(totalScrollDelta: number) {
    if (!isBrowser) {
      return;
    }
    if (SUPPORT.scrollBehavior || this.scrollBehavior === 'auto') {
      this.thumbListRef.nativeElement[this.scrollKey] += totalScrollDelta;
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

      this.thumbListRef.nativeElement[this.scrollKey] += frameScroll;

      if (currentScroll <= totalDistance) {
        this.scrollId = requestAnimationFrame(animate);
      }
    };

    this.scrollId = requestAnimationFrame(animate);
  }

  private onArrowsObserved: IntersectionObserverCallback = entries => {
    const entryEl1 = entries[0].target as HTMLElement;
    const firstThumbEntry =
      entryEl1 === this.thumbsRef.first.nativeElement ? entries[0] : entries[1];
    const lastThumbEntry =
      entryEl1 === this.thumbsRef.last.nativeElement ? entries[0] : entries[1];

    if (firstThumbEntry) {
      this.showStartArrow = firstThumbEntry.intersectionRatio < 1;
    }
    if (lastThumbEntry) {
      this.showEndArrow = lastThumbEntry.intersectionRatio < 1;
    }

    this.cd.detectChanges();
  };

  private observeArrows() {
    if (!this.arrowObserver) {
      this.arrowObserver = new IntersectionObserver(this.onArrowsObserved, {
        root: this.thumbListRef.nativeElement,
        threshold: 1.0,
      });
    } else {
      this.arrowObserver.disconnect();
    }
    setTimeout(() => {
      this.arrowObserver.observe(this.thumbsRef.first.nativeElement);
      this.arrowObserver.observe(this.thumbsRef.last.nativeElement);
    });
  }

  private unobserveArrows() {
    this.arrowObserver && this.arrowObserver.disconnect();
  }
}
