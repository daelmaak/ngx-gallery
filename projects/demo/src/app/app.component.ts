import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

import {
  GalleryDetailRef,
  GalleryDetailService
} from 'projects/gallery-detail/src/public-api';
import {
  GalleryComponent,
  GalleryItem,
  ImageFit,
  Loading,
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

  mobile = matchMedia('(max-width: 767px)').matches;

  arrows = true;
  imageCounter = true;
  imageFit: ImageFit = 'contain';
  loading: Loading = 'lazy';
  loop = true;
  scrollBehavior: ScrollBehavior = 'smooth';
  selectionScrollBehavior: ScrollBehavior = 'auto';
  thumbs = true;
  thumbsAutoScroll = true;
  thumbsOrientation: Orientation = this.mobile ? 'bottom' : 'left';
  thumbsArrows = true;
  thumbsArrowSlideByLength = 0;
  thumbsScrollBehavior: ScrollBehavior = 'smooth';
  thumbsOverscrollBehavior: OverscrollBehavior = 'auto';
  thumbsImageFit: ImageFit = 'cover';

  displayGallery = true;
  imageLoadingLatency = 0;

  @ViewChild(GalleryComponent, { static: false }) gallery: GalleryComponent;

  constructor(
    private galleryDetail: GalleryDetailService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.images = of([
      {
        src: './assets/mountains1.jpg',
        thumbSrc: './assets/mountains1-thumb.jpg',
        alt: 'Mountains 1'
      },
      {
        src: './assets/mountains2.jpg',
        thumbSrc: './assets/mountains2-thumb.jpg',
        alt: 'Mountains 2'
      },
      {
        src: './assets/mountains3.jpg',
        thumbSrc: './assets/mountains3-thumb.jpg',
        alt: 'Mountains 3'
      },
      {
        src: './assets/mountains4.jpg',
        thumbSrc: './assets/mountains4-thumb.jpg',
        alt: 'Mountains 4'
      },
      {
        src: './assets/fruit1.jpg',
        alt: 'Fruit 1'
      },
      {
        src: './assets/fruit2.jpg',
        thumbSrc: './assets/fruit2-thumb.jpg',
        alt: 'Fruit 2'
      },
      {
        src: './assets/fruit3.jpg',
        alt: 'Fruit 3'
      },
      {
        src: './assets/vogel1.jpg',
        thumbSrc: './assets/vogel1-thumb.jpg',
        alt: 'Bird 1'
      },
      {
        src: './assets/landscape1.jpg',
        thumbSrc: './assets/landscape1-thumb.jpg',
        alt: 'Landscape 1'
      }
    ]).pipe(
      switchMap(items =>
        defer(() => of(items).pipe(delay(this.imageLoadingLatency)))
      )
    );
  }

  ngAfterViewInit() {
    // this.gallery.focus();
  }

  async openFirst(index: number) {
    this.galleryDetail
      .open(index, {
        thumbsOrientation: 'bottom',
        panelClass: ['gallery-detail-first'],
        documentScroll: true,
        loading: 'lazy',
        scrollSnap: true
      })
      .load(await this.images.toPromise());
  }

  reloadGallery() {
    this.displayGallery = false;
    this.cd.detectChanges();
    this.displayGallery = true;
    this.cd.detectChanges();
  }
}
