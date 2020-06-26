import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleryImage, GalleryVideo } from 'projects/gallery/src/lib/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  images = [
    new GalleryImage(
      './assets/forest-1-lg.jpg',
      './assets/forest-1-sm.jpg',
      'Forest',
      'Mysterious forest'
    ),
    new GalleryImage(
      './assets/sky-1-lg.jpg',
      './assets/sky-1-sm.jpg',
      'Sky',
      'Mysterious sky'
    ),
    new GalleryImage(
      './assets/cheers-1-lg.jpg',
      './assets/cheers-1-sm.jpg',
      'Cheers',
      'Two guys drinking during sunset'
    ),
    new GalleryImage(
      './assets/laptop-1-lg.jpg',
      './assets/laptop-1-sm.jpg',
      'Laptop',
      'Ideal workplace for computer work'
    ),
    new GalleryImage(
      './assets/snowflake-1-lg.jpg',
      './assets/snowflake-1-sm.jpg',
      'Snowflake',
      'Snowflake detail'
    ),
    new GalleryImage(
      './assets/mesh-1-lg.jpg',
      './assets/mesh-1-sm.jpg',
      'City',
      'City at night'
    ),
  ];

  extendedImages = [
    new GalleryImage(
      './assets/house-1-lg.jpg',
      './assets/house-1-sm.jpg',
      'House'
    ),
    new GalleryImage(
      './assets/church-1-lg.jpg',
      './assets/church-1-sm.jpg',
      'Church hallway'
    ),
    new GalleryImage(
      './assets/lens-1-lg.jpg',
      './assets/lens-1-sm.jpg',
      'Lens'
    ),
    new GalleryImage(
      './assets/mountains-1-lg.jpg',
      './assets/mountains-1-sm.jpg',
      'Mountains'
    ),
    new GalleryImage(
      './assets/tulip-1-lg.jpg',
      './assets/tulip-1-sm.jpg',
      'Tulip'
    ),
    ...this.images,
  ];

  erroredImages = [
    new GalleryImage(
      './assets/non-existing-picture.jpg',
      null,
      'Non-existing picture'
    ),
    new GalleryVideo(
      './assets/non-existing-video.jpg',
      null,
      'Non-existing video'
    ),
    ...this.extendedImages.slice(2, 4),
  ];

  videos = [
    new GalleryVideo('https://www.youtube.com/embed/80_39eAx3z8'),
    new GalleryVideo('./assets/beach-1.mp4'),
  ];
}
