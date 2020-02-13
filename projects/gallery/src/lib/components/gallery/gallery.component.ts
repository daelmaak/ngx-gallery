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
  HostListener
} from '@angular/core';
import { GalleryItem } from '../../core/gallery-item';
import { Orientation } from '../../core/orientation';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { ImageFit } from '../../core/image-fit';
import { OverscrollBehavior } from '../../core/overscroll-behavior';

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

  @HostBinding('class.column')
  get galleryCollumn() {
    return (
      this.thumbsOrientation === 'top' || this.thumbsOrientation === 'bottom'
    );
  }

  constructor() {}

  ngOnInit() {
    this.thumbsArrows === undefined && (this.thumbsArrows = true);
    this.thumbsOrientation === undefined && (this.thumbsOrientation = 'left');
    this.arrows === undefined && (this.arrows = true);
    this.loop === undefined && (this.loop = true);
    this.thumbs === undefined && (this.thumbs = true);
  }

  ngOnDestroy() {}

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
