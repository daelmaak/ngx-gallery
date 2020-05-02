import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

import {
  GalleryComponent,
  GalleryItem,
  GalleryItemEvent,
  GalleryImage
} from 'projects/gallery/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  images: Observable<GalleryItem[]>;

  displayGallery = true;
  imageLoadingLatency = 0;

  mobile = matchMedia('(max-width: 767px)').matches;

  galleryConfig = {
    arrows: !this.mobile,
    descriptions: false,
    mouseGestures: true,
    touchGestures: true,
    imageCounter: true,
    imageCounterOrientation: 'top',
    objectFit: 'cover',
    loading: 'lazy',
    loop: true,
    thumbs: true,
    thumbsAutoScroll: true,
    thumbsOrientation: 'bottom',
    thumbsArrows: true,
    thumbsArrowSlideByLength: 0,
    thumbsScrollBehavior: 'smooth'
  };

  @ViewChild(GalleryComponent, { static: false }) gallery: GalleryComponent;

  constructor(private cd: ChangeDetectorRef) {
    this.galleryConfig = this.getGalleryConfig() || this.galleryConfig;
  }

  ngOnInit() {
    this.images = of([
      new GalleryImage(
        './assets/forest-1-lg.jpg',
        './assets/forest-1-sm.jpg',
        'Forest',
        'Mysterious forest',
        [
          {
            media: '(max-width: 960px)',
            srcset: './assets/forest-1-md.jpg, ./assets/forest-1-lg.jpg 4x'
          }
        ]
      )
    ]).pipe(
      switchMap(items =>
        defer(() => of(items).pipe(delay(this.imageLoadingLatency)))
      )
    );

    window.addEventListener('pagehide', this.storeGalleryConfig);
  }

  async onImageClick(event: GalleryItemEvent) {}

  onImageLoad() {}

  reloadGallery() {
    this.displayGallery = false;
    this.cd.detectChanges();
    this.displayGallery = true;
    this.cd.detectChanges();
  }

  private getGalleryConfig() {
    return JSON.parse(sessionStorage.getItem('galleryConfig'));
  }

  private storeGalleryConfig = () => {
    sessionStorage.setItem('galleryConfig', JSON.stringify(this.galleryConfig));
  };
}
