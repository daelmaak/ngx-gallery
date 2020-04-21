import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  flush
} from '@angular/core/testing';

import { ViewerComponent } from './viewer.component';
import { ChevronIconComponent } from '../icons/chevron/chevron-icon.component';
import { CounterComponent } from '../counter/counter.component';
import { SafePipe } from '../../pipes/safe.pipe';
import {
  SimpleChange,
  DebugElement,
  ChangeDetectionStrategy
} from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ViewerComponent UI', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewerComponent,
        ChevronIconComponent,
        CounterComponent,
        SafePipe
      ]
    })
      .overrideComponent(ViewerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerComponent);
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

    it('should preselect item based on gived index', fakeAsync(() => {
      component.selectedIndex = 1;
      component.items = [{ src: 'src1' }, { src: 'src2' }];
      const changes = {
        items: new SimpleChange(null, component.items, true)
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      tick();

      expect(de.query(By.css('li.selected'))).toBeTruthy();
      expect(de.queryAll(By.css('li'))[1].classes.selected).toBeTruthy();
      expect(de.query(By.css('ul')).nativeElement.style.transform).toMatch(
        /translate3d\(-\d+px, 0px, 0px\)/
      );
    }));
  });
});

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
        }
      ];
      viewer.loading = 'lazy';
      viewer.selectedIndex = 0;
    });

    it('should be truthy if default loading on', () => {
      viewer.loading = 'auto';
      expect(viewer.getSrc(viewer.items[1])).toBeTruthy();
    });

    it('should be empty if lazy loading on and item has not been seen nor selected yet', () => {
      expect(viewer.getSrc(viewer.items[1])).toBeFalsy();
    });

    it(`should be truthy if item:
          +- 1 item distance from selected item
          lazy loaded
          not yet seen
          viewer was already interacted with`, () => {
      viewer.onInteraction();
      expect(viewer.getSrc(viewer.items[1])).toBeTruthy();
    });

    it(`should be falsy if item:
          +- 1 item distance from selected item
          lazy loaded
          not yet seen
          viewer wasn't interacted with yet
          viewer has looping on`, () => {
      viewer.loop = true;
      viewer.items.push({ src: 'src3' });
      expect(viewer.getSrc(viewer.items[2])).toBeFalsy();
    });

    it('should be truthy if lazy loading on and item has been seen', () => {
      viewer.items[1]._seen = true;
      expect(viewer.getSrc(viewer.items[1])).toBeTruthy();
    });

    it('should be truthy if lazy loading on and item has been selected', () => {
      viewer.selectedIndex = 1;
      expect(viewer.getSrc(viewer.items[1])).toBeTruthy();
    });
  });
});
