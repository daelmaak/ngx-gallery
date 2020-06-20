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

  describe('src attribute', () => {});

  describe('scroll proximity in loop mode', () => {
    beforeEach(() => {
      viewer.loop = true;
      viewer['_viewerWidth'] = 600;
      viewer['_itemWidth'] = 600;
      viewer['_fringeCount'] = 1;
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

  describe('fringe items count in loop mode', () => {
    beforeEach(() => {
      viewer.loop = true;
      viewer.items = [
        new GalleryImage('src1'),
        new GalleryImage('src2'),
        new GalleryImage('src3'),
        new GalleryImage('src4'),
      ];
      viewer['_viewerWidth'] = 600;
    });

    it('should be 1 when just 1 item visible in the viewport', () => {
      viewer['_itemWidth'] = 600;
      const fringeCount = viewer['getFringeCount']();

      expect(fringeCount).toBe(1);
    });

    it('should be 1 when 1 item is visible but is by a fraction of a pixel slimmer than the scrollport', () => {
      viewer['_itemWidth'] = 599.5;
      const fringeCount = viewer['getFringeCount']();

      expect(fringeCount).toBe(1);
    });

    it('should be 2 when gallery item is a little slimmer than scrollport', () => {
      viewer['_itemWidth'] = 550;
      const fringeCount = viewer['getFringeCount']();

      expect(fringeCount).toBe(2);
    });

    it('should be 3 when 3 items visible', () => {
      viewer['_itemWidth'] = 200;
      const fringeCount = viewer['getFringeCount']();

      expect(fringeCount).toBe(3);
    });
  });

  describe('looping', () => {
    beforeEach(() => {
      viewer.loop = true;
      viewer.items = [new GalleryImage('src1')];
    });

    it('should disabled looping if there is just 1 item', () => {
      expect(viewer.loop).toBe(false);
    });
  });
});
