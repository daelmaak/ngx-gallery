import { Component, OnInit } from '@angular/core';
import {
  GalleryDetailService,
  GalleryDetailRef
} from 'projects/gallery-detail/src/public-api';
import { GalleryItem } from 'projects/gallery/src/lib/core/gallery-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: GalleryItem[];
  galleryDetailRef: GalleryDetailRef;

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
        hasBackdrop: true,
        panelClass: ['gallery-detail-first'],
        documentScroll: true,
        thumbsArrowSlideTime: 300
      })
      .load(this.images);
  }

  openThird(index: number) {
    this.galleryDetail
      .open(index, {
        thumbsOrientation: 'left',
        hasBackdrop: true,
        panelClass: ['gallery-detail-third', 'fullscreen']
      })
      .load(this.images);
  }
}
