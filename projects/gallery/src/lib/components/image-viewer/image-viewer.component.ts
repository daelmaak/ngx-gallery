import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { animationFrameScheduler, fromEvent, Subject, merge } from 'rxjs';
import {
  map,
  observeOn,
  startWith,
  switchMap,
  takeUntil,
  tap,
  last,
  filter,
  repeat
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

  @Output()
  imageClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<number>();

  @ViewChild('imageList', { static: true }) imageListRef: ElementRef<
    HTMLElement
  >;

  imagesHidden = true;
  noAnimation = false;

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

    if (clientSide) {
      fromEvent(window, 'resize')
        .pipe(startWith(null), takeUntil(this.destroy$))
        .subscribe(this.onResize);

      const imageListEl = this.imageListRef.nativeElement;
      const touchstart$ = fromEvent<TouchEvent>(imageListEl, 'touchstart');
      const touchmove$ = fromEvent<TouchEvent>(document, 'touchmove', {
        passive: !UA.ios
      });
      const touchend$ = fromEvent<TouchEvent>(document, 'touchend');

      let horizontal = false;
      let startTouch: Touch;
      merge(touchstart$, touchmove$)
        .pipe(
          map((e, i) => {
            if (e.touches.length > 1) {
              return null;
            }

            if (e.type === 'touchstart') {
              startTouch = e.touches[0];
              return null;
            }
            const moveTouch = e.touches[0];
            const deltaX = Math.abs(moveTouch.clientX - startTouch.clientX);

            if (i === 1) {
              const deltaY = Math.abs(moveTouch.clientY - startTouch.clientY);
              horizontal = deltaX * 2 > deltaY;
            }

            if (horizontal) {
              if (UA.ios) {
                e.preventDefault();
                e.stopPropagation();
              }
              return startTouch.clientX - moveTouch.clientX;
            }
            return null;
          }),
          filter(e => e != null),
          takeUntil(touchend$),
          repeat(),
          observeOn(animationFrameScheduler),
          takeUntil(this.destroy$)
        )
        .subscribe(delta => {
          this.shiftImages(this.selectedItem * this.itemWidth + delta);
        });

      touchstart$
        .pipe(
          tap(_ => {
            this.noAnimation = true;
            this.cd.detectChanges();
          }),
          switchMap(sE => {
            const sTime = Date.now();
            return touchmove$.pipe(
              takeUntil(touchend$),
              last(),
              map(eE => ({
                time: Date.now() - sTime,
                distance: sE.touches[0].clientX - eE.touches[0].clientX
              }))
            );
          }),
          tap(_ => {
            this.noAnimation = false;
            this.cd.detectChanges();
          }),
          observeOn(animationFrameScheduler),
          takeUntil(this.destroy$)
        )
        .subscribe(({ time, distance }) => {
          if (Math.abs(time / distance) < 2.5 && Math.abs(distance) > 20) {
            this.select(this.selectedItem + Math.sign(distance));
          } else {
            this.select(Math.round(this.listX / this.itemWidth));
          }
        });
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

  select(index: number) {
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
    this.center();
  }

  onItemLoaded(item: GalleryItemInternal) {
    // delayed to prevent fallback frames of not yet rendered images being shown
    requestAnimationFrame(() => {
      item._loaded = true;
      item._loading = false;
      this.cd.detectChanges();
    });
  }

  private center() {
    const shift = this.selectedItem * this.itemWidth;

    this.shiftImages(shift);
  }

  private onResize = () => {
    requestAnimationFrame(() => {
      if (!this.items || !this.items.length) {
        this.shiftImages(0);
      } else {
        this.itemWidth = this.hostRef.nativeElement.offsetWidth;
        this.center();
      }

      requestAnimationFrame(() => {
        this.imagesHidden = false;
        this.cd.detectChanges();
      });
    });
  };

  private shiftImages(x: number) {
    const imageListEl = this.imageListRef.nativeElement;

    imageListEl.style.transform = `translate3d(-${(this.listX = x)}px, 0, 0)`;
  }
}
