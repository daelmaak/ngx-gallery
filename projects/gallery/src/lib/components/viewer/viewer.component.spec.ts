import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  SimpleChange,
  TemplateRef,
  ViewChild,
  SimpleChanges,
} from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OrientationFlag } from '../../core';

import {
  GalleryItemInternal,
  GalleryImage,
  GalleryVideo,
} from '../../core/gallery-item';
import { SafePipe } from '../../pipes/safe.pipe';
import { CounterComponent } from '../counter/counter.component';
import { ChevronIconComponent } from '../icons/chevron/chevron-icon.component';
import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [
        ViewerComponent,
        ChevronIconComponent,
        CounterComponent,
        SafePipe,
        TestCustomTemplatesComponent,
      ],
    })
      .overrideComponent(ViewerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
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
        items: new SimpleChange(null, [], true),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      expect(component).toBeTruthy();

      expect(de.query(By.css('.doe-viewer-initial-item'))).toBeTruthy();
    });

    it('should display items even though they have been set later', fakeAsync(() => {
      component.items = [];
      let changes = {
        items: new SimpleChange(null, component.items, true),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      tick(1000);

      component.items = [new GalleryImage('src1'), new GalleryImage('src2')];
      changes = {
        items: new SimpleChange([], component.items, false),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();
      // flush macrotasks like requestAnimationFrame
      flush();

      expect(
        de.queryAll(By.css('li:not(.doe-viewer-initial-item)')).length
      ).toBe(2);
    }));

    it('should preselect item based on gived index', fakeAsync(() => {
      component.selectedIndex = 1;
      component.items = [new GalleryImage('src1'), new GalleryImage('src2')];
      const changes = {
        items: new SimpleChange(null, component.items, true),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      tick();

      expect(
        de.queryAll(By.css('li'))[1].classes['doe-viewer-item--selected']
      ).toBeTruthy();
      expect(de.query(By.css('ul')).nativeElement.style.transform).toMatch(
        /translate3d\(-\d+px, 0px, 0px\)/
      );
    }));
  });

  describe('item loading', () => {
    let changes: SimpleChanges;

    beforeEach(() => {
      component.touched = true;
      component.items = [
        new GalleryImage('src1'),
        new GalleryImage('src2'),
        new GalleryImage('src3'),
        new GalleryImage('src4'),
      ];
      component.loading = 'lazy';
      component.selectedIndex = 0;
      changes = {
        items: new SimpleChange(null, component.items, true),
      };
    });

    it('should display all items if default loading on', fakeAsync(() => {
      component.loading = 'auto';
      component.ngOnChanges(changes);
      fixture.detectChanges();
      tick();

      const items = de.queryAll(By.css('li picture'));

      expect(items.length).toBe(4);
    }));

    it('should not display item outside scroll proximity if lazy loading on', fakeAsync(() => {
      component.ngOnChanges(changes);
      fixture.detectChanges();
      tick();

      const items = de.queryAll(By.css('li picture'));

      expect(items.length).toBe(2);
    }));

    it('should display items if lazy loading on and items are in scroll proximity', fakeAsync(() => {
      component.ngOnChanges(changes);
      fixture.detectChanges();
      tick();

      const itemList = de.query(By.css('ul'));

      expect(itemList.query(By.css('img[src=src1]'))).toBeTruthy();
      expect(itemList.query(By.css('img[src=src2]'))).toBeTruthy();
      expect(itemList.query(By.css('img[src=src3]'))).toBeFalsy();
      expect(itemList.query(By.css('img[src=src4]'))).toBeFalsy();
    }));

    it('should display last item if first is selected and loop and lazy loading is on', fakeAsync(() => {
      component.loop = true;
      component.ngOnChanges(changes);
      fixture.detectChanges();
      tick();

      const itemList = de.query(By.css('ul'));

      expect(itemList.query(By.css('img[src=src1]'))).toBeTruthy();
      expect(itemList.query(By.css('img[src=src2]'))).toBeTruthy();
      expect(itemList.query(By.css('img[src=src3]'))).toBeFalsy();
      expect(itemList.query(By.css('img[src=src4]'))).toBeTruthy();
    }));

    it('should load 5 items if 3 are visible', fakeAsync(() => {
      component.items.push(new GalleryImage('src5'), new GalleryImage('src6'));
      component.selectedIndex = 3;
      component.ngOnChanges(changes);
      fixture.detectChanges();
      tick();
      component['_viewerWidth'] = 600;
      component['_itemWidth'] = 400;
      fixture.detectChanges();

      const itemList = de.query(By.css('ul'));

      expect(itemList.query(By.css('img[src=src1]'))).toBeFalsy();
      expect(itemList.query(By.css('img[src=src2]'))).toBeTruthy();
      expect(itemList.query(By.css('img[src=src3]'))).toBeTruthy();
      expect(itemList.query(By.css('img[src=src4]'))).toBeTruthy();
      expect(itemList.query(By.css('img[src=src5]'))).toBeTruthy();
      expect(itemList.query(By.css('img[src=src6]'))).toBeTruthy();
    }));

    describe('before touched', () => {
      beforeEach(() => {
        component.touched = false;
      });

      it('should load 3 items if 1.5 items are visible', fakeAsync(() => {
        component.ngOnChanges(changes);
        fixture.detectChanges();
        tick();
        component['_viewerWidth'] = 600;
        component['_itemWidth'] = 400;
        fixture.detectChanges();

        const itemList = de.query(By.css('ul'));

        expect(itemList.query(By.css('img[src=src1]'))).toBeTruthy();
        expect(itemList.query(By.css('img[src=src2]'))).toBeTruthy();
        expect(itemList.query(By.css('img[src=src3]'))).toBeFalsy();
      }));

      it('should load just 1 item if just 1 item is visible', fakeAsync(() => {
        component.ngOnChanges(changes);
        fixture.detectChanges();
        tick();
        component['_viewerWidth'] = 600;
        component['_itemWidth'] = 600;
        fixture.detectChanges();

        const itemList = de.query(By.css('ul'));

        expect(itemList.query(By.css('img[src=src1]'))).toBeTruthy();
        expect(itemList.query(By.css('img[src=src2]'))).toBeFalsy();
        expect(itemList.query(By.css('img[src=src3]'))).toBeFalsy();
      }));
    });
  });

  describe('error handling', () => {
    let templateContainer: TestCustomTemplatesComponent;
    let templateContainerFixture: ComponentFixture<TestCustomTemplatesComponent>;

    beforeEach(() => {
      templateContainerFixture = TestBed.createComponent(
        TestCustomTemplatesComponent
      );
      templateContainer = templateContainerFixture.componentInstance;
    });
    it('should not display custom error on items where the loading was successful', fakeAsync(() => {
      const items = [
        { src: 'src1', _failed: true },
        { src: 'src2' },
      ] as GalleryItemInternal[];
      component.items = items;
      component.errorTemplate = templateContainer.errorTemplate;

      const changes = {
        items: new SimpleChange(null, items, true),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();
      tick();

      const itemEls = de.queryAll(By.css('li'));
      const customErrors = de.queryAll(By.css('li .custom-error'));

      expect(customErrors.length).toBe(1);
      expect(itemEls[0].query(By.css('.custom-error'))).toBeTruthy();
      expect(itemEls[1].query(By.css('.custom-error'))).toBeFalsy();
    }));
  });

  describe('custom', () => {
    let templateContainer: TestCustomTemplatesComponent;
    let templateContainerFixture: ComponentFixture<TestCustomTemplatesComponent>;

    beforeEach(() => {
      templateContainerFixture = TestBed.createComponent(
        TestCustomTemplatesComponent
      );
      templateContainer = templateContainerFixture.componentInstance;
    });

    describe('item template', () => {
      it('should display item content', fakeAsync(() => {
        const items = [{ src: 'src1' }] as GalleryItemInternal[];

        component.items = items;
        component.itemTemplate = templateContainer.itemTemplate;

        const changes = {
          items: new SimpleChange(null, items, true),
        };
        component.ngOnChanges(changes);
        fixture.detectChanges();
        tick();

        const itemEls = de.queryAll(By.css('li'));

        expect(itemEls.length).toBe(1);
        expect(itemEls[0].query(By.css('.custom-item'))).toBeTruthy();
      }));
    });
  });

  describe('descriptions', () => {
    beforeEach(() => {
      component.descriptions = true;
    });

    it(`shouldn't give description class above-counter when counter position set, but counter is disabled`, () => {
      component.counterOrientation = 'bottom';
      component.counter = false;
      component.items = [new GalleryImage('src1', null, null, 'description1')];
      const changes = {
        items: new SimpleChange(null, component.items, true),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      const descContainer = de.query(By.css('.doe-viewer-description'));
      expect(
        descContainer.classes['doe-viewer-description--above-counter']
      ).toBeFalsy();
    });
  });

  describe('selection', () => {
    beforeEach(() => {
      component.touched = true;
      component.items = [
        new GalleryImage('src1'),
        new GalleryImage('src2'),
        new GalleryImage('src3'),
        new GalleryImage('src4'),
      ];
      component.loading = 'lazy';
      component.selectedIndex = 2;
    });

    it('should select the first item if requested selection is < 0', fakeAsync(() => {
      spyOn(component, 'shift' as any);
      spyOn(component, 'center' as any);
      fixture.detectChanges();

      component.select(-2);

      flush();

      expect(component.selectedIndex).toBe(0);
    }));

    it('should select the last item if requested selection is >= items length', fakeAsync(() => {
      spyOn(component, 'shift' as any);
      spyOn(component, 'center' as any);
      fixture.detectChanges();

      component.select(10);

      flush();

      expect(component.selectedIndex).toBe(3);
    }));

    describe('with video items', () => {
      beforeEach(fakeAsync(() => {
        component.items[2] = new GalleryVideo('video-src1');
        component.loading = 'auto';
        component.ngOnChanges({
          thumbsOrientationt: new SimpleChange(
            null,
            OrientationFlag.BOTTOM,
            true
          ),
          items: new SimpleChange(null, component.items, true),
        });
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
      }));

      it('should stop video if the last selected item was an video element', () => {
        const videoEl = component.itemsRef
          .toArray()[2]
          .nativeElement.querySelector('video');

        const videoPauseSpy = spyOn(videoEl, 'pause');

        component.select(3);

        expect(videoPauseSpy).toHaveBeenCalled();
      });
    });

    // TODO test shifts, especially in loop mode
  });
});

@Component({
  template: `
    <ng-template #errorTemplate>
      <div class="custom-error">Error !</div>
    </ng-template>
    <ng-template #itemTemplate>
      <div class="custom-item"></div>
    </ng-template>
  `,
})
export class TestCustomTemplatesComponent {
  @ViewChild('errorTemplate', { static: true }) errorTemplate: TemplateRef<any>;
  @ViewChild('itemTemplate', { static: true }) itemTemplate: TemplateRef<any>;
}
