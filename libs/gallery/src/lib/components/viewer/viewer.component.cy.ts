import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryItem } from '../../core';
import { GalleryComponent } from '../gallery/gallery.component';
import { SLIDE_ANIMATION_DURATION } from './viewer.component';

describe('Slider', () => {
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

  it('slides to next image', () => {
    cy.mount(GalleryComponent, {
      componentProperties: { items },
      imports: [BrowserAnimationsModule],
    });

    ensureImagesVisible(0);

    cy.slideByMouse({ x: 250, y: 250 }, { x: 0, y: 250 });

    ensureImagesVisible(1);
  });

  it('displays the first image even when images load later', () => {
    cy.mount(GalleryComponent, {
      componentProperties: { items: [] },
      imports: [BrowserAnimationsModule],
    }).then(({ fixture }) => {
      // cy.wait(100);
      cy.log('set non empty items').then(() => {
        fixture.componentRef.setInput('items', items);
        // Even though setInput should trigger change detection, it's for some reason still
        // needed to rerender with the new items.
        fixture.detectChanges();
        cy.wait(SLIDE_ANIMATION_DURATION);
      });
    });

    ensureImagesVisible(0);
  });

  function ensureImagesVisible(...visibleIndexes: number[]) {
    cy.get('viewer li img').then(imgs => {
      for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        const isVisible = visibleIndexes.includes(i);
        cy.wrap(img).should(isVisible ? 'be.visible' : 'not.be.visible');
      }
    });
  }
});
