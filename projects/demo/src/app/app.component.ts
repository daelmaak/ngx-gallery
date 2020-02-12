import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GalleryItem } from 'projects/gallery/src/public-api';
import {
  GalleryDetailRef,
  GalleryDetailService
} from 'projects/gallery-detail/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: GalleryItem[];
  galleryDetailRef: GalleryDetailRef;

  @ViewChild('detailImageTemplate2', { static: false })
  detailImageTemplate2: TemplateRef<any>;

  constructor(private galleryDetail: GalleryDetailService) {}

  ngOnInit() {
    this.images = [
      {
        src: '/assets/mountains1.jpg',
        thumbSrc: '/assets/mountains1-thumb.jpg'
      },
      {
        src: '/assets/mountains2.jpg',
        thumbSrc: '/assets/mountains2-thumb.jpg'
      },
      {
        src: '/assets/mountains3.jpg',
        thumbSrc: '/assets/mountains3-thumb.jpg'
      },
      {
        src: '/assets/mountains4.jpg',
        thumbSrc: '/assets/mountains4-thumb.jpg'
      },
      {
        src: '/assets/fruit1.jpg'
      },
      {
        src: '/assets/fruit2.jpg',
        thumbSrc: '/assets/fruit2-thumb.jpg'
      },
      {
        src: '/assets/fruit3.jpg'
      },
      {
        src: '/assets/vogel1.jpg',
        thumbSrc: '/assets/vogel1-thumb.jpg'
      },
      {
        src: '/assets/landscape1.jpg',
        thumbSrc: '/assets/landscape1-thumb.jpg'
      }
    ];
  }

  openFirst(index: number) {
    this.galleryDetail
      .open(index, {
        thumbsOrientation: 'bottom',
        panelClass: ['gallery-detail-first'],
        documentScroll: true,
        thumbsArrowSlideTime: 150
      })
      .load(this.images);
  }

  openSecond() {
    this.galleryDetail
      .open(0, {
        imageTemplate: this.detailImageTemplate2
      })
      .load(this.images);
  }

  openThird(index: number) {
    this.galleryDetail
      .open(index, {
        thumbsOrientation: 'bottom',
        panelClass: ['gallery-detail-third', 'fullscreen'],
        loop: false
      })
      .load(this.images);
  }

  openFourth(index: number) {
    this.galleryDetail
      .open(index, {
        thumbs: false,
        panelClass: ['gallery-detail-fourth', 'fullscreen'],
        loop: true
      })
      .load(this.images);
  }
}
