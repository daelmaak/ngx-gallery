import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  SimpleChange,
  TemplateRef,
  ViewChild,
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

import { GalleryItemInternal, GalleryImage } from '../../core/gallery-item';
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
