import { ViewerComponent } from './viewer.component';
import { GalleryImage } from '../../core';

describe('ViewerComponent Unit', () => {
  describe('src attribute', () => {
    let viewer: ViewerComponent;

    beforeEach(() => {
      viewer = new ViewerComponent(null, null, null);
      viewer.items = [
        new GalleryImage('src1'),
        new GalleryImage('src2'),
        new GalleryImage('src3'),
        new GalleryImage('src4'),
      ];
      viewer.loading = 'lazy';
      viewer.selectedIndex = 0;
    });

    it('should be truthy if default loading on', () => {
      viewer.loading = 'auto';
      expect(viewer.getSrc(viewer.items[2])).toBeTruthy();
    });

    it('should be falsy if lazy loading on and item has not been seen nor selected yet', () => {
      expect(viewer.getSrc(viewer.items[2])).toBeFalsy();
    });

    it('should be truthy if lazy loading on and item has been seen', () => {
      viewer.items[2]._seen = true;
      expect(viewer.getSrc(viewer.items[2])).toBeTruthy();
    });

    it('should be truthy if lazy loading on and item has been selected', () => {
      viewer.selectedIndex = 2;
      expect(viewer.getSrc(viewer.items[2])).toBeTruthy();
    });

    it('should load items around selected item even though lazy loading is on', () => {
      viewer.selectedIndex = 1;
      expect(viewer.getSrc(viewer.items[0])).toBeTruthy();
      expect(viewer.getSrc(viewer.items[2])).toBeTruthy();
    });

    it('should load 5 items if 3 are visible', () => {
      viewer.items.push(new GalleryImage('src5'), new GalleryImage('src6'));
      viewer.selectedIndex = 3;
      viewer['viewerWidth'] = 600;
      viewer['itemWidth'] = 400;

      viewer.items.slice(1).forEach(i => {
        expect(viewer.getSrc(i)).toBeTruthy();
      });
      expect(viewer.getSrc(viewer.items[0])).toBeFalsy();
    });
  });
});
