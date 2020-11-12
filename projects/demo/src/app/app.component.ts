import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleryImage, GalleryVideo } from 'projects/gallery/src/lib/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  installScript = `
    npm i ngx-doe-gallery -S
  `;

  moduleCode = `
    import { GalleryModule } from 'ngx-doe-gallery';

    @NgModule({
      imports: [ GalleryModule ]
    })
    export class AppModule { }
  `;

  componentCode = `
    import { GalleryImage } from 'ngx-doe-gallery';

    @Component({...})
    export class AppComponent {
      images = [ new GalleryImage('kitten1.jpg') ]
    }
  `;

  componentTemplateCode = `
    <doe-gallery [items]="images"></doe-gallery>
  `;

  images = [
    new GalleryImage(
      './assets/images/mountains-1-lg.jpg',
      './assets/images/mountains-1-sm.jpg',
      'Mountains',
      'Mighty mountains'
    ),
    new GalleryImage(
      './assets/images/house-1-lg.jpg',
      './assets/images/house-1-sm.jpg',
      'House',
      `I just love mysterious houses`
    ),
    new GalleryImage(
      './assets/images/church-1-lg.jpg',
      './assets/images/church-1-sm.jpg',
      'Church hallway',
      'Feel the history in this beautiful church'
    ),
    new GalleryImage(
      './assets/images/lens-1-lg.jpg',
      './assets/images/lens-1-sm.jpg',
      'Lens',
      'Zoom the world'
    ),
    new GalleryImage(
      './assets/images/terraces-1-lg.jpg',
      './assets/images/terraces-1-sm.jpg',
      'Mountains',
      'Sun lit mountains'
    ),
    new GalleryImage(
      './assets/images/tulip-1-lg.jpg',
      './assets/images/tulip-1-sm.jpg',
      'Tulip',
      `You didn't forget to buy your better half flowers, did you?`
    ),
  ];

  smallerImages = this.images.map(i => ({
    ...i,
    src: i.src.replace('-lg', '-md'),
  }));

  extendedImages = [
    ...this.images,
    new GalleryImage(
      './assets/images/forest-1-lg.jpg',
      './assets/images/forest-1-sm.jpg',
      'Forest',
      'Mysterious forest'
    ),
    new GalleryImage(
      './assets/images/sky-1-lg.jpg',
      './assets/images/sky-1-sm.jpg',
      'Sky',
      'Mysterious sky'
    ),
    new GalleryImage(
      './assets/images/cheers-1-lg.jpg',
      './assets/images/cheers-1-sm.jpg',
      'Cheers',
      'Two guys drinking during sunset'
    ),
    new GalleryImage(
      './assets/images/laptop-1-lg.jpg',
      './assets/images/laptop-1-sm.jpg',
      'Laptop',
      'Ideal workplace for computer work'
    ),
    new GalleryImage(
      './assets/images/snowflake-1-lg.jpg',
      './assets/images/snowflake-1-sm.jpg',
      'Snowflake',
      'Snowflake detail'
    ),
    new GalleryImage(
      './assets/images/mesh-1-lg.jpg',
      './assets/images/mesh-1-sm.jpg',
      'City',
      'City at night'
    ),
  ];

  erroredImages = [
    new GalleryImage(
      './assets/images/non-existing-picture.jpg',
      null,
      'Non-existing picture'
    ),
    new GalleryVideo(
      './assets/images/non-existing-video.jpg',
      null,
      'Non-existing video'
    ),
    ...this.extendedImages.slice(2, 4),
  ];

  videos = [
    new GalleryVideo('./assets/images/beach-1.mp4'),
    new GalleryVideo('https://www.youtube.com/embed/80_39eAx3z8'),
  ];

  mobile = matchMedia('(max-width: 767px)').matches;
}
