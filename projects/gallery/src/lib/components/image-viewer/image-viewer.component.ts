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
  SimpleChanges,
  HostBinding
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

import { ImageFit, Orientation, SUPPORT, Loading } from '../../core';
import { GalleryItemInternal } from '../../core/gallery-item';

@Component({
  selector: 'ngx-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageViewerComponent implements OnChanges, OnInit, OnDestroy {
  @Input()
  items: GalleryItemInternal[];

  @Input()
  arrows: boolean;

  @Input()
  selectedItem: number;

  @Input()
  imageCounter: boolean;

  @Input()
  imageFit: ImageFit;

  @Input()
  imageLoading: Loading;

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

  @HostBinding('class.scroll-snap')
  @Input()
  scrollSnap: boolean;

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
  private lazyImageObserver: IntersectionObserver;

  private itemWidth: number;
  private smoothScrollAllowed = false;
  private _scrollBehavior: ScrollBehavior;

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
      this.initLazyLoad();
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

    this.initLazyLoad();
    this.initOnScrollItemSelection();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();

    if (this.lazyImageObserver) {
      this.lazyImageObserver.disconnect();
    }
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

  onLazyLoadStarted(item: GalleryItemInternal) {
    item._loading = true;
  }

  onLazyLoaded(item: GalleryItemInternal) {
    // TODO once new items come, merge new and old
    item._loaded = true;
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

  private initLazyLoad() {
    if (
      !SUPPORT.intersectionObserver ||
      this.imageLoading !== 'lazy' ||
      !this.items ||
      !this.items.length
    ) {
      return;
    }

    const listEl = this.hostRef.nativeElement;

    if (!this.lazyImageObserver) {
      this.lazyImageObserver = new IntersectionObserver(
        this.onLazyLoadIntersection,
        {
          root: listEl,
          threshold: 0.1
        }
      );
    }
    this.observeImagesForLazyLoad();
  }

  private observeImagesForLazyLoad() {
    this.lazyImageObserver.disconnect();

    requestAnimationFrame(() => {
      // image elements should be rendered now
      this.imageListRef.nativeElement
        .querySelectorAll('.item img')
        .forEach(el => this.lazyImageObserver.observe(el));
    });
  }

  private onLazyLoadIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    // TODO maybe debounce so that middle image don't get loaded unnecessarily
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        const lazyImage = entry.target as HTMLImageElement;

        if (!lazyImage.getAttribute('src')) {
          lazyImage.src = lazyImage.dataset.src;
          this.items.find(i => i.src === lazyImage.dataset.src)._loading = true;
          this.cd.markForCheck();
        }
        observer.unobserve(lazyImage);
      }
    });
  };

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

    if (this.scrollSnap) {
      if (!SUPPORT.scrollBehavior && this.scrollBehavior === 'smooth') {
        this.shiftImagesManually(x);
      } else {
        imageListEl.scrollLeft = x;
      }
    } else {
      this.imageListRef.nativeElement.style.transform = `translate3d(-${x}px, 0, 0)`;
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
