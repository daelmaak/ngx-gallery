import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';

import {
  Aria,
  GalleryItem,
  GalleryItemEvent,
  ItemTemplateContext,
  Loading,
  ObjectFit,
  Orientation,
  OrientationFlag,
  VerticalOrientation
} from '../../core';
import { defaultAria } from '../../core/aria';
import {
  GalleryItemEventInternal,
  GalleryItemInternal
} from '../../core/gallery-item';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { ThumbnailsComponent } from '../thumbnails/thumbnails.component';

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
  aria: Aria;

  @Input()
  arrows: boolean;

  @Input()
  descriptions: boolean;

  @Input()
  errorText: string;

  @Input()
  mouseGestures: boolean;

  @Input()
  touchGestures: boolean;

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
  thumbTemplate: TemplateRef<any>;

  @Input()
  thumbErrorTemplate: TemplateRef<any>;

  @Input()
  prevThumbsArrowTemplate: TemplateRef<void>;

  @Input()
  nextThumbsArrowTemplate: TemplateRef<void>;

  @Output()
  imageClick = new EventEmitter<GalleryItemEvent>();

  @Output()
  thumbClick = new EventEmitter<GalleryItemEvent>();

  @Output()
  thumbHover = new EventEmitter<GalleryItemEvent>();

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

  @HostBinding('tabindex')
  _tabindex = 0;

  @HostBinding('class.column')
  get galleryCollumn() {
    return (
      this.thumbsOrientation === 'top' || this.thumbsOrientation === 'bottom'
    );
  }

  @HostBinding('attr.aria-label')
  get ariaLabel() {
    return this.aria && this.aria.galleryLabel;
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
    this.aria == null && (this.aria = defaultAria);
    this.arrows === undefined && (this.arrows = true);
    this.descriptions == null && (this.descriptions = true);
    this.mouseGestures == null && (this.mouseGestures = true);
    this.touchGestures == null && (this.touchGestures = true);
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

  onThumbClick(event: GalleryItemEvent) {
    this.imageViewer.select(event.index);
    this._emitEvent(event, this.thumbClick);
    this._selectInternal(event.index);
  }

  select(index: number) {
    this.imageViewer.select(index);
    this.thumbnails.select(index);
    this._selectInternal(index);
  }

  slideThumbs(direction: number) {
    this.thumbnails.slide(direction);
  }

  _emitEvent(
    event: GalleryItemEventInternal,
    emitter: EventEmitter<GalleryItemEvent>
  ) {
    const publicEvent = event as GalleryItemEvent;

    publicEvent.item = this.items[event.index];
    emitter.emit(publicEvent);
  }

  _selectInternal(index: number) {
    this.selectedIndex = index;
    this.selection.emit(this.items[index]);
  }
}
