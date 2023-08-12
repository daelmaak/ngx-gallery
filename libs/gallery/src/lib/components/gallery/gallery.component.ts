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
  @Input() items: GalleryItem[];
  @Input() selectedIndex = 0;
  @Input() aria: Aria = defaultAria;
  @Input() arrows = true;
  @Input() descriptions = false;
  @Input() errorText: string;
  @Input() mouseGestures = true;
  @Input() touchGestures = true;
  @Input() counter = true;
  @Input() counterOrientation: VerticalOrientation = 'bottom';
  @Input() visibleItems = 1;
  @Input() loading: Loading = 'lazy';
  @Input() loop = false;
  @Input() objectFit: ObjectFit = 'cover';
  @HostBinding('class.rtl')
  @Input()
  isRtl: boolean;
  @Input() itemTemplate: TemplateRef<ItemTemplateContext>;
  @Input() loadingTemplate: TemplateRef<void>;
  @Input() errorTemplate: TemplateRef<any>;
  @Input() arrowTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<ContentTemplateContext>;
  @Input() thumbs = true;
  @Input() thumbsAutoScroll = true;
  @Input() thumbsOrientation: Orientation = 'bottom';
  @Input() thumbsArrows = true;
  @Input() thumbsArrowSlideByLength: number;
  @Input() thumbsScrollBehavior: ScrollBehavior = 'smooth';
  @Input() thumbTemplate: TemplateRef<ThumbTemplateContext>;
  @Input() thumbsArrowTemplate: TemplateRef<never>;
  @Input() thumbErrorTemplate: TemplateRef<never>;

  @Output() imageClick = new EventEmitter<GalleryItemEvent>();
  @Output() thumbClick = new EventEmitter<GalleryItemEvent>();
  @Output() thumbHover = new EventEmitter<GalleryItemEvent>();
  @Output() descriptionClick = new EventEmitter<Event>();
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
