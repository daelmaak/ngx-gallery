import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GalleryItem, Orientation } from 'ngx-doe-gallery';

@Component({
  selector: 'app-demo-thumbs-orientation',
  templateUrl: './demo-thumbs-orientation.component.html',
  styleUrls: ['./demo-thumbs-orientation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoThumbsOrientationComponent implements OnChanges {
  @Input() items: GalleryItem[];
  @Input() mobile: boolean;

  orientation: Orientation;

  ngOnChanges({ mobile }: SimpleChanges) {
    if (mobile && mobile.firstChange) {
      this.orientation = this.mobile ? 'bottom' : 'left';
    }
  }
}
