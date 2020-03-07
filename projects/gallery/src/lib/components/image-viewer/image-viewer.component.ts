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
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { animationFrameScheduler, fromEvent, Subject, NEVER } from 'rxjs';
import {
  map,
  observeOn,
  startWith,
  switchMap,
  switchMapTo,
  take,
  takeUntil,
  tap
} from 'rxjs/operators';

import {
  clientSide,
  ImageFit,
  Loading,
  Orientation,
  VerticalOrientation,
  UA
} from '../../core';
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
  prevArrowTemplate: TemplateRef<any>;

  @Input()
  nextArrowTemplate: TemplateRef<any>;

  @Input()
  selectedItem: number;

  @Input()
  imageCounter: boolean;

  @Input()
  imageCounterOrientation: VerticalOrientation;

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

  @Output()
  imageClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<number>();

  @ViewChild('imageList', { static: true }) imageListRef: ElementRef<
    HTMLElement
  >;

  imagesHidden = true;
  drag = false;

  private destroy$ = new Subject();
  private lazyLoadObserver: IntersectionObserver;

  private itemWidth: number;
  private listX = 0;

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
    this.imageCounterOrientation == null &&
      (this.imageCounterOrientation = 'top');
    this.imageFit == null && (this.imageFit = 'contain');
    this.scrollBehavior == null && (this.scrollBehavior = 'smooth');

    if (clientSide) {
      fromEvent(window, 'resize')
        .pipe(startWith(null), takeUntil(this.destroy$))
        .subscribe(this.onResize);

      const imageListEl = this.imageListRef.nativeElement;
      const touchstart$ = fromEvent<TouchEvent>(imageListEl, 'touchstart');
      const touchmove$ = fromEvent<TouchEvent>(window, 'touchmove', {
        passive: !UA.ios
      });
      const touchend$ = fromEvent<TouchEvent>(window, 'touchend');

      let horizontal = false;

      if (UA.ios) {
        touchmove$
          .pipe(takeUntil(this.destroy$))
          .subscribe(e => horizontal && e.preventDefault());
      }

      touchstart$
        .pipe(
          tap(console.log),
          switchMap(e =>
            touchmove$.pipe(
              take(1),
              tap(console.log),
              switchMap(ev => {
                const deltaX = Math.abs(
                  ev.touches[0].clientX - e.touches[0].clientX
                );
                const deltaY = Math.abs(
                  ev.touches[0].clientY - e.touches[0].clientY
                );

                horizontal = deltaX >= deltaY;

                return horizontal ? touchmove$ : NEVER;
              }),
              map(ev => e.touches[0].clientX - ev.touches[0].clientX),
              takeUntil(touchend$)
            )
          ),
          observeOn(animationFrameScheduler),
          takeUntil(this.destroy$)
        )
        .subscribe(delta => {
          this.shiftImages(this.selectedItem * this.itemWidth + delta);
          horizontal = false;
        });

      touchstart$
        .pipe(
          tap(e => {
            this.drag = true;
            this.cd.detectChanges();
          }),
          switchMapTo(touchmove$.pipe(take(1))),
          switchMapTo(touchend$),
          tap(_ => {
            this.drag = false;
            this.cd.detectChanges();
          }),
          observeOn(animationFrameScheduler),
          takeUntil(this.destroy$)
        )
        .subscribe(e => this.select(Math.round(this.listX / this.itemWidth)));
    }
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
      this.center();
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

  onItemLoaded(item: GalleryItemInternal) {
    // delayed to prevent fallback frames of not yet rendered images being shown
    requestAnimationFrame(() => {
      item._loaded = true;
      item._loading = false;
      this.cd.detectChanges();
    });
  }

  private center(scrollBehavior = this.scrollBehavior) {
    const shift = this.selectedItem * this.itemWidth;

    this.shiftImages(shift, scrollBehavior);
  }

  private onResize = () => {
    requestAnimationFrame(() => {
      if (!this.items || !this.items.length) {
        this.shiftImages(0, 'auto');
      } else {
        this.itemWidth = this.hostRef.nativeElement.offsetWidth;
        this.center('auto');
      }

      requestAnimationFrame(() => {
        this.imagesHidden = false;
        this.cd.detectChanges();
      });
    });
  };

  private shiftImages(x: number, scrollBehavior = this.scrollBehavior) {
    const imageListEl = this.imageListRef.nativeElement;

    imageListEl.style.transform = `translate3d(-${(this.listX = x)}px, 0, 0)`;
  }
}
