import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Orientation } from '../../core/orientation';
import { GalleryItem } from '../../core/gallery-item';

@Component({
  selector: 'ngx-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit, OnDestroy {
  @Input()
  items: GalleryItem[];

  // TODO rework selection mechanism
  @Input()
  selectedItemIndex = 0;

  @Input()
  arrows: boolean;

  @Input()
  thumbsOrientation: Orientation;

  @Input()
  thumbsScroll: boolean;

  @Input()
  thumbsArrows: boolean;

  @Input()
  thumbsArrowSlideTime: number;

  @Input()
  thumbsArrowSlideByLength: number;

  @Output()
  imageClick = new EventEmitter<Event>();

  @Output()
  thumbClick = new EventEmitter<Event>();

  @ViewChild('imageViewer', { static: true })
  imageViewer: ElementRef;

  @ViewChild('thumbnailList', { static: false })
  thumbnailList: ElementRef;

  @HostBinding('class.column')
  get galleryCollumn() {
    return (
      this.thumbsOrientation === 'top' || this.thumbsOrientation === 'bottom'
    );
  }

  constructor() {}

  ngOnInit() {
    this.thumbsScroll === undefined && (this.thumbsScroll = true);
    this.thumbsArrows === undefined && (this.thumbsArrows = true);
    this.thumbsOrientation === undefined && (this.thumbsOrientation = 'left');
  }

  ngOnDestroy() {}
}
