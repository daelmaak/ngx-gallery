import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { GalleryItem } from '../../core/gallery-item';
import { ImageFit } from '../../core/image-fit';

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
  selectedItem: number;

  @Input()
  arrows: boolean;

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

  @ViewChild('imageList', { static: true }) imageListEl: ElementRef<
    HTMLElement
  >;

  imageStyles = {
    backgroundSize: 'contain'
  };
  imagesShown = false;
  imagesTransition = false;

  private destroy$ = new Subject();
  private itemWidth: number;

  get showPrevArrow() {
    return this.arrows && (this.selectedItem > 0 || this.loop);
  }

  get showNextArrow() {
    return (
      this.arrows && (this.selectedItem < this.items.length - 1 || this.loop)
    );
  }

  constructor(
    private zone: NgZone,
    private elRef: ElementRef<HTMLElement>,
    private cd: ChangeDetectorRef
  ) {}

  ngOnChanges({ selectedItem }: SimpleChanges) {
    if (selectedItem && !selectedItem.firstChange) {
      this.center();
    }
  }

  ngOnInit() {
    this.imageCounter === undefined && (this.imageCounter = true);

    // TODO mitigate lack of smooth scroll-behavior in Safari

    // determining selected items upon native scroll in the image list
    fromEvent(this.imageListEl.nativeElement, 'scroll')
      .pipe(debounceTime(20), takeUntil(this.destroy$))
      .subscribe(_ => {
        this.selectedItem = Math.floor(
          this.imageListEl.nativeElement.scrollLeft / this.itemWidth
        );
        if (this.selectedItem < 0) {
          this.selectedItem = 0;
        }
        this.cd.detectChanges();
      });

    if (typeof window !== 'undefined') {
      fromEvent(window, 'resize')
        .pipe(takeUntil(this.destroy$))
        .subscribe(this.onResize);
    }
    requestAnimationFrame(() => {
      this.onResize();
      // Show images only after the image list is centered
      this.imagesShown = true;
      // NOTE: detect new translate3D of the image list and the unveiling of the images...
      this.cd.detectChanges();

      // ...but disregard the image transition being switched on for now, so that it doesn't trigger
      // immediately after component creation. This change will be picked up later.
      this.imagesTransition = true;
    });
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

  private onResize = () => {
    this.itemWidth = this.elRef.nativeElement.offsetWidth;
    this.center();
  };

  private select(index: number) {
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
    this.shiftImages(this.selectedItem * this.itemWidth);
  }

  private shiftImages(x: number) {
    this.elRef.nativeElement.querySelector('ul').scrollLeft = x;
  }
}
