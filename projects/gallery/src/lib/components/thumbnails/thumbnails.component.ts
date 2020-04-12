import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  animationFrameScheduler,
  fromEvent,
  merge,
  of,
  Subject,
  Subscription
} from 'rxjs';
import {
  debounceTime,
  map,
  repeat,
  switchMap,
  takeUntil,
  takeWhile
} from 'rxjs/operators';

import { isBrowser, SUPPORT, Orientation, ObjectFit } from '../../core';
import { GalleryItemInternal } from '../../core/gallery-item';

@Component({
  selector: 'ngx-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailsComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input()
  items: GalleryItemInternal[] = [];

  @Input()
  selectedIndex: number;

  @Input()
  @HostBinding('class')
  orientation: Orientation;

  @Input()
  arrows: boolean;

  @Input()
  arrowSlideByLength: number;

  @Input()
  autoScroll: boolean;

  @Input()
  objectFit: ObjectFit;

  @Input()
  set scrollBehavior(val: ScrollBehavior) {
    this._scrollBehavior = val || 'smooth';
  }

  get scrollBehavior() {
    return this.smoothScrollAllowed ? this._scrollBehavior : 'auto';
  }

  @Input()
  thumbTemplate: TemplateRef<any>;

  @Input()
  thumbErrorTemplate: TemplateRef<any>;

  @Input()
  prevArrowTemplate: TemplateRef<void>;

  @Input()
  nextArrowTemplate: TemplateRef<void>;

  @Output()
  thumbClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<GalleryItemInternal>();

  @ViewChild('thumbs', { static: true })
  thumbListRef: ElementRef<HTMLElement>;
  showStartArrow = false;
  showEndArrow = false;
  vertical: boolean;

  private destroy$ = new Subject();
  private sliding$ = new Subject<number>();
  private arrowUpdatesSub: Subscription;

  private _scrollBehavior: ScrollBehavior;
  private smoothScrollAllowed = false;

  private get scrollKey(): string {
    return this.vertical ? 'scrollTop' : 'scrollLeft';
  }

  private get thumbContainerMainAxis(): number {
    return this.vertical
      ? this.elRef.nativeElement.offsetHeight
      : this.elRef.nativeElement.offsetWidth;
  }

  private get thumbListMainAxis(): number {
    return this.vertical
      ? this.thumbListRef.nativeElement.scrollHeight
      : this.thumbListRef.nativeElement.scrollWidth;
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
    if (arrows && !arrows.firstChange) {
      if (arrows.currentValue) {
        this.initArrowUpdates();
      } else {
        this.showStartArrow = false;
        this.showEndArrow = false;
        this.arrowUpdatesSub.unsubscribe();
      }
    }
    if (items && items.currentValue) {
      if (!this.arrowUpdatesSub && this.arrows) {
        this.initArrowUpdates();
      } else if (this.arrows) {
        this.updateArrows();
      }
      if (!items.previousValue || !items.previousValue.length) {
        setTimeout(() => this.centerThumbIfNeeded(this.selectedIndex));
      }
    }
  }

  ngOnInit() {
    this.objectFit == null && (this.objectFit = 'cover');
    this.autoScroll === undefined && (this.autoScroll = true);
    this.scrollBehavior == null && (this.scrollBehavior = 'smooth');

    if (this.arrows && isBrowser) {
      this.initImperativeScroll();
    }
  }

  ngAfterViewInit() {
    this.centerThumbIfNeeded(this.selectedIndex);
    this.smoothScrollAllowed = true;
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  slide(direction: number) {
    let delta: number;

    if (this.arrowSlideByLength) {
      delta = this.arrowSlideByLength;
    } else {
      // Note: Slide by the full height/width of the gallery
      // or by the overflow of the thumbnails - to prevent unnecessary requestAnimationFrame calls while trying to scroll
      // outside of the min/max scroll of the thumbnails
      delta = Math.min(
        this.thumbContainerMainAxis,
        this.thumbListMainAxis - this.thumbContainerMainAxis
      );
    }
    this.sliding$.next(delta * direction);
  }

  centerThumbIfNeeded(index: number) {
    if (!this.items || this.items.length <= 1) {
      return;
    }

    const itemEls = this.thumbListRef.nativeElement.querySelectorAll('li');
    const nextItemEl = itemEls.item(index);

    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = nextItemEl;

    const itemOffset = this.vertical ? offsetTop : offsetLeft;
    const itemMainAxis = this.vertical ? offsetHeight : offsetWidth;

    const thumbListScrollPortAxis = this.thumbContainerMainAxis;
    const thumbListScroll = this.thumbListRef.nativeElement[this.scrollKey];

    const nextScrollDelta =
      itemOffset +
      itemMainAxis / 2 -
      thumbListScrollPortAxis / 2 -
      thumbListScroll;

    if (
      thumbListScroll + thumbListScrollPortAxis < itemOffset + itemMainAxis ||
      thumbListScroll > itemOffset
    ) {
      this.sliding$.next(nextScrollDelta);
    }
  }

  select(index: number) {
    if (this.autoScroll) {
      this.centerThumbIfNeeded(index);
    }
  }

  onItemErrored(item: GalleryItemInternal) {
    item._thumbFailed = true;
  }

  private initArrowUpdates() {
    if (isBrowser) {
      this.arrowUpdatesSub = merge(
        fromEvent(this.thumbListRef.nativeElement, 'scroll', { passive: true }),
        fromEvent(window, 'resize')
      )
        .pipe(debounceTime(50), takeUntil(this.destroy$))
        .subscribe(this.updateArrows);
    }

    this.updateArrows();
  }

  private initImperativeScroll() {
    this.sliding$
      .pipe(
        switchMap(totalScrollDelta => {
          if (SUPPORT.scrollBehavior || this.scrollBehavior === 'auto') {
            return of(totalScrollDelta);
          }

          const negative = totalScrollDelta < 0;
          totalScrollDelta = Math.abs(totalScrollDelta);

          const startTime = Date.now();
          const baseArrowSlideTime = 200;
          let totalTime =
            (Math.log10(totalScrollDelta) - 1.1) * baseArrowSlideTime;

          if (totalTime < 0) {
            totalTime = baseArrowSlideTime;
          }

          let currentScroll = 0;

          // Emulating native scroll-behavior: smooth
          // NOTE: This stream requests animation frames in a periodical fashion so that it can update scroll position of thumbnails
          // before each paint. The scroll value is updated proportionally to the time elapsed since the animation's start.
          // The period of requested frames should match the display's refresh rate as recommended in W3C spec. Essentially, this stream
          // requests animation frames in the same way as recursive calls to requestAnimationFrame().
          return of(0, animationFrameScheduler).pipe(
            repeat(),
            map(_ => {
              const suggestedScroll = Math.ceil(
                ((Date.now() - startTime) / totalTime) * totalScrollDelta
              );
              const frameScroll = Math.min(
                suggestedScroll - currentScroll,
                totalScrollDelta - currentScroll
              );
              currentScroll = suggestedScroll;

              return negative ? -frameScroll : frameScroll;
            }),
            takeWhile(_ => currentScroll < totalScrollDelta, true)
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(frameScroll => {
        this.thumbListRef.nativeElement[this.scrollKey] += frameScroll;
      });
  }

  private updateArrows = () => {
    setTimeout(() => {
      this.showStartArrow = this.thumbListRef.nativeElement[this.scrollKey] > 0;

      this.showEndArrow =
        this.thumbListRef.nativeElement[this.scrollKey] <
        this.thumbListMainAxis - this.thumbContainerMainAxis;

      this.cd.detectChanges();
    });
  };
}
