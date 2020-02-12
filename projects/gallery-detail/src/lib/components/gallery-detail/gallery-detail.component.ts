import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef
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
      tabindex="0"
      [selectedItem]="selectedItem || 0"
      [items]="(galleryDetailRef?.state | async)?.items"
      [arrows]="config.arrows"
      [imageCounter]="config.imageCounter"
      [imageFit]="config.imageFit"
      [imageTemplate]="config.imageTemplate"
      [loop]="config.loop"
      [thumbs]="config.thumbs"
      [thumbTemplate]="config.thumbTemplate"
      [thumbsAutoScroll]="config.thumbsAutoScroll"
      [thumbsOrientation]="config.thumbsOrientation"
      [thumbsArrows]="config.thumbsArrows"
      [thumbsArrowSlideTime]="config.thumbsArrowSlideTime"
      [thumbsArrowSlideByLength]="config.thumbsArrowSlideByLength"
      [thumbsOverscrollBehavior]="config.thumbsOverscrollBehavior"
    ></ngx-gallery>
  `,
  styleUrls: ['./gallery-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryDetailComponent implements OnInit {
  @Input()
  selectedItem: number;

  @Input()
  galleryDetailRef: GalleryDetailRef;

  @Input()
  config: GalleryDetailConfig;

  @ViewChild(GalleryComponent, { static: true, read: ElementRef })
  galleryEl: ElementRef<HTMLElement>;

  ngOnInit() {
    const escapes$ = this.galleryDetailRef.keydowns$.pipe(
      filter<KeyboardEvent>(e => e.key === 'Escape' || e.key === 'Esc')
    );
    merge(this.galleryDetailRef.backdropClicks$, escapes$).subscribe(_ =>
      this.galleryDetailRef.close()
    );

    // focus so that the gallery detail can be navigated by keyboard
    this.galleryEl.nativeElement.focus();
  }

  close() {
    this.galleryDetailRef.close();
  }
}
