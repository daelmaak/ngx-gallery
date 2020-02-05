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
    return this.smoothScrollAllowed ? this._scrollBehavior : 'auto';
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

  private destroy$ = new Subject();

  private itemWidth: number;
  private _scrollBehavior: ScrollBehavior;
  private smoothScrollAllowed = false;
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

    this.initOnScrollItemSelection();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  prev() {
    this.select(this.selectedItem - 1);
  }

  next() {
    this.select(this.selectedItem + 1);
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

    this.selectedItem = index;
    this.selection.emit(index);
    this.center();
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

    if (selectedPrecise < 0) {
      return -1;
    }

    if (Math.ceil(selectedPrecise) >= this.items.length) {
      return this.items.length;
    }

    return Math.round(selectedPrecise);
  }

  /**
   * Determines selected item upon native scroll in the image list
   * If the selected item is out of range, the image list will be looped
   */
  private initOnScrollItemSelection() {
    const listEl = this.imageListRef.nativeElement;
    fromEvent(listEl, 'touchstart')
      .pipe(
        switchMapTo(fromEvent(document.body, 'touchend').pipe(take(1))),
        switchMapTo(
          fromEvent(listEl, 'scroll').pipe(
            // if there are no more scroll events to come, simulate one
            startWith(null),
            takeUntil(fromEvent(document.body, 'touchstart')),
            debounceTime(50)
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(_ => {
        const selectedItem = this.getSelectedItemFromScrollPosition();

        if (selectedItem < 0 || selectedItem >= this.items.length) {
          this.select(selectedItem);
        } else {
          this.selectedItem = selectedItem;
          this.selection.emit(selectedItem);
        }
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
      this.smoothScrollAllowed = false;
      this.cd.detectChanges();

      requestAnimationFrame(() => {
        this.itemWidth = this.hostRef.nativeElement.offsetWidth;
        this.center();
        this.imagesShown = true;
        this.smoothScrollAllowed = true;
        this.cd.detectChanges();
      });
    });
  };

  private shiftImages(x: number) {
    const imageListEl = this.imageListRef.nativeElement;

    if (imageListEl.scrollTo) {
      imageListEl.scrollTo({ left: x, behavior: this.scrollBehavior });
    } else if (this.scrollBehavior === 'smooth') {
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
