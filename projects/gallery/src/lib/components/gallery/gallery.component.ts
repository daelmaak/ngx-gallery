import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewChild,
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
  VerticalOrientation,
  ThumbTemplateContext,
} from '../../core';
import { defaultAria } from '../../core/aria';
import { ThumbsComponent } from '../thumbs/thumbs.component';
import { ViewerComponent } from '../viewer/viewer.component';

@Component({
  selector: 'doe-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  @Input()
  items: GalleryItem[];

  @Input()
  selectedIndex = 0;

  @Input()
  aria: Aria = defaultAria;

  @Input()
  arrows = true;

  @Input()
  descriptions = false;

  @Input()
  errorText: string;

  @Input()
  mouseGestures = true;

  @Input()
  touchGestures = true;

  @Input()
  imageCounter = true;

  @Input()
  imageCounterOrientation: VerticalOrientation = 'bottom';

  @Input()
  itemWidth: string;

  @Input()
  loading: Loading = 'auto';

  @Input()
  loop = false;

  @Input()
  objectFit: ObjectFit = 'cover';

  @Input()
  itemTemplate: TemplateRef<ItemTemplateContext>;

  @Input()
  loadingTemplate: TemplateRef<void>;

  @Input()
  errorTemplate: TemplateRef<void>;

  @Input()
  arrowTemplate: TemplateRef<void>;

  @Input()
  thumbs = true;

  @Input()
  thumbsAutoScroll = true;

  @Input()
  thumbsOrientation: Orientation = 'bottom';

  @Input()
  thumbsArrows = true;

  @Input()
  thumbsArrowSlideByLength: number;

  @Input()
  thumbsScrollBehavior: ScrollBehavior = 'smooth';

  @Input()
  thumbTemplate: TemplateRef<ThumbTemplateContext>;

  @Input()
  thumbsArrowTemplate: TemplateRef<void>;

  @Input()
  thumbErrorTemplate: TemplateRef<void>;

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

  @ViewChild(ViewerComponent, { static: false })
  viewerRef: ViewerComponent;

  @ViewChild(ThumbsComponent, { static: false })
  thumbsRef: ThumbsComponent;

  @ViewChild(ViewerComponent, { static: false, read: ElementRef })
  viewerElRef: ElementRef<HTMLElement>;

  @HostBinding('tabindex')
  _tabindex = 0;

  @HostBinding('attr.aria-label')
  get ariaLabel() {
    return this.aria && this.aria.galleryLabel;
  }

  @HostBinding('class.doe-gallery--column')
  get _galleryColumn() {
    return (
      this.thumbsOrientation === 'top' || this.thumbsOrientation === 'bottom'
    );
  }

  get _thumbsOrientationFlag(): OrientationFlag {
    if (
      this.thumbsOrientation === 'top' ||
      this.thumbsOrientation === 'bottom'
    ) {
      return OrientationFlag.HORIZONTAL;
    }
    return OrientationFlag.VERTICAL;
  }

  focus() {
    this.viewerElRef.nativeElement.focus();
  }

  @HostListener('keydown.arrowright')
  next() {
    this.viewerRef.selectByDelta(1);
  }

  @HostListener('keydown.arrowleft')
  prev() {
    this.viewerRef.selectByDelta(-1);
  }

  select(index: number) {
    this.viewerRef.select(index);
    this.thumbsRef.select(index);
    this._selectInternal(index);
  }

  slideThumbs(direction: number) {
    this.thumbsRef.slide(direction);
  }

  _onThumbClick(event: GalleryItemEvent) {
    this.viewerRef.select(event.index);
    this.thumbClick.emit(event);
    this._selectInternal(event.index);
  }

  _selectInternal(index: number) {
    this.selectedIndex = index;
    this.selection.emit(this.items[index]);
  }
}
