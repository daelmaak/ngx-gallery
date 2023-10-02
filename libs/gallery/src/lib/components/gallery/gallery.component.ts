import { CommonModule } from '@angular/common';
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
  ContentTemplateContext,
  GalleryItem,
  GalleryItemEvent,
  ItemTemplateContext,
  Loading,
  ObjectFit,
  Orientation,
  OrientationFlag,
  ThumbTemplateContext,
  VerticalOrientation,
} from '../../core';
import { defaultAria } from '../../core/aria';
import { ThumbsComponent } from '../thumbs/thumbs.component';
import { ViewerComponent } from '../viewer/viewer.component';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ThumbsComponent, ViewerComponent],
})
export class GalleryComponent {
  /**
   * Gallery items to display
   */
  @Input() items: GalleryItem[];
  /**
   * Initially selected item, 0-based
   */
  @Input() selectedIndex = 0;
  /**
   * Aria labels
   */
  @Input() aria: Aria = defaultAria;
  /**
   * Show left and right icons to navigate between images in the viewer
   */
  @Input() arrows = true;
  /**
   * Displayes item descriptions if any are present in `GalleryItem`
   */
  @Input() descriptions = false;
  /**
   * Text to be shown when media loading failed
   */
  @Input() errorText: string;
  /**
   * Display an error when the media contained in gallery item failed to load.
   */
  @Input() showErrors = false;
  /**
   * Allow mouse swipes
   */
  @Input() mouseGestures = true;
  /**
   * Allow touch swipes
   */
  @Input() touchGestures = true;
  /**
   * Controls whether items outside gallery's scrollport should overflow it. When clip == false,
   * items overflowing the gallery will be visible on both sides. Otherwise they will be hidden
   * with `overflow: hidden`.
   */
  @Input() clip = true;
  /**
   * Show item counter in the slider area
   */
  @Input() counter = true;
  @Input() counterOrientation: VerticalOrientation = 'bottom';
  /**
   * Either makes images load eagerly or lazily. The lazy loading is managed by the browser itself.
   */
  @Input() loading: Loading = 'lazy';
  /**
   * Turns on infinite looping for swiping and arrows navigation.
   */
  @Input() loop = false;
  /**
   * The way an image or video should fill its container.
   */
  @Input() objectFit: ObjectFit = 'cover';
  /**
   * Right to left mode
   */
  @HostBinding('class.rtl')
  @Input()
  isRtl: boolean;
  /**
   * By how many items the slider shifts when user navigates with arrows.
   */
  @Input() moveByItems?: number;
  /**
   * How many items are visible in the scrollport.
   */
  @Input() visibleItems = 1;
  /**
   * Custom template for gallery items.
   */
  @Input() itemTemplate: TemplateRef<ItemTemplateContext>;
  /**
   * Custom item template for media that failed to load
   */
  @Input() errorTemplate: TemplateRef<any>;
  /**
   * Custom template for navigation arrows for the slider.
   */
  @Input() arrowTemplate: TemplateRef<any>;
  /**
   * Custom template whose content appears in the gallery viewer.
   */
  @Input() contentTemplate: TemplateRef<ContentTemplateContext>;
  /**
   * Show thumbnail list.
   */
  @Input() thumbs = true;
  /**
   * Scroll thumbnails automatically as you navigate in image viewer.
   */
  @Input() thumbsAutoScroll = true;
  /**
   * Where thumbnails will be placed in relation to slider.
   */
  @Input() thumbsOrientation: Orientation = 'bottom';
  /**
   * Show arrows to navigate thumbnails.
   */
  @Input() thumbsArrows = true;
  /**
   * By how far in pixels the thumbnails are scrolled when using arrows.
   */
  @Input() thumbsArrowSlideByLength: number;
  /**
   * Smooth or instant navigation in thumbnails.
   */
  @Input() thumbsScrollBehavior: ScrollBehavior = 'smooth';
  /**
   * Custom template for thumbnail items.
   */
  @Input() thumbTemplate: TemplateRef<ThumbTemplateContext>;
  /**
   * Custom template for navigation arrows in thumbnail list.
   */
  @Input() thumbsArrowTemplate: TemplateRef<never>;
  /**
   * Custom template for thumbnails that failed to load.
   */
  @Input() thumbErrorTemplate: TemplateRef<never>;

  @Output() itemClick = new EventEmitter<GalleryItemEvent>();
  @Output() thumbClick = new EventEmitter<GalleryItemEvent>();
  @Output() thumbHover = new EventEmitter<GalleryItemEvent>();
  @Output() descriptionClick = new EventEmitter<Event>();
  /**
   * Triggers when item or group of items gets selected, ie. they get displayed in scrollport.
   */
  @Output() selection = new EventEmitter<GalleryItem>();

  @ViewChild(ViewerComponent) _viewerRef: ViewerComponent;
  @ViewChild(ThumbsComponent) _thumbsRef: ThumbsComponent;
  @ViewChild(ViewerComponent, { read: ElementRef })
  _viewerElRef: ElementRef<HTMLElement>;
  @HostBinding('class.gallery--column')
  get _galleryColumn() {
    return (
      this.thumbsOrientation === 'top' || this.thumbsOrientation === 'bottom'
    );
  }

  get _thumbsOrientationFlag(): OrientationFlag {
    return this._galleryColumn
      ? OrientationFlag.HORIZONTAL
      : OrientationFlag.VERTICAL;
  }

  focus() {
    this._viewerElRef.nativeElement.focus();
  }

  @HostListener('keydown.arrowright')
  next() {
    this._viewerRef.selectByDelta(1);
  }

  @HostListener('keydown.arrowleft')
  prev() {
    this._viewerRef.selectByDelta(-1);
  }

  select(index: number) {
    this._viewerRef.select(index);
    this._thumbsRef.select(index);
    this._selectInternal(index);
  }

  slideThumbs(direction: number) {
    this._thumbsRef.slide(direction);
  }

  _onThumbClick(event: GalleryItemEvent) {
    this._viewerRef.select(event.index);
    this.thumbClick.emit(event);
    this._selectInternal(event.index);
  }

  _selectInternal(index: number) {
    this.selectedIndex = index;
    this.selection.emit(this.items[index]);
  }
}
