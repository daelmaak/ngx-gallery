import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  animationFrameScheduler,
  BehaviorSubject,
  fromEvent,
  interval,
  Observable,
  Subject
} from 'rxjs';
import {
  debounceTime,
  filter,
  map,
  startWith,
  switchMapTo,
  take,
  takeUntil,
  takeWhile,
  tap
} from 'rxjs/operators';
import { GalleryItem } from '../../core/gallery-item';
import { ImageFit } from '../../core/image-fit';

@Component({
  selector: 'ngx-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageViewerComponent implements OnInit, OnDestroy {
  @Input()
  items: GalleryItem[];

  @Input()
  arrows: boolean;

  @Input()
  selectedItem: number;

  @Input()
  imageCounter: boolean;

  @Input()
  imageFit: ImageFit;

  @Input()
  imageTemplate: TemplateRef<any>;

  @Input()
  loop: boolean;

  @Input()
  set scrollBehavior(val: ScrollBehavior) {
    this._scrollBehavior = val || 'smooth';
  }

  get scrollBehavior() {
    return this.smoothScroll ? this._scrollBehavior : 'auto';
  }

  @Output()
  imageClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<number>();

  @ViewChild('imageList', { static: true }) imageListRef: ElementRef<
    HTMLElement
  >;

  fringeItemWidth = 50;
  imagesShown = false;

  private scrolling$ = new BehaviorSubject(false);
  private destroy$ = new Subject();

  private itemWidth: number;
  private _scrollBehavior: ScrollBehavior;
  private smoothScroll = false;
  private scrollBehaviorSupported = 'scrollBehavior' in document.body.style;

  get showPrevArrow() {
    return this.arrows && (this.selectedItem > 0 || this.loop);
  }

  get showNextArrow() {
    return (
      this.arrows && (this.selectedItem < this.items.length - 1 || this.loop)
    );
  }

  constructor(
    private hostRef: ElementRef<HTMLElement>,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.imageCounter === undefined && (this.imageCounter = true);
    this.imageFit == null && (this.imageFit = 'contain');
    this.scrollBehavior == null && (this.scrollBehavior = 'smooth');

    if (typeof window !== 'undefined') {
      fromEvent(window, 'resize')
        .pipe(startWith(null), takeUntil(this.destroy$))
        .subscribe(this.onResize);
    }

    if (this.loop) {
      this.initFringeLooping();
    }

    this.initOnScrollItemSelection();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  prev() {
    this.afterScroll().subscribe(_ => this.select(this.selectedItem - 1));
  }

  next() {
    this.afterScroll().subscribe(_ => this.select(this.selectedItem + 1));
  }

  select(index: number) {
    if (!this.loop && (index < 0 || index >= this.items.length)) {
      this.center();
      return;
    }

    if (index < 0) {
      index = this.items.length - 1;
    } else if (index >= this.items.length) {
      index = 0;
    }

    this.afterScroll().subscribe(_ => {
      this.selectedItem = index;
      this.selection.emit(index);
      this.center();
    });
  }

  private afterScroll(): Observable<any> {
    return this.scrolling$.pipe(
      filter(scrolling => !scrolling),
      take(1)
    );
  }

  private center() {
    let shift = this.selectedItem * this.itemWidth;

    if (this.loop) {
      shift += this.fringeItemWidth;
    }
    this.shiftImages(shift);
  }

  private getSelectedItemFromScrollPosition(): number {
    const scrollLeft = this.imageListRef.nativeElement.scrollLeft;
    const selectedPrecise =
      (this.loop ? scrollLeft - this.fringeItemWidth : scrollLeft) /
      this.itemWidth;

    return Math.round(selectedPrecise);
  }

  /**
   * Inits monitor of user scrolling to the fringes of the image list.
   * If scroll to the fringe detected, image list will loop
   */
  private initFringeLooping() {
    fromEvent(this.hostRef.nativeElement, 'touchstart')
      .pipe(
        switchMapTo(
          fromEvent(this.hostRef.nativeElement, 'touchmove').pipe(take(1))
        ),
        switchMapTo(fromEvent(document, 'touchend')),
        switchMapTo(
          fromEvent(this.imageListRef.nativeElement, 'scroll').pipe(
            startWith(null), // substitute for scroll event on Android, where no more scroll events are emitted after touchend
            debounceTime(60),
            take(1)
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(_ => {
        const scrollLeft = this.imageListRef.nativeElement.scrollLeft;
        if (scrollLeft < this.fringeItemWidth) {
          this.selectedItem = this.items.length - 1;
          this.cd.markForCheck();
          this.center();
        } else if (
          scrollLeft >
          (this.items.length - 1) * this.itemWidth + this.fringeItemWidth
        ) {
          this.selectedItem = 0;
          this.cd.markForCheck();
          this.center();
        }
      });
  }

  /**
   * Determines selected item upon native scroll in the image list
   */
  private initOnScrollItemSelection() {
    fromEvent(this.imageListRef.nativeElement, 'scroll')
      .pipe(
        tap(_ => this.scrolling$.next(true)),
        // determine the scroll end. 100ms should be enough
        debounceTime(100),
        takeUntil(this.destroy$)
      )
      .subscribe(_ => {
        this.selectedItem = this.getSelectedItemFromScrollPosition();
        this.scrolling$.next(false);
        this.selection.emit(this.selectedItem);
      });
  }

  private onResize = () => {
    // NOTE: This combination of requested frames solves problem when switching between landscape and portrait
    // Because the image list is based on pure scroll, turning phone changes scroll position because image width changes.
    // That way, the selected image is no longer centered.
    //
    // The approach below first turns off image smooth transition before the incoming frame. That allows the second
    // requestAnimationFrame to take advantage of it, center the image and turn on the smooth transition before a second paint.
    // Given this process only requires 2 frames and there is no image transition in between, it looks very snappy to the user.
    requestAnimationFrame(() => {
      this.smoothScroll = false;
      this.cd.detectChanges();

      requestAnimationFrame(() => {
        this.itemWidth = this.hostRef.nativeElement.offsetWidth;
        this.center();
        this.imagesShown = true;
        this.smoothScroll = true;
        this.cd.detectChanges();
      });
    });
  };

  private shiftImages(x: number) {
    const imageListEl = this.imageListRef.nativeElement;

    if (!this.scrollBehaviorSupported && this.scrollBehavior === 'smooth') {
      this.shiftImagesManually(x);
    } else {
      imageListEl.scrollLeft = x;
    }
  }

  /**
   * Substitutes missing scroll-behavior: smooth capabilities
   * @param x - scrollLeft
   */
  private shiftImagesManually(x: number) {
    const imageListEl = this.imageListRef.nativeElement;
    const startTime = Date.now();
    const startScroll = imageListEl.scrollLeft;
    const scrollDelta = Math.abs(startScroll - x);
    const negative = startScroll > x;
    let timeout =
      300 + Math.floor((scrollDelta - this.itemWidth) / this.itemWidth) * 100;

    timeout = Math.min(timeout, 1200);

    interval(0, animationFrameScheduler)
      .pipe(
        map(_ => {
          const timeEllapsedRatio = (Date.now() - startTime) / timeout;
          const suggestedScroll =
            startScroll +
            (negative
              ? -scrollDelta * timeEllapsedRatio
              : scrollDelta * timeEllapsedRatio);

          return negative
            ? Math.max(x, Math.ceil(suggestedScroll))
            : Math.min(x, Math.ceil(suggestedScroll));
        }),
        takeWhile(_ => timeout > Date.now() - startTime, true)
      )
      .subscribe(scroll => {
        imageListEl.scrollLeft = scroll;
      });
  }
}
