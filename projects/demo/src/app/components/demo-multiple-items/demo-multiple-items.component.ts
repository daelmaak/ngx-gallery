import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GalleryItem } from 'projects/gallery/src/lib/core';

@Component({
  selector: 'app-demo-multiple-items',
  templateUrl: './demo-multiple-items.component.html',
  styleUrls: ['./demo-multiple-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoMultipleItemsComponent implements OnChanges {
  @Input() items: GalleryItem[];
  @Input() mobile: boolean;

  itemWidth: string;
  showGallery = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges({ mobile }: SimpleChanges) {
    if (mobile && mobile.firstChange) {
      this.itemWidth = this.mobile ? 'calc(100% / 1.5)' : 'calc(100% / 2.5)';
    }
  }

  reloadGallery() {
    this.showGallery = false;
    this.cd.detectChanges();
    this.showGallery = true;
    this.cd.detectChanges();
  }
}
