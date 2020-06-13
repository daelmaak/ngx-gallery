import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryItem, Orientation } from 'projects/gallery/src/lib/core';

@Component({
  selector: 'app-demo-thumbs-orientation',
  templateUrl: './demo-thumbs-orientation.component.html',
  styleUrls: ['./demo-thumbs-orientation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoThumbsOrientationComponent {
  @Input() items: GalleryItem[];

  orientation: Orientation = 'left';
}
