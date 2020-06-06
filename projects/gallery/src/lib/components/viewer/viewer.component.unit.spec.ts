import { ViewerComponent } from './viewer.component';
import { GalleryImage } from '../../core';

describe('ViewerComponent Unit', () => {
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

  describe('src attribute', () => {
    it('should be truthy if default loading on', () => {
      viewer.loading = 'auto';
      expect(viewer.getSrc(viewer.items[2], 2)).toBeTruthy();
    });

    it('should be falsy if lazy loading on and item has not been seen nor selected yet', () => {
      expect(viewer.getSrc(viewer.items[2], 2)).toBeFalsy();
    });

    it('should be truthy if lazy loading on and item has been seen', () => {
      viewer.items[2]._seen = true;
      expect(viewer.getSrc(viewer.items[2], 2)).toBeTruthy();
    });

    it('should be truthy if lazy loading on and item has been selected', () => {
      viewer.selectedIndex = 2;
      expect(viewer.getSrc(viewer.items[2], 2)).toBeTruthy();
    });

    it('should load items around selected item even though lazy loading is on', () => {
      viewer.selectedIndex = 1;
      expect(viewer.getSrc(viewer.items[0], 0)).toBeTruthy();
      expect(viewer.getSrc(viewer.items[2], 2)).toBeTruthy();
    });

    it('should load 5 items if 3 are visible', () => {
      viewer.items.push(new GalleryImage('src5'), new GalleryImage('src6'));
      viewer.selectedIndex = 3;
      viewer['_viewerWidth'] = 600;
      viewer['_itemWidth'] = 400;

      viewer.items.slice(1).forEach(i => {
        expect(viewer.getSrc(i, viewer.items.indexOf(i))).toBeTruthy();
      });
      expect(viewer.getSrc(viewer.items[0], 0)).toBeFalsy();
    });
  });

  describe('scroll proximity in loop mode', () => {
    beforeEach(() => {
      viewer.loop = true;
      viewer['_viewerWidth'] = 600;
      viewer['_itemWidth'] = 600;
    });

    it('should consider selected item in proximity', () => {
      expect(viewer.isInScrollportProximity(1)).toBeTruthy();
    });

    it('should consider fringe item in proximity if selected item next to fringe', () => {
      expect(viewer.isInScrollportProximity(0)).toBeTruthy();
    });

    it('should consider regular item in proximity if selected item is just next to it', () => {
      expect(viewer.isInScrollportProximity(2)).toBeTruthy();
    });

    it('should consider fringe item on the opposite side of slider in proximity if first item selected', () => {
      expect(viewer.isInScrollportProximity(5)).toBeTruthy();
    });

    it('should consider fringe item on the opposite side of slider in proximity if last item selected', () => {
      viewer.selectedIndex = 3;
      expect(viewer.isInScrollportProximity(0)).toBeTruthy();
    });

    it('should consider regular item on the opposite side of slider in proximity if first item selected', () => {
      expect(viewer.isInScrollportProximity(4)).toBeTruthy();
    });

    it('should consider regular items in the middle, which are not fringe nor next to selected item, as out of proximity', () => {
      expect(viewer.isInScrollportProximity(3)).toBeFalsy();
    });
  });
});
