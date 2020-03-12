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
  ViewChild,
  QueryList,
  ViewChildren,
  NgZone
} from '@angular/core';
import { fromEvent, Subject, merge, NEVER } from 'rxjs';
import {
  map,
  switchMap,
  takeUntil,
  tap,
  last,
  filter,
  catchError
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
  itemTemplate: TemplateRef<any>;

  @Input()
  loop: boolean;

  @Input()
  galleryMainAxis: Orientation;

  @Output()
  imageClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<number>();

  @ViewChild('itemList', { static: true }) itemListRef: ElementRef<HTMLElement>;

  @ViewChildren('items') itemsRef: QueryList<ElementRef<HTMLElement>>;

  imagesHidden = true;
  noAnimation = false;

  private destroy$ = new Subject();
  private lazyLoadObserver: IntersectionObserver;

  private itemWidth: number;
  private listX = 0;

  get lazyLoading() {
    return this.loading === 'lazy';
  }

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
    private cd: ChangeDetectorRef,
    private zone: NgZone
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
    if (items && items.currentValue) {
      this.onResize();

      if (this.lazyLoading) {
        setTimeout(() => {
          this.loadLazily(this.selectedItem);
          this.cd.detectChanges();
        });
      }
    }
  }

  ngOnInit() {
    this.imageCounter === undefined && (this.imageCounter = true);
    this.imageCounterOrientation == null &&
      (this.imageCounterOrientation = 'top');
    this.imageFit == null && (this.imageFit = 'contain');

    if (clientSide) {
      const opts = {
        passive: !UA.ios
      };

      fromEvent(window, 'resize', opts)
        .pipe(takeUntil(this.destroy$))
        .subscribe(this.onResize);

      this.zone.runOutsideAngular(() => {
        const imageList = this.itemListRef.nativeElement;

        const mousedown$ = fromEvent<MouseEvent>(imageList, 'mousedown', opts);
        const touchstart$ = fromEvent(imageList, 'touchstart', opts).pipe(
          filter<TouchEvent>(e => e.touches.length === 1),
          map(e => e.touches[0])
        );
        const startEvents$ = merge(mousedown$, touchstart$);

        const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove', opts);
        const touchmove$ = fromEvent(document, 'touchmove', opts).pipe(
          filter<TouchEvent>(e => e.touches.length === 1),
          map(e => e.touches[0])
        );
        const moveEvents$ = merge(mousemove$, touchmove$);

        const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup', opts);
        const touchend$ = fromEvent<TouchEvent>(document, 'touchend', opts);
        const endEvents$ = merge(mouseup$, touchend$);

        let horizontal = false;

        if (UA.ios) {
          // prevent vertical scroll from happening when swiping horizontally
          fromEvent(document, 'touchmove', opts)
            .pipe(takeUntil(this.destroy$))
            .subscribe(e => {
              if (horizontal) {
                e.preventDefault();
                e.stopPropagation();
              }
            });
        }

        startEvents$
          .pipe(
            switchMap(sE => {
              return moveEvents$.pipe(
                map(mE => {
                  let directionEventAppeared = false;
                  if (!directionEventAppeared) {
                    const deltaX = Math.abs(mE.clientX - sE.clientX);
                    const deltaY = Math.abs(mE.clientY - sE.clientY);

                    if (deltaX || deltaY) {
                      horizontal = deltaX * 2 > deltaY;
                      directionEventAppeared = true;
                    }
                  }
                  return horizontal ? sE.clientX - mE.clientX : null;
                }),
                filter(e => e != null),
                takeUntil(endEvents$)
              );
            }),
            takeUntil(this.destroy$)
          )
          .subscribe(delta => {
            this.shiftImages(this.selectedItem * this.itemWidth + delta);
          });

        startEvents$
          .pipe(
            tap(_ => {
              this.noAnimation = true;
              this.cd.detectChanges();
            }),
            switchMap(sE => {
              const sTime = Date.now();
              return moveEvents$.pipe(
                takeUntil(endEvents$),
                last(),
                // if there are no move events = click happened, do nothing
                catchError(_ => NEVER),
                map(eE => ({
                  time: Date.now() - sTime,
                  distance: sE.clientX - eE.clientX
                }))
              );
            }),
            takeUntil(this.destroy$)
          )
          .subscribe(({ time, distance }) => {
            this.noAnimation = false;

            if (Math.abs(time / distance) < 4 && Math.abs(distance) > 20) {
              this.select(this.selectedItem + Math.sign(distance));
            } else {
              this.select(Math.round(this.listX / this.itemWidth));
            }
            this.cd.detectChanges();
          });
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

    if (this.lazyLoading) {
      this.loadLazily(index);
    }

    this.selectedItem = index;
    this.selection.emit(index);
    this.center();
  }

  onItemLoaded(item: GalleryItemInternal) {
    item._loaded = true;
    item._loading = false;
  }

  private center() {
    const shift = this.selectedItem * this.itemWidth;

    this.shiftImages(shift);
  }

  private loadLazily(index: number) {
    if (this.itemsRef && !this.itemTemplate) {
      const itemEl = this.itemsRef.toArray()[index].nativeElement;
      const img = itemEl.querySelector('img');

      if (!img.getAttribute('src')) {
        img.src = img.dataset.src;
        img.dataset.src = '';
        this.items[index]._loading = true;
      }
    }
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
    const imageListEl = this.itemListRef.nativeElement;
    imageListEl.style.transform = `translate3d(${-(this.listX = x)}px, 0, 0)`;
  }
}
