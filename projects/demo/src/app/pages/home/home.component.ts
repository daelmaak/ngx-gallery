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
    imageCounterOrientation: 'bottom',
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
            media: '(max-width: 1024px)',
            srcset: './assets/forest-1-md.jpg, ./assets/forest-1-lg.jpg 4x'
          }
        ]
      ),
      new GalleryImage(
        './assets/sky-1-lg.jpg',
        './assets/sky-1-sm.jpg',
        'Sky',
        'Mysterious sky',
        [
          {
            media: '(max-width: 1024px)',
            srcset: './assets/sky-1-md.jpg, ./assets/sky-1-lg.jpg 4x'
          }
        ]
      ),
      new GalleryImage(
        './assets/cheers-1-lg.jpg',
        './assets/cheers-1-sm.jpg',
        'Cheers',
        'Two guys drinking during sunset',
        [
          {
            media: '(max-width: 1024px)',
            srcset: './assets/cheers-1-md.jpg, ./assets/cheers-1-lg.jpg 4x'
          }
        ]
      ),
      new GalleryImage(
        './assets/laptop-1-lg.jpg',
        './assets/laptop-1-sm.jpg',
        'Laptop',
        'Ideal workplace for computer work',
        [
          {
            media: '(max-width: 1024px)',
            srcset: './assets/laptop-1-md.jpg, ./assets/laptop-1-lg.jpg 4x'
          }
        ]
      ),
      new GalleryImage(
        './assets/snowflake-1-lg.jpg',
        './assets/snowflake-1-sm.jpg',
        'Snowflake',
        'Snowflake detail',
        [
          {
            media: '(max-width: 1024px)',
            srcset:
              './assets/snowflake-1-md.jpg, ./assets/snowflake-1-lg.jpg 4x'
          }
        ]
      ),
      new GalleryImage(
        './assets/mesh-1-lg.jpg',
        './assets/mesh-1-sm.jpg',
        'City',
        'City at night',
        [
          {
            media: '(max-width: 1024px)',
            srcset: './assets/mesh-1-md.jpg, ./assets/mesh-1-lg.jpg 4x'
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
