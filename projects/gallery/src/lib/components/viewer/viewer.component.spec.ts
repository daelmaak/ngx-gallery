import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  SimpleChange,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { GalleryItemInternal } from '../../core/gallery-item';
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
        TestViewerContainerComponent
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

  describe('error handling', () => {
    let testViewerContainer: TestViewerContainerComponent;
    let testViewerFixture: ComponentFixture<TestViewerContainerComponent>;

    beforeEach(() => {
      testViewerFixture = TestBed.createComponent(TestViewerContainerComponent);
      testViewerContainer = testViewerFixture.componentInstance;
    });

    it('should not display custom error on items where the loading was successful', () => {
      testViewerFixture.detectChanges();

      const items = [
        { src: 'src1', _failed: true },
        { src: 'src2' }
      ] as GalleryItemInternal[];
      component.items = items;
      component.errorTemplate = testViewerContainer.errorTemplate;

      const changes = {
        items: new SimpleChange(null, items, true)
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      const itemEls = de.queryAll(By.css('li'));
      const customErrors = de.queryAll(By.css('li .custom-error'));

      expect(customErrors.length).toBe(1);
      expect(itemEls[0].query(By.css('.custom-error'))).toBeTruthy();
      expect(itemEls[1].query(By.css('.custom-error'))).toBeFalsy();
    });
  });
});

@Component({
  selector: 'doe-test-viewer-wrapper',
  template: `
    <ng-template #errorTemplate>
      <div class="custom-error">Error !</div>
    </ng-template>
  `
})
export class TestViewerContainerComponent {
  @ViewChild('errorTemplate', { static: true }) errorTemplate: TemplateRef<any>;
}
