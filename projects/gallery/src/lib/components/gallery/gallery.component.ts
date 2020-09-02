import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Output,
  TemplateRef,
  ViewChild,
  ChangeDetectorRef,
  SimpleChanges,
  ViewContainerRef,
  Injector,
  ComponentFactoryResolver,
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
  ContentTemplateContext,
} from '../../core';
import { defaultAria } from '../../core/aria';
import { ViewerComponent } from '../viewer/viewer.component';

@Component({
  selector: 'doe-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnChanges {
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
  @Input() itemWidth: string;
  @Input() loading: Loading = 'auto';
  @Input() loop = false;
  @Input() objectFit: ObjectFit = 'cover';
  @Input() itemTemplate: TemplateRef<ItemTemplateContext>;
  @Input() loadingTemplate: TemplateRef<void>;
  @Input() errorTemplate: TemplateRef<void>;
  @Input() arrowTemplate: TemplateRef<void>;
  @Input() contentTemplate: TemplateRef<ContentTemplateContext>;
  @Input() thumbs = true;
  @Input() thumbsAutoScroll = true;
  @Input() thumbsOrientation: Orientation = 'bottom';
  @Input() thumbsArrows = true;
  @Input() thumbsArrowSlideByLength: number;
  @Input() thumbsScrollBehavior: ScrollBehavior = 'smooth';
  @Input() thumbTemplate: TemplateRef<ThumbTemplateContext>;
  @Input() thumbsArrowTemplate: TemplateRef<void>;
  @Input() thumbErrorTemplate: TemplateRef<void>;

  @Output() imageClick = new EventEmitter<GalleryItemEvent>();
  @Output() thumbClick = new EventEmitter<GalleryItemEvent>();
  @Output() thumbHover = new EventEmitter<GalleryItemEvent>();
  @Output() descriptionClick = new EventEmitter<Event>();
  @Output() selection = new EventEmitter<GalleryItem>();

  @ViewChild(ViewerComponent) _viewerRef: ViewerComponent;
  @ViewChild(ViewerComponent, { read: ElementRef })
  _viewerElRef: ElementRef<HTMLElement>;
  @ViewChild('thumbsContainer', { read: ViewContainerRef })
  _thumbsContainer: ViewContainerRef;

  _thumbs: any;
  _touched = false;
  INIT_INTERACTIONS = ['touchstart', 'mousedown', 'keydown'];

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

  constructor(
    private cd: ChangeDetectorRef,
    private hostRef: ElementRef<HTMLElement>,
    private crf: ComponentFactoryResolver,
    private injector: Injector
  ) {
    this.INIT_INTERACTIONS.forEach(ename =>
      hostRef.nativeElement.addEventListener(ename, this._onInitInteraction, {
        passive: true,
      })
    );
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (this.thumbs && !this._thumbs) {
      const { ThumbsComponent } = await import('../thumbs/thumbs.component');
      const thumbsFactory = this.crf.resolveComponentFactory(ThumbsComponent);
      const { instance } = this._thumbsContainer.createComponent(
        thumbsFactory,
        null,
        this.injector
      );
      this._thumbs = instance;
      this._thumbs.items = this.items;
    }
  }

  private _onInitInteraction = () => {
    const hostEl = this.hostRef.nativeElement;
    this._touched = true;
    this.cd.detectChanges();
    this.INIT_INTERACTIONS.forEach(ename =>
      hostEl.removeEventListener(ename, this._onInitInteraction)
    );
  };

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
    // this._thumbsRef.select(index);
    this._selectInternal(index);
  }

  slideThumbs(direction: number) {
    // this._thumbsRef.slide(direction);
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
