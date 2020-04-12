import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  flush
} from '@angular/core/testing';

import { ImageViewerComponent } from './image-viewer.component';
import { ChevronIconComponent } from '../icons/chevron/chevron-icon.component';
import { ImageCounterComponent } from '../image-counter/image-counter.component';
import { SafePipe } from '../../pipes/safe.pipe';
import {
  SimpleChange,
  DebugElement,
  ChangeDetectionStrategy
} from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ImageViewerComponent UI', () => {
  let component: ImageViewerComponent;
  let fixture: ComponentFixture<ImageViewerComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImageViewerComponent,
        ChevronIconComponent,
        ImageCounterComponent,
        SafePipe
      ]
    })
      .overrideComponent(ImageViewerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  describe('initialization', () => {
    it('should create', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should succeed also with empty items', () => {
      const changes = {
        items: new SimpleChange(null, [], true)
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      expect(component).toBeTruthy();

      expect(de.query(By.css('.initial-item'))).toBeTruthy();
    });

    it('should display items even though they have been set later', fakeAsync(() => {
      component.items = [];
      let changes = {
        items: new SimpleChange(null, component.items, true)
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      tick(1000);

      component.items = [{ src: 'src1' }, { src: 'src2' }];
      changes = {
        items: new SimpleChange([], component.items, false)
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();
      // flush macrotasks like requestAnimationFrame
      flush();

      expect(de.queryAll(By.css('li:not(.initial-item)')).length).toBe(2);
    }));
  });
});

describe('ImageViewerComponent Unit', () => {
  describe('src attribute', () => {
    let viewer: ImageViewerComponent;

    beforeEach(() => {
      viewer = new ImageViewerComponent(null, null, null);
      viewer.items = [
        {
          src: 'src1'
        },
        {
          src: 'src2'
        }
      ];
      viewer.loading = 'lazy';
      viewer.selectedIndex = 0;
    });

    it('should be truthy if default loading on', () => {
      viewer.loading = 'auto';
      expect(viewer.getSrc(viewer.items[1], 1)).toBeTruthy();
    });

    it('should be empty if lazy loading on and item has not been seen nor selected yet', () => {
      expect(viewer.getSrc(viewer.items[1], 1)).toBeFalsy();
    });

    it('should be truthy if lazy loading on and item has been seen', () => {
      viewer.items[1]._seen = true;
      expect(viewer.getSrc(viewer.items[1], 1)).toBeTruthy();
    });

    it('should be truthy if lazy loading on and item has been selected', () => {
      viewer.selectedIndex = 1;
      expect(viewer.getSrc(viewer.items[1], 1)).toBeTruthy();
    });
  });
});
