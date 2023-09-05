import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryItem } from '@daelmaak/ngx-gallery';

@Component({
  selector: 'app-demo-custom-templates',
  templateUrl: './demo-custom-templates.component.html',
  styleUrls: ['./demo-custom-templates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCustomTemplatesComponent {
  @Input() mobile: boolean;
  @Input() tablet: boolean;

  images: GalleryItem[] = [
    {
      src: './assets/images/mountains-1-lg.jpg',
      thumbSrc: './assets/images/mountains-1-sm.jpg',
      alt: 'Mountains',
      description: 'Nothing is better than a hike in the mountains',
    },
    {
      src: './assets/images/beach-1.mp4',
      alt: 'Beach',
      description: 'Video of a beach taken from drone',
      video: true,
    },
    {
      src: './assets/images/cheers-1-lg.jpg',
      thumbSrc: './assets/images/cheers-1-sm.jpg',
      alt: 'Cheers',
      description: 'Two guys drinking during sunset',
    },
    {
      src: './assets/images/laptop-1-lg.jpg',
      alt: 'Laptop',
      description: 'Ideal workplace for computer work',
    },
    {
      src: './assets/images/non-existing-image.jpg',
      alt: 'Sky',
      description: 'Mysterious sky',
    },
    {
      src: './assets/images/snowflake-1-lg.jpg',
      thumbSrc: './assets/images/snowflake-1-sm.jpg',
      alt: 'Snowflake',
      description: 'Snowflake detail',
    },
    {
      src: './assets/images/mesh-1-lg.jpg',
      thumbSrc: './assets/images/mesh-1-sm.jpg',
      alt: 'City',
      description: 'City at night',
    },
  ];

  selectedItem?: GalleryItem;
}
