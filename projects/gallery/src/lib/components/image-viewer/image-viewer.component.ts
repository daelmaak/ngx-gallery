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
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { animationFrameScheduler, fromEvent, interval, Subject } from 'rxjs';
import {
  debounceTime,
  map,
  startWith,
  switchMapTo,
  take,
  takeUntil,
  takeWhile
} from 'rxjs/operators';

import { GalleryItem, ImageFit, Orientation, SUPPORT } from '../../core';

@Component({
  selector: 'ngx-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageViewerComponent implements OnChanges, OnInit, OnDestroy {
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
  galleryMainAxis: Orientation;

  @Input()
  set scrollBehavior(val: ScrollBehavior) {
    this._scrollBehavior = val || 'smooth';
  }

  get scrollBehavior() {
    return this.smoothScrollAllowed ? this._scrollBehavior : 'auto';
  }

  @Input()
  prevArrowTemplate: TemplateRef<any>;

  @Input()
  nextArrowTemplate: TemplateRef<any>;

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

  get showArrow() {
    return this.arrows && this.items && this.items.length > 1;
  }

  get showPrevArrow() {
    return this.showArrow && (this.selectedItem > 0 || this.loop);
  }

  get showNextArrow() {
    return (
      this.showArrow && (this.selectedItem < this.items.length - 1 || this.loop)
    );
  }

  constructor(
    private hostRef: ElementRef<HTMLElement>,
    private cd: ChangeDetectorRef
  ) {}

  ngOnChanges({ galleryMainAxis, items }: SimpleChanges) {
    if (galleryMainAxis && !galleryMainAxis.firstChange) {
      // if image-viewer - thumbnails layout (main axis) changed from vertical to horizontal or vice versa
      if (!(galleryMainAxis.currentValue & galleryMainAxis.previousValue)) {
        requestAnimationFrame(() => {
          this.itemWidth = this.hostRef.nativeElement.offsetWidth;
          this.center();
        });
      }
    }
    // late initialization; in case the gallery items come later
    if (items && !items.firstChange) {
      this.onResize();
    }
  }

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
    if (this.selectedItem === index) {
      return;
    }

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
    const shift = this.selectedItem * this.itemWidth + this.fringeItemWidth;

    this.shiftImages(shift);
  }

  private getSelectedItemFromScrollPosition(): number {
    const scrollLeft = this.imageListRef.nativeElement.scrollLeft;
    let selectedPrecise = (scrollLeft - this.fringeItemWidth) / this.itemWidth;

    if (selectedPrecise < 0) {
      return -1;
    }

    // tolerance for some devices which don't give precise scroll left
    selectedPrecise = (scrollLeft - this.fringeItemWidth - 10) / this.itemWidth;
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
    const options = { passive: true };

    fromEvent(listEl, 'touchstart', options)
      .pipe(
        switchMapTo(
          fromEvent(document.body, 'touchend', options).pipe(take(1))
        ),
        switchMapTo(
          fromEvent(listEl, 'scroll', options).pipe(
            // if there are no more scroll events to come, simulate one
            startWith(null),
            takeUntil(fromEvent(document.body, 'touchstart', options)),
            debounceTime(150)
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
    requestAnimationFrame(() => {
      this.smoothScrollAllowed = false;
      this.cd.detectChanges();

      if (!this.items || !this.items.length) {
        this.shiftImages(this.fringeItemWidth);
      } else {
        this.itemWidth = this.hostRef.nativeElement.offsetWidth;
        this.center();
      }

      this.imagesShown = true;
      this.smoothScrollAllowed = true;
      this.cd.detectChanges();
    });
  };

  private shiftImages(x: number) {
    const imageListEl = this.imageListRef.nativeElement;

    if (!SUPPORT.scrollBehavior && this.scrollBehavior === 'smooth') {
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
