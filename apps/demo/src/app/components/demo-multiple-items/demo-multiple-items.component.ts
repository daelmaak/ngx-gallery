import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { GalleryItem } from '@daelmaak/ngx-gallery';

@Component({
  selector: 'app-demo-multiple-items',
  templateUrl: './demo-multiple-items.component.html',
  styleUrls: ['./demo-multiple-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoMultipleItemsComponent {
  @Input() items: GalleryItem[];
  @Input() mobile: boolean;

  showGallery = true;

  constructor(private cd: ChangeDetectorRef) {}

  reloadGallery() {
    this.showGallery = false;
    this.cd.detectChanges();
    this.showGallery = true;
    this.cd.detectChanges();
  }
}
