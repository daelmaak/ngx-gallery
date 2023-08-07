import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryItem } from '../../core';
import { GalleryComponent } from '../gallery/gallery.component';

describe('Gallery', () => {
  const items: GalleryItem[] = [
    {
      src: 'https://cdn.pixabay.com/photo/2020/06/23/15/17/avocado-5332878_960_720.jpg',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_960_720.jpg',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2020/06/26/04/40/flower-5341644_960_720.jpg',
    },
  ];

  it('mounts', () => {
    // see: https://on.cypress.io/mounting-angular
    cy.mount(GalleryComponent, {
      componentProperties: {
        items,
      },
      imports: [BrowserAnimationsModule],
    });
  });
});
