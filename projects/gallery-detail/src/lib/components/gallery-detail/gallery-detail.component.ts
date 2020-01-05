import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { GalleryDetailConfig } from '../../gallery-detail-config';
import { GalleryDetailRef } from '../../gallery-detail-ref';

@Component({
  selector: 'ngx-gallery-detail',
  template: `
    <ngx-close-icon (click)="close()"></ngx-close-icon>
    <ngx-gallery
      [selectedItemIndex]="selectedItemIndex || 0"
      [items]="(galleryDetailRef?.state | async)?.items"
      [thumbsOrientation]="config.thumbsOrientation"
      [thumbsScroll]="config.thumbsScroll"
      [thumbsArrows]="config.thumbsArrows"
      [thumbsArrowSlideTime]="config.thumbsArrowSlideTime"
      [thumbsArrowSlideByLength]="config.thumbsArrowSlideByLength"
    ></ngx-gallery>
  `,
  styleUrls: ['./gallery-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryDetailComponent implements OnInit, OnDestroy {
  @Input()
  selectedItemIndex: number;

  @Input()
  galleryDetailRef: GalleryDetailRef;

  @Input()
  config: GalleryDetailConfig;

  private closeSub: Subscription;

  constructor() {}

  ngOnInit() {
    this.closeSub = merge(
      this.galleryDetailRef.escapes$,
      this.galleryDetailRef.backdropClicks$
    ).subscribe(_ => this.galleryDetailRef.close());
  }

  ngOnDestroy() {
    this.closeSub && this.closeSub.unsubscribe();
  }

  close() {
    this.galleryDetailRef.close();
  }
}
