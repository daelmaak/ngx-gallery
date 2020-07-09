import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GalleryImage, GalleryVideo } from 'projects/gallery/src/lib/core';

@Component({
  selector: 'app-demo-custom-templates',
  templateUrl: './demo-custom-templates.component.html',
  styleUrls: ['./demo-custom-templates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCustomTemplatesComponent {
  images = [
    new GalleryImage(
      './assets/mountains-1-lg.jpg',
      './assets/mountains-1-sm.jpg',
      'Mountains',
      'Mighty mountains'
    ),
    new GalleryVideo(
      './assets/beach-1.mp4',
      null,
      'Beach',
      'Video of a beach taken from drone'
    ),
    new GalleryImage(
      './assets/non-existing-image.jpg',
      null,
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
      null,
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
}
