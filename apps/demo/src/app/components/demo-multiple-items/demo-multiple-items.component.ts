import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { GalleryComponent, GalleryItem } from '@daelmaak/ngx-gallery';

@Component({
  selector: 'app-demo-multiple-items',
  templateUrl: './demo-multiple-items.component.html',
  styleUrls: ['./demo-multiple-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GalleryComponent],
})
export class DemoMultipleItemsComponent {
  @Input({ required: true }) items!: GalleryItem[];
  @Input({ required: true }) mobile!: boolean;

  showGallery = true;

  constructor(private cd: ChangeDetectorRef) {}

  reloadGallery() {
    this.showGallery = false;
    this.cd.detectChanges();
    this.showGallery = true;
    this.cd.detectChanges();
  }
}
