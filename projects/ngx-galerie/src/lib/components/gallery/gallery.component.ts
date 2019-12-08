import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Orientation } from '../../core/orientation';

@Component({
  selector: 'ngx-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnChanges, OnInit, OnDestroy {
  @Input()
  items: string[];

  @Input()
  thumbsOrientation: Orientation = 'left';

  @Input()
  thumbScroll = true;

  @ViewChild('imageViewer', { static: true })
  imageViewer: ElementRef;

  @ViewChild('thumbnailList', { static: false })
  thumbnailList: ElementRef;

  @HostBinding('class.column')
  get galleryCollumn() {
    return (
      this.thumbsOrientation == 'top' || this.thumbsOrientation == 'bottom'
    );
  }

  // TODO rework selection mechanism
  selectedItemIndex: number;

  constructor() {}

  ngOnChanges({ items }: SimpleChanges) {
    if (items.previousValue !== items.currentValue) {
      this.selectedItemIndex = 0;
    }
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
