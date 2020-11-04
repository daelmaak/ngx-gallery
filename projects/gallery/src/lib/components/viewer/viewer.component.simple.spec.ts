import { GalleryImage } from '../../core';
import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
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

  describe('scroll proximity', () => {
    describe('in loop mode', () => {
      beforeEach(() => {
        viewer.touched = true;
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

      it(`should display number of items adjacent to the selected, the number being ceiled amount of displayed items.
       If 2.2 items are displayed, then 3 adjacent items are displayed next to the selected item`, () => {
        viewer.items.push(new GalleryImage('src5'));
        viewer.items.push(new GalleryImage('src6'));
        viewer.items.push(new GalleryImage('src7'));
        viewer.items.push(new GalleryImage('src8'));
        viewer.items.push(new GalleryImage('src9'));
        viewer['_itemWidth'] = 600 / 2.5;
        viewer['_fringeCount'] = 3;

        expect(viewer.isInScrollportProximity(4)).toBeTruthy();
        expect(viewer.isInScrollportProximity(5)).toBeTruthy();
        expect(viewer.isInScrollportProximity(6)).toBeTruthy();
        expect(viewer.isInScrollportProximity(7)).toBeFalsy();
        expect(viewer.isInScrollportProximity(8)).toBeFalsy();
      });

      it('should load just 1 item on each side if the item is only by a fraction of a pixel smaller than viewer', () => {
        viewer.selectedIndex = 2;
        viewer['_itemWidth'] = 599.5;
        viewer['_fringeCount'] = 1;

        // fringe item representing the last item, should be loaded
        expect(viewer.isInScrollportProximity(0)).toBeTruthy();
        // first item, too far from selected, shouldn't be loaded
        expect(viewer.isInScrollportProximity(1)).toBeFalsy();
        // items around selected item, should be loaded
        expect(viewer.isInScrollportProximity(2)).toBeTruthy();
        expect(viewer.isInScrollportProximity(3)).toBeTruthy();
        expect(viewer.isInScrollportProximity(4)).toBeTruthy();
        // fringe item representing the first item, shouldn't be loaded
        expect(viewer.isInScrollportProximity(5)).toBeFalsy();
      });
    });

    describe('in non-loop mode', () => {
      beforeEach(() => {
        viewer.loop = false;
        viewer['_viewerWidth'] = 600;
        viewer['_itemWidth'] = 600;
        viewer['_fringeCount'] = 0;
      });

      it('should not display last items like in loop mode when first item selected', () => {
        viewer['_itemWidth'] = 600 / 2.5;
        viewer.items.push(new GalleryImage('src5'));
        viewer.items.push(new GalleryImage('src6'));
        expect(viewer.isInScrollportProximity(4)).toBeFalsy();
      });
    });

    describe('untouched', () => {
      beforeEach(() => {
        viewer.loop = true;
        viewer.touched = false;
        viewer['_viewerWidth'] = 600;
        viewer['_itemWidth'] = 600;
        viewer['_fringeCount'] = 1;
      });

      it(`should load only 1 item
          if only 1 item is visible`, () => {
        expect(viewer.isInScrollportProximity(0)).toBeFalsy();
        expect(viewer.isInScrollportProximity(1)).toBeTruthy();
        expect(viewer.isInScrollportProximity(2)).toBeFalsy();
      });

      it(`should load only 3 items
          if 3 items are visible, although partly`, () => {
        viewer['_itemWidth'] = 600 / 1.5;
        viewer['_fringeCount'] = 2;
        expect(viewer.isInScrollportProximity(0)).toBeFalsy();
        expect(viewer.isInScrollportProximity(1)).toBeTruthy();
        expect(viewer.isInScrollportProximity(2)).toBeTruthy();
        expect(viewer.isInScrollportProximity(3)).toBeTruthy();
        expect(viewer.isInScrollportProximity(4)).toBeFalsy();
      });
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
