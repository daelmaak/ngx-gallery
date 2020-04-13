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
  ObjectFit,
  Loading,
  Orientation,
  VerticalOrientation,
  ImageClickEvent
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
    imageCounter: true,
    imageCounterOrientation: 'top',
    objectFit: 'cover',
    loading: 'lazy',
    loop: true,
    thumbs: true,
    thumbsAutoScroll: true,
    thumbsOrientation: this.mobile ? 'bottom' : 'left',
    thumbsArrows: true,
    thumbsArrowSlideByLength: 0,
    thumbsScrollBehavior: 'smooth',
    thumbsObjectFit: 'cover'
  };

  @ViewChild(GalleryComponent, { static: false }) gallery: GalleryComponent;

  constructor(private cd: ChangeDetectorRef) {
    this.galleryConfig = this.getGalleryConfig() || this.galleryConfig;
  }

  ngOnInit() {
    this.images = of([
      {
        src: './assets/kitten3.jpg',
        alt: 'Kitten 3',
        description: 'Beautiful kitten'
      },
      {
        src: './assets/mountains2.jpg',
        thumbSrc: './assets/mountains2-thumb.jpg',
        alt: 'Mountains 2',
        description: 'Mountain ridge'
      },
      {
        src: './assets/kitten4.jpg',
        alt: 'Kitten 4',
        description:
          '<i>Lovely</i> kitten that <strong>will</strong> make your day way more enjoyable'
      },
      // {
      //   src: 'https://www.youtube.com/embed/s54LfNUU1Cg',
      //   thumbSrc: 'https://img.youtube.com/vi/s54LfNUU1Cg/1.jpg',
      //   alt: 'LP Somewhere I belong'
      // },
      {
        src: './assets/mountains4.jpg',
        thumbSrc: './assets/mountains4-thumb.jpg',
        alt: 'Mountains 4',
        description: 'Mountain shoulder'
      },
      {
        src: './assets/fruit1.jpg',
        alt: 'Fruit 1',
        description: 'Passion fruit'
      },
      {
        src: './assets/fruit2.jpg',
        thumbSrc: './assets/fruit2-thumb.jpg',
        alt: 'Fruit 2',
        description: 'Really juicy fruit'
      },
      {
        src: './assets/fruit3.jpg',
        alt: 'Fruit 3',
        description: 'Most exotic fruit I have ever seen'
      },
      {
        src:
          'https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4',
        thumbSrc: './assets/flower.jpg',
        video: true,
        description: 'Blooming rose'
      },
      {
        src: './assets/vogel1.jpg',
        thumbSrc: './assets/vogel1-thumb.jpg',
        alt: 'Bird 1',
        description: 'Bird, taking off'
      },
      {
        src: './assets/landscape1.jpg',
        thumbSrc: './assets/landscape1-thumb.jpg',
        alt: 'Landscape 1',
        description: 'Pale painting of a landscape'
      }
    ]).pipe(
      switchMap(items =>
        defer(() => of(items).pipe(delay(this.imageLoadingLatency)))
      )
    );

    window.addEventListener('beforeunload', this.storeGalleryConfig);
  }

  async onImageClick(event: ImageClickEvent) {
    // this.galleryDetail
    //   .open(event.index, {
    //     thumbsOrientation: 'bottom',
    //     panelClass: ['gallery-detail'],
    //     documentScroll: true,
    //     loading: 'lazy'
    //   })
    //   .load(await this.images.toPromise());
  }

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
