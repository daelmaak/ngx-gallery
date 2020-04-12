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
  ElementRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { ThumbnailsComponent } from '../thumbnails/thumbnails.component';
import {
  GalleryItem,
  Loading,
  ObjectFit,
  Orientation,
  OrientationFlag,
  VerticalOrientation,
  ItemTemplateContext
} from '../../core';
import { GalleryItemInternal } from '../../core/gallery-item';
import { ImageClickEvent } from '../image-viewer/image-viewer.model';

@Component({
  selector: 'ngx-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnChanges, OnInit, OnDestroy {
  @Input()
  items: GalleryItem[];

  @Input()
  selectedIndex: number;

  @Input()
  arrows: boolean;

  @Input()
  descriptions: boolean;

  @Input()
  errorText: string;

  @Input()
  imageCounter: boolean;

  @Input()
  imageCounterOrientation: VerticalOrientation;

  @Input()
  loading: Loading;

  @Input()
  loop: boolean;

  @Input()
  objectFit: ObjectFit;

  @Input()
  itemTemplate: TemplateRef<ItemTemplateContext>;

  @Input()
  loadingTemplate: TemplateRef<void>;

  @Input()
  errorTemplate: TemplateRef<void>;

  @Input()
  prevArrowTemplate: TemplateRef<void>;

  @Input()
  nextArrowTemplate: TemplateRef<void>;

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
  thumbsObjectFit: ObjectFit;

  @Input()
  thumbTemplate: TemplateRef<any>;

  @Input()
  thumbErrorTemplate: TemplateRef<any>;

  @Input()
  prevThumbsArrowTemplate: TemplateRef<void>;

  @Input()
  nextThumbsArrowTemplate: TemplateRef<void>;

  @Output()
  imageClick = new EventEmitter<ImageClickEvent>();

  @Output()
  thumbClick = new EventEmitter<Event>();

  @Output()
  descriptionClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<GalleryItem>();

  @ViewChild(ImageViewerComponent, { static: false })
  imageViewer: ImageViewerComponent;

  @ViewChild(ThumbnailsComponent, { static: false })
  thumbnails: ThumbnailsComponent;

  @ViewChild(ImageViewerComponent, { static: false, read: ElementRef })
  imageViewerEl: ElementRef<HTMLElement>;

  _internalItems: GalleryItemInternal[];

  @HostBinding('class.column')
  get galleryCollumn() {
    return (
      this.thumbsOrientation === 'top' || this.thumbsOrientation === 'bottom'
    );
  }

  get thumbsOrientationFlag(): OrientationFlag {
    if (
      this.thumbsOrientation === 'top' ||
      this.thumbsOrientation === 'bottom'
    ) {
      return OrientationFlag.HORIZONTAL;
    }
    return OrientationFlag.VERTICAL;
  }

  constructor() {}

  ngOnChanges({ items }: SimpleChanges) {
    if (items) {
      const incomingItems = (items.currentValue || []) as GalleryItem[];
      this._internalItems = incomingItems.map(item => ({ ...item }));
    }
  }

  ngOnInit() {
    this.arrows === undefined && (this.arrows = true);
    this.descriptions == null && (this.descriptions = true);
    this.loop === undefined && (this.loop = true);
    this.loading == null && (this.loading = 'auto');
    this.selectedIndex == null && (this.selectedIndex = 0);
    this.thumbs === undefined && (this.thumbs = true);
    this.thumbsArrows === undefined && (this.thumbsArrows = true);
    this.thumbsOrientation === undefined && (this.thumbsOrientation = 'left');
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

  onImageClick(event: ImageClickEvent) {
    // give back original item, not the internal
    event.item = this.items[event.index];
    this.imageClick.emit(event);
  }

  select(index: number) {
    this.imageViewer.select(index);
    this.thumbnails.select(index);
    this._selectInternal(index);
  }

  slideThumbs(direction: -1 | 1) {
    this.thumbnails.slide(direction);
  }

  _selectInternal(index: number) {
    this.selectedIndex = index;
    this.selection.emit(this.items[index]);
  }
}
