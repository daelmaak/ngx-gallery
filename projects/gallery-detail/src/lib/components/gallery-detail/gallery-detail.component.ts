import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { GalleryComponent } from 'projects/gallery/src/public-api';
import { merge } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GalleryDetailConfig } from '../../gallery-detail-config';
import { GalleryDetailRef } from '../../gallery-detail-ref';

@Component({
  selector: 'ngx-gallery-detail',
  template: `
    <ngx-close-icon (click)="close()"></ngx-close-icon>
    <ngx-gallery
      [selectedItemIndex]="selectedItemIndex || 0"
      [items]="(galleryDetailRef?.state | async)?.items"
      [arrows]="config.arrows"
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

  @ViewChild(GalleryComponent, { static: false })
  gallery: GalleryComponent;

  constructor() {}

  ngOnInit() {
    const escapes$ = this.galleryDetailRef.keydowns$.pipe(
      filter<KeyboardEvent>(e => e.key === 'Escape' || e.key === 'Esc')
    );
    merge(this.galleryDetailRef.backdropClicks$, escapes$).subscribe(_ =>
      this.galleryDetailRef.close()
    );

    if (this.config.keyboardNavigation !== false) {
      const allowedKeys = ['ArrowRight', 'ArrowLeft', 'Right', 'Left'];
      const arrows$ = this.galleryDetailRef.keydowns$.pipe(
        filter<KeyboardEvent>(e => allowedKeys.includes(e.key))
      );
      arrows$.subscribe(e =>
        e.key === 'ArrowLeft' || e.key === 'Left'
          ? this.gallery.prev()
          : this.gallery.next()
      );
    }
  }

  ngOnDestroy() {}

  close() {
    this.galleryDetailRef.close();
  }
}
