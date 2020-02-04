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
  ViewChild,
  TemplateRef
} from '@angular/core';
import { fromEvent, of, Subject, animationFrameScheduler, merge } from 'rxjs';
import {
  debounceTime,
  map,
  repeat,
  switchMap,
  takeUntil,
  takeWhile
} from 'rxjs/operators';
import { GalleryItem } from '../../core/gallery-item';
import { Orientation } from '../../core/orientation';
import { ImageFit } from '../../core/image-fit';
import { OverscrollBehavior } from '../../core/overscroll-behavior';

@Component({
  selector: 'ngx-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailsComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input()
  items: GalleryItem[] = [];

  @Input()
  selectedItem: number;

  @Input()
  @HostBinding('class')
  orientation: Orientation;

  @Input()
  arrows: boolean;

  @Input()
  arrowSlideTime: number;

  @Input()
  arrowSlideByLength: number;

  @Input()
  autoScroll: boolean;

  @Input()
  set imageFit(fit: ImageFit) {
    this.imageStyles = {
      ...this.imageStyles,
      backgroundSize: fit || this.imageStyles.backgroundSize
    };
  }

  @Input()
  set scrollBehavior(val: ScrollBehavior) {
    this._scrollBehavior = val || 'smooth';
  }

  get scrollBehavior() {
    return this.smoothScrollAllowed ? this._scrollBehavior : 'auto';
  }

  @Input()
  overscrollBehavior: OverscrollBehavior;

  @Input()
  thumbTemplate: TemplateRef<any>;

  @Output()
  thumbClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<GalleryItem>();

  @ViewChild('thumbs', { static: true })
  thumbListRef: ElementRef<HTMLElement>;

  imageStyles = {
    backgroundSize: 'cover'
  };
  showStartArrow = false;
  showEndArrow = false;
  vertical: boolean;

  private destroy$ = new Subject();
  private sliding$ = new Subject<number>();

  private _scrollBehavior: ScrollBehavior;
  private smoothScrollAllowed = false;
  private overscrollBehaviorSupported =
    'overscrollBehavior' in document.body.style;

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

  ngOnChanges({ orientation, selectedItem }: SimpleChanges) {
    if (orientation && orientation.currentValue != null) {
      const newOrientation: Orientation = orientation.currentValue;
      this.vertical = newOrientation === 'left' || newOrientation === 'right';
    }
    if (
      selectedItem &&
      selectedItem.currentValue != null &&
      !selectedItem.firstChange &&
      this.autoScroll
    ) {
      this.centerThumb(selectedItem.currentValue);
    }
  }

  ngOnInit() {
    this.arrowSlideTime === undefined && (this.arrowSlideTime = 200);
    this.scrollBehavior == null && (this.scrollBehavior = 'smooth');
    this.overscrollBehavior == null && (this.overscrollBehavior = 'auto');
    this.autoScroll === undefined && (this.autoScroll = true);

    if (this.arrows && typeof window !== undefined) {
      this.initManualScroll();

      merge(
        fromEvent(this.thumbListRef.nativeElement, 'scroll'),
        fromEvent(window, 'resize')
      )
        .pipe(debounceTime(50), takeUntil(this.destroy$))
        .subscribe(this.updateArrows);

      requestAnimationFrame(this.updateArrows);
    }

    // TODO change from CSS.supports to 'cssProp' in document.body.style because IE doesn't support it
    if (
      this.overscrollBehavior === 'contain' &&
      !this.overscrollBehaviorSupported
    ) {
      this.initManualOverscrollContain();
    }
  }

  ngAfterViewInit() {
    this.centerThumb(this.selectedItem);
    this.smoothScrollAllowed = true;
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  arrowSlide(direction: number) {
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

  centerThumb(index: number) {
    const itemEls = this.thumbListRef.nativeElement.querySelectorAll('li');
    const nextItemEl = itemEls.item(index);

    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = nextItemEl;

    // TODO maybe find better name than offset
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

  private initManualOverscrollContain() {
    fromEvent<WheelEvent>(this.thumbListRef.nativeElement, 'wheel')
      .pipe(takeUntil(this.destroy$))
      .subscribe(e => {
        const {
          offsetHeight,
          scrollTop,
          scrollHeight
        } = this.thumbListRef.nativeElement;

        if (
          (e.deltaY < 0 && scrollTop === 0) ||
          (e.deltaY > 0 && offsetHeight + scrollTop >= scrollHeight)
        ) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
  }

  private initManualScroll() {
    // NOTE: This stream requests animation frames in a periodical fashion so that it can update scroll position of thumbnails
    // before each paint. The scroll value is updated proportionally to the time elapsed since the animation's start.
    // The period of requested frames should match the display's refresh rate as recommended in W3C spec. Essentially, this stream
    // requests animation frames in the same way as recursive calls to requestAnimationFrame().
    this.sliding$
      .pipe(
        switchMap(totalScrollDelta => {
          if (this.scrollBehavior === 'auto') {
            return of(totalScrollDelta);
          }
          // Emulating native scroll-behavior: smooth
          const negative = totalScrollDelta < 0;
          totalScrollDelta = Math.abs(totalScrollDelta);

          const startTime = Date.now();
          let totalTime =
            (Math.log10(totalScrollDelta) - 1.1) * this.arrowSlideTime;

          if (totalTime < 0) {
            totalTime = this.arrowSlideTime;
          }

          let currentScroll = 0;

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
    this.showStartArrow = this.thumbListRef.nativeElement[this.scrollKey] > 0;

    this.showEndArrow =
      this.thumbListRef.nativeElement[this.scrollKey] <
      this.thumbListMainAxis - this.thumbContainerMainAxis;

    this.cd.detectChanges();
  };
}
