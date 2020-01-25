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
import { animationFrameScheduler, fromEvent, of, Subject } from 'rxjs';
import {
  debounceTime,
  map,
  observeOn,
  repeat,
  takeUntil,
  takeWhile
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
  set imageFit(fit: ImageFit) {
    this.imageStyles = {
      ...this.imageStyles,
      backgroundSize: fit || this.imageStyles.backgroundSize
    };
  }

  @Input()
  imageTemplate: TemplateRef<any>;

  @Input()
  loop: boolean;

  @Output()
  imageClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<number>();

  @ViewChild('imageList', { static: true }) imageList: ElementRef<HTMLElement>;

  imageStyles = {
    backgroundSize: 'contain'
  };
  imagesShown = false;
  imagesTransition = false;

  private destroy$ = new Subject();
  private itemWidth: number;
  private smoothScrollBehaviorSupported =
    typeof CSS !== 'undefined' && CSS.supports('scroll-behavior: smooth');

  get showPrevArrow() {
    return this.arrows && (this.selectedItem > 0 || this.loop);
  }

  get showNextArrow() {
    return (
      this.arrows && (this.selectedItem < this.items.length - 1 || this.loop)
    );
  }

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.imageCounter === undefined && (this.imageCounter = true);

    // determining selected items upon native scroll in the image list
    fromEvent(this.imageList.nativeElement, 'scroll')
      .pipe(
        debounceTime(50),
        takeUntil(this.destroy$),
        observeOn(animationFrameScheduler)
      )
      .subscribe(_ => {
        const scrollLeft = this.imageList.nativeElement.scrollLeft;

        if (this.loop && scrollLeft < 50) {
          this.selectedItem = this.items.length - 1;
          this.center();
        } else if (
          this.loop &&
          scrollLeft > (this.items.length - 1) * this.itemWidth + 50
        ) {
          this.selectedItem = 0;
          this.center();
        } else {
          this.selectedItem = Math.floor(
            (this.loop ? scrollLeft - 50 : scrollLeft) / this.itemWidth
          );
        }
        this.selection.emit(this.selectedItem);

        this.cd.detectChanges();
      });

    if (typeof window !== 'undefined') {
      fromEvent(window, 'resize')
        .pipe(takeUntil(this.destroy$))
        .subscribe(this.onResize);
    }

    this.onResize();
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
      shift += 50;
    }

    this.shiftImages(shift);
  }

  private onResize = () => {
    // TODO comments on why requestAnimationFrame twice
    // otherwise gallery doesn't work correctly on phone landscape - portrait mode switching
    requestAnimationFrame(() => {
      this.imagesTransition = false;
      this.cd.detectChanges();

      requestAnimationFrame(() => {
        this.itemWidth = this.elRef.nativeElement.offsetWidth;
        this.center();
        this.imagesShown = true;
        this.imagesTransition = true;
        this.cd.detectChanges();
      });
    });
  };

  private shiftImages(x: number) {
    const imageListEl = this.imageList.nativeElement;

    if (!this.smoothScrollBehaviorSupported && this.imagesTransition) {
      this.shiftImagesManually(x);
    } else {
      imageListEl.scrollLeft = x;
    }
  }

  private shiftImagesManually(x: number) {
    const imageListEl = this.imageList.nativeElement;
    const startTime = Date.now();
    const timeout = 800;
    const startScroll = imageListEl.scrollLeft;
    const scrollDelta = Math.abs(startScroll - x);
    const negative = startScroll > x;

    of(0, animationFrameScheduler)
      .pipe(
        repeat(),
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
