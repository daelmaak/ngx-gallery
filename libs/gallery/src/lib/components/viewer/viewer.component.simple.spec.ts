import type { GalleryItemInternal } from '../../core/gallery-item';
import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let viewer: ViewerComponent;

  beforeEach(() => {
    viewer = new ViewerComponent();
    viewer.items = [
      { src: 'src1' },
      { src: 'src2' },
      { src: 'src3' },
      { src: 'src4' },
    ];
    viewer.loading = 'lazy';
    viewer.selectedIndex = 0;
  });

  describe('media asset loading', () => {
    beforeEach(() => {
      viewer = new ViewerComponent();
      viewer.items = [{ src: 'src1' }, { src: 'src2' }];
      viewer.showErrors = true;
    });

    describe('failed', () => {
      it('should mark item as failed to load', () => {
        const failingItem = viewer.items[0] as GalleryItemInternal;

        viewer.onItemErrored(failingItem);

        expect(viewer.itemFailedToLoad(failingItem)).toBe(true);
      });
    });
  });
});
