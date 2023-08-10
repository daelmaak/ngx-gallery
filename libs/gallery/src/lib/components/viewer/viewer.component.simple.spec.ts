import { ChangeDetectorRef, SimpleChange } from '@angular/core';
import { GalleryItemInternal } from '../../core/gallery-item';
import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let viewer: ViewerComponent;

  beforeEach(() => {
    viewer = new ViewerComponent(null, null, null, null);
    viewer.items = [
      { src: 'src1' },
      { src: 'src2' },
      { src: 'src3' },
      { src: 'src4' },
    ];
    viewer.loading = 'lazy';
    viewer.selectedIndex = 0;
  });

  describe('fringe items count in loop mode', () => {
    beforeEach(() => {
      viewer.loop = true;
      viewer.items = [
        { src: 'src1' },
        { src: 'src2' },
        { src: 'src3' },
        { src: 'src4' },
      ];
    });

    it('should be 1 when just 1 item visible in the viewport', () => {
      viewer.visibleItems = 1;
      const fringeCount = viewer['getFringeCount']();

      expect(fringeCount).toBe(1);
    });

    it('should be 2 when gallery item is a little slimmer than scrollport', () => {
      viewer.visibleItems = 1.2;
      const fringeCount = viewer['getFringeCount']();

      expect(fringeCount).toBe(2);
    });

    it('should be 3 when 3 items visible', () => {
      viewer.visibleItems = 3;
      const fringeCount = viewer['getFringeCount']();

      expect(fringeCount).toBe(3);
    });
  });

  describe('media asset loading', () => {
    let changeDetector: ChangeDetectorRef;

    beforeEach(() => {
      changeDetector = jasmine.createSpyObj('changeDetectorRef', [
        'detectChanges',
      ]);
      viewer = new ViewerComponent(null, changeDetector, null, null);
      viewer.items = [{ src: 'src1' }, { src: 'src2' }];
    });

    describe('succeeded', () => {
      it('should mark item as loaded', () => {
        const loadedItem = viewer.items[0] as GalleryItemInternal;

        viewer.onItemLoaded(loadedItem);

        expect(viewer.itemLoaded(loadedItem)).toBe(true);
      });

      it('should mark item as not failed', () => {
        const loadedItem = viewer.items[0] as GalleryItemInternal;

        viewer.onItemLoaded(loadedItem);

        expect(viewer.itemFailedToLoad(loadedItem)).toBe(false);
      });

      it('should mark item as loaded even if it was failing before', () => {
        const failingItem = viewer.items[0] as GalleryItemInternal;

        viewer.onItemErrored(failingItem);
        viewer.onItemLoaded(failingItem);

        expect(viewer.itemLoaded(failingItem)).toBe(true);
      });

      it('should mark item as not failed even if it was failing before', () => {
        const failingItem = viewer.items[0] as GalleryItemInternal;

        viewer.onItemErrored(failingItem);
        viewer.onItemLoaded(failingItem);

        expect(viewer.itemFailedToLoad(failingItem)).toBe(false);
      });

      it('should notify change detector of changes', () => {
        const loadedItem = viewer.items[0] as GalleryItemInternal;

        viewer.onItemLoaded(loadedItem);

        expect(changeDetector.detectChanges).toHaveBeenCalled();
      });
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
