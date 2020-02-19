import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import {
  GalleryDetailRef,
  GalleryDetailService
} from 'projects/gallery-detail/src/public-api';
import {
  GalleryComponent,
  GalleryItem,
  ImageFit,
  Orientation,
  OverscrollBehavior
} from 'projects/gallery/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  images: Observable<GalleryItem[]>;
  galleryDetailRef: GalleryDetailRef;

  arrows = true;
  imageCounter = true;
  imageFit: ImageFit = 'contain';
  loop = true;
  scrollBehavior: ScrollBehavior = 'smooth';
  thumbs = true;
  thumbsAutoScroll = true;
  thumbsOrientation: Orientation = 'left';
  thumbsArrows = true;
  thumbsArrowSlideByLength = 0;
  thumbsScrollBehavior: ScrollBehavior = 'smooth';
  thumbsOverscrollBehavior: OverscrollBehavior = 'auto';
  thumbsImageFit: ImageFit = 'cover';

  @ViewChild(GalleryComponent, { static: false }) gallery: GalleryComponent;

  constructor(private galleryDetail: GalleryDetailService) {}

  ngOnInit() {
    this.images = of([
      {
        src: './assets/mountains1.jpg',
        thumbSrc: './assets/mountains1-thumb.jpg'
      },
      {
        src: './assets/mountains2.jpg',
        thumbSrc: './assets/mountains2-thumb.jpg'
      },
      {
        src: './assets/mountains3.jpg',
        thumbSrc: './assets/mountains3-thumb.jpg'
      },
      {
        src: './assets/mountains4.jpg',
        thumbSrc: './assets/mountains4-thumb.jpg'
      },
      {
        src: './assets/fruit1.jpg'
      },
      {
        src: './assets/fruit2.jpg',
        thumbSrc: './assets/fruit2-thumb.jpg'
      },
      {
        src: './assets/fruit3.jpg'
      },
      {
        src: './assets/vogel1.jpg',
        thumbSrc: './assets/vogel1-thumb.jpg'
      },
      {
        src: './assets/landscape1.jpg',
        thumbSrc: './assets/landscape1-thumb.jpg'
      }
    ]).pipe(delay(1000));
  }

  ngAfterViewInit() {
    // this.gallery.focus();
  }

  async openFirst(index: number) {
    this.galleryDetail
      .open(index, {
        thumbsOrientation: 'bottom',
        panelClass: ['gallery-detail-first'],
        documentScroll: true
      })
      .load(await this.images.toPromise());
  }

  // openSecond() {
  //   this.galleryDetail
  //     .open(0, {
  //       imageTemplate: this.detailImageTemplate2
  //     })
  //     .load(this.images);
  // }

  // openThird(index: number) {
  //   this.galleryDetail
  //     .open(index, {
  //       thumbsOrientation: 'bottom',
  //       panelClass: ['gallery-detail-third', 'fullscreen'],
  //       loop: false
  //     })
  //     .load(this.images);
  // }

  // openFourth(index: number) {
  //   this.galleryDetail
  //     .open(index, {
  //       thumbs: false,
  //       panelClass: ['gallery-detail-fourth', 'fullscreen'],
  //       loop: true
  //     })
  //     .load(this.images);
  // }
}
