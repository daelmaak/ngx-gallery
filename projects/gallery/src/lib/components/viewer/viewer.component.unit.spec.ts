import { ViewerComponent } from './viewer.component';

describe('ViewerComponent Unit', () => {
  describe('src attribute', () => {
    let viewer: ViewerComponent;

    beforeEach(() => {
      viewer = new ViewerComponent(null, null, null);
      viewer.items = [
        {
          src: 'src1'
        },
        {
          src: 'src2'
        },
        {
          src: 'src3'
        },
        {
          src: 'src4'
        }
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

    it('should load items around selected item even though lazy loading is on, with overlap to the end of list if looping is on', () => {
      viewer.loop = true;
      expect(viewer.getSrc(viewer.items[1])).toBeTruthy();
      expect(viewer.getSrc(viewer.items[3])).toBeTruthy();
    });
  });
});
