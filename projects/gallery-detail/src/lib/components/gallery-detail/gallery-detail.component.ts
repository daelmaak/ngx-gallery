import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { GalleryDetailRef } from '../../gallery-detail-ref';
import { Orientation } from 'projects/gallery/src/lib/core/orientation';

@Component({
  selector: 'ngx-gallery-detail',
  template: `
    <ngx-close-icon (click)="close()"></ngx-close-icon>
    <ngx-gallery
      [items]="(galleryDetailRef?.state | async)?.items"
      [selectedItemIndex]="selectedItemIndex || 0"
      [thumbsOrientation]="thumbsOrientation"
    ></ngx-gallery>
  `,
  styleUrls: ['./gallery-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryDetailComponent implements OnInit, OnDestroy {
  @Input()
  galleryDetailRef: GalleryDetailRef;

  @Input()
  selectedItemIndex: number;

  // TODO probably squash into one config @Input
  @Input()
  thumbsOrientation: Orientation = 'bottom';

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
