import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  TemplateRef,
  HostListener,
  ElementRef
} from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import {
  GalleryItem,
  Loading,
  ImageFit,
  Orientation,
  OverscrollBehavior,
  OrientationFlag
} from '../../core';

@Component({
  selector: 'ngx-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit, OnDestroy {
  @Input()
  items: GalleryItem[];

  @Input()
  selectedItem = 0;

  @Input()
  arrows: boolean;

  @Input()
  imageLoading: Loading;

  @Input()
  imageCounter: boolean;

  @Input()
  imageFit: ImageFit;

  @Input()
  imageTemplate: TemplateRef<any>;

  @Input()
  loop: boolean;

  @Input()
  scrollBehavior: ScrollBehavior;

  @Input()
  thumbs: boolean;

  @Input()
  thumbsAutoScroll: boolean;

  @Input()
  thumbsOrientation: Orientation;

  @Input()
  thumbsArrows: boolean;

  @Input()
  thumbsArrowSlideByLength: number;

  @Input()
  thumbsScrollBehavior: ScrollBehavior;

  @Input()
  thumbsOverscrollBehavior: OverscrollBehavior;

  @Input()
  thumbsImageFit: ImageFit;

  @Input()
  thumbTemplate: TemplateRef<any>;

  @Output()
  imageClick = new EventEmitter<Event>();

  @Output()
  thumbClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<GalleryItem>();

  @ViewChild(ImageViewerComponent, { static: false })
  imageViewer: ImageViewerComponent;

  @ViewChild(ImageViewerComponent, { static: false, read: ElementRef })
  imageViewerEl: ElementRef<HTMLElement>;

  @HostBinding('class.column')
  get galleryCollumn() {
    return (
      this.thumbsOrientation === 'top' || this.thumbsOrientation === 'bottom'
    );
  }

  get galleryMainAxis(): OrientationFlag {
    if (
      this.thumbsOrientation === 'top' ||
      this.thumbsOrientation === 'bottom'
    ) {
      return OrientationFlag.HORIZONTAL;
    }
    return OrientationFlag.VERTICAL;
  }

  constructor() {}

  ngOnInit() {
    this.thumbsArrows === undefined && (this.thumbsArrows = true);
    this.thumbsOrientation === undefined && (this.thumbsOrientation = 'left');
    this.arrows === undefined && (this.arrows = true);
    this.loop === undefined && (this.loop = true);
    this.thumbs === undefined && (this.thumbs = true);
    this.imageLoading == null && (this.imageLoading = 'auto');
  }

  ngOnDestroy() {}

  focus() {
    this.imageViewerEl.nativeElement.focus();
  }

  @HostListener('keydown.arrowright')
  next() {
    this.imageViewer.next();
  }

  @HostListener('keydown.arrowleft')
  prev() {
    this.imageViewer.prev();
  }

  select(index: number) {
    this.imageViewer.select(index);
    this.selectedItem = index;
    this.selection.emit(this.items[index]);
  }
}
