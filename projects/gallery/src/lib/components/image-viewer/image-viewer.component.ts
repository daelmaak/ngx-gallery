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
  loading: Loading;

  @Input()
  imageTemplate: TemplateRef<any>;

  @Input()
  loop: boolean;

  @Input()
  galleryMainAxis: Orientation;

  @Input()
  scrollBehavior: ScrollBehavior;

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
  private lazyLoadObserver: IntersectionObserver;

  private itemWidth: number;

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

      if (items.previousValue && items.currentValue) {
        const prevItems = items.previousValue as GalleryItemInternal[];
        const currItems = items.currentValue as GalleryItemInternal[];
        this.items = currItems.map(c => {
          const prevItem = prevItems.find(p => p.src === c.src);

          if (prevItem) {
            return {
              ...c,
              _loaded: prevItem._loaded,
              _loading: prevItem._loading
            };
          }
          return { ...c };
        });
      }
    }
  }

  ngOnInit() {
    this.imageCounter === undefined && (this.imageCounter = true);
    this.imageFit == null && (this.imageFit = 'contain');
    this.scrollBehavior == null && (this.scrollBehavior = 'smooth');

    if (typeof window !== 'undefined') {
      fromEvent(window, 'resize')
        .pipe(takeUntil(this.destroy$))
        .subscribe(this.onResize);
    }

    this.initLazyLoad();
    this.initOnScrollItemSelection();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();

    if (this.lazyLoadObserver) {
      this.lazyLoadObserver.disconnect();
    }
  }

  prev() {
    this.select(this.selectedItem - 1);
  }

  next() {
    this.select(this.selectedItem + 1);
  }

  select(index: number, scrollBehavior = this.scrollBehavior) {
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
    this.center(scrollBehavior);
  }

  onLazyLoadStarted(item: GalleryItemInternal) {
    item._loading = true;
  }

  onLazyLoaded(item: GalleryItemInternal) {
    item._loaded = true;
  }

  private center(scrollBehavior = this.scrollBehavior) {
    const shift = this.selectedItem * this.itemWidth + this.fringeItemWidth;

    this.shiftImages(shift, scrollBehavior);
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
      this.loading !== 'lazy' ||
      !this.items ||
      !this.items.length
    ) {
      return;
    }

    const listEl = this.hostRef.nativeElement;

    if (!this.lazyLoadObserver) {
      this.lazyLoadObserver = new IntersectionObserver(
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
    this.lazyLoadObserver.disconnect();

    requestAnimationFrame(() => {
      // image elements should be rendered now
      this.imageListRef.nativeElement
        .querySelectorAll('.item img')
        .forEach(el => this.lazyLoadObserver.observe(el));
    });
  }

  private onLazyLoadIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        const lazyImage = entry.target as HTMLImageElement;

        if (!lazyImage.getAttribute('src')) {
          lazyImage.src = lazyImage.dataset.src;
          this.items.find(i => i.src === lazyImage.dataset.src)._loading = true;
          this.cd.markForCheck();
        }
        this.lazyLoadObserver.unobserve(lazyImage);
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
      if (!this.items || !this.items.length) {
        this.shiftImages(this.fringeItemWidth, 'auto');
      } else {
        this.itemWidth = this.hostRef.nativeElement.offsetWidth;
        this.center('auto');
      }

      requestAnimationFrame(() => {
        this.imagesShown = true;
        this.cd.detectChanges();
      });
    });
  };

  private shiftImages(x: number, scrollBehavior = this.scrollBehavior) {
    const imageListEl = this.imageListRef.nativeElement;

    if (this.scrollSnap) {
      if (!SUPPORT.scrollBehavior && scrollBehavior === 'smooth') {
        this.shiftImagesManually(x);
      } else if (imageListEl.scrollTo) {
        imageListEl.scroll({ left: x, behavior: scrollBehavior });
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
