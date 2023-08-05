import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleryItem } from '@daelmaak/ngx-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  installScript = `
    yarn add @daelmaak/ngx-gallery
  `;

  componentCode = `
    import { GalleryComponent, GalleryItem } from '@daelmaak/ngx-gallery';

    @Component({
      standalone: true,
      imports: [GalleryComponent]
    })
    export class AppComponent {
      images: GalleryItem[] = [{ src: 'kitten1.jpg' }]
    }
  `;

  componentTemplateCode = `
    <gallery [items]="images"></gallery>
  `;

  images: GalleryItem[] = [
    {
      src: './assets/images/mountains-1-lg.jpg',
      thumbSrc: './assets/images/mountains-1-sm.jpg',
      alt: 'Mountains',
      description: 'Mighty mountains',
    },
    {
      src: './assets/images/house-1-lg.jpg',
      thumbSrc: './assets/images/house-1-sm.jpg',
      alt: 'House',
      description: `I just love mysterious houses`,
    },
    {
      src: './assets/images/church-1-lg.jpg',
      thumbSrc: './assets/images/church-1-sm.jpg',
      alt: 'Church hallway',
      description: 'Feel the history in this beautiful church',
    },
    {
      src: './assets/images/lens-1-lg.jpg',
      thumbSrc: './assets/images/lens-1-sm.jpg',
      alt: 'Lens',
      description: 'Zoom the world',
    },
    {
      src: './assets/images/terraces-1-lg.jpg',
      thumbSrc: './assets/images/terraces-1-sm.jpg',
      alt: 'Mountains',
      description: 'Sun lit mountains',
    },
    {
      src: './assets/images/tulip-1-lg.jpg',
      thumbSrc: './assets/images/tulip-1-sm.jpg',
      alt: 'Tulip',
      description: `You didn't forget to buy your better half flowers, did you?`,
    },
  ];

  smallerImages = this.images.map(i => ({
    ...i,
    src: i.src.replace('-lg', '-md'),
  }));

  extendedImages: GalleryItem[] = [
    ...this.images,
    {
      src: './assets/images/forest-1-lg.jpg',
      thumbSrc: './assets/images/forest-1-sm.jpg',
      alt: 'Forest',
      description: 'Mysterious forest',
    },
    {
      src: './assets/images/sky-1-lg.jpg',
      thumbSrc: './assets/images/sky-1-sm.jpg',
      alt: 'Sky',
      description: 'Mysterious sky',
    },
    {
      src: './assets/images/cheers-1-lg.jpg',
      thumbSrc: './assets/images/cheers-1-sm.jpg',
      alt: 'Cheers',
      description: 'Two guys drinking during sunset',
    },
    {
      src: './assets/images/laptop-1-lg.jpg',
      thumbSrc: './assets/images/laptop-1-sm.jpg',
      alt: 'Laptop',
      description: 'Ideal workplace for computer work',
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

  erroredImages: GalleryItem[] = [
    {
      src: './assets/images/non-existing-picture.jpg',
      alt: 'Non-existing picture',
    },
    {
      src: './assets/images/non-existing-video.jpg',
      alt: 'Non-existing video',
      video: true,
    },
    ...this.extendedImages.slice(2, 4),
  ];

  videos: GalleryItem[] = [
    { src: './assets/images/beach-1.mp4', video: true },
    { src: 'https://www.youtube.com/embed/80_39eAx3z8', video: true },
  ];

  mobile = matchMedia('(max-width: 767px)').matches;
}
