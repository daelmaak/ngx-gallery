import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  SimpleChange,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OrientationFlag } from '../../core';
import { GalleryItem, GalleryItemInternal } from '../../core/gallery-item';
import { StrictComponentRef } from '../../core/ng';
import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let componentRef: StrictComponentRef<ViewerComponent>;
  let fixture: ComponentFixture<ViewerComponent>;
  let viewerDe: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
    })
      .overrideComponent(ViewerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    viewerDe = fixture.debugElement;

    component.items = [];
    component.visibleItems = 1;
  });

  describe('initialization', () => {
    it('should create', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should succeed also with empty items', () => {
      componentRef.setInput('items', []);
      fixture.detectChanges();

      expect(component).toBeTruthy();

      expect(viewerDe.query(By.css('.viewer-initial-item'))).toBeTruthy();
    });

    it('should display items even though they have been set later', fakeAsync(() => {
      component.items = [];
      let changes = {
        items: new SimpleChange(null, component.items, true),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      tick(1000);

      component.items = [{ src: 'src1' }, { src: 'src2' }];
      changes = {
        items: new SimpleChange([], component.items, false),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();
      flush();

      expect(
        viewerDe.queryAll(By.css('li:not(.viewer-initial-item)')).length
      ).toBe(2);
    }));

    it('should preselect item based on given index', fakeAsync(() => {
      component.visibleItems = 1;
      component.selectedIndex = 1;
      component.items = [{ src: 'src1' }, { src: 'src2' }];
      const changes = {
        visibleItems: new SimpleChange(undefined, component.visibleItems, true),
        items: new SimpleChange(undefined, component.items, true),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      tick();

      expect(getSlidePx().index).toBe(-1);
    }));

    it('looping should be disabled if there is just 1 item', () => {
      componentRef.setInput('loop', true);
      componentRef.setInput('items', [{ src: 'src1' }]);
      fixture.detectChanges();

      expect(component.reallyLoop).toBe(false);
      expect(component.displayedItems.length).toBe(1);
    });

    it('should enable looping even if the items were set after viewer initialized', () => {
      componentRef.setInput('loop', true);
      fixture.detectChanges();

      componentRef.setInput('items', [
        { src: 'src1' },
        { src: 'src2' },
        { src: 'src3' },
      ]);
      fixture.detectChanges();

      expect(component.reallyLoop).toBe(true);
    });
  });

  describe('class attribute', () => {
    beforeEach(fakeAsync(() => {
      component.selectedIndex = 0;
      component.items = [{ src: 'src1' }, { src: 'src2' }];
      const changes = {
        items: new SimpleChange(null, component.items, true),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();
      tick();
    }));

    it('should have class denoting RTL mode if turned on', () => {
      component.isRtl = true;
      fixture.detectChanges();

      expect(viewerDe.classes.rtl).toBeTruthy();
    });

    it('should have no class denoting RTL if turned off', () => {
      fixture.detectChanges();

      expect(viewerDe.classes.rtl).toBeFalsy();
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

      const itemEls = viewerDe.queryAll(By.css('li'));
      const customErrors = viewerDe.queryAll(By.css('li .custom-error'));

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

        const itemEls = viewerDe.queryAll(By.css('li'));

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
      component.items = [{ src: 'src1', description: 'description1' }];
      const changes = {
        items: new SimpleChange(null, component.items, true),
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      const descContainer = viewerDe.query(By.css('.viewer-description'));
      expect(
        descContainer.classes['viewer-description--above-counter']
      ).toBeFalsy();
    });
  });

  describe('selection', () => {
    beforeEach(() => {
      componentRef.setInput('items', generateGalleryImages(4));
      component.selectedIndex = 2;
    });

    describe('without looping', () => {
      beforeEach(() => {
        spyOn(component, 'shift' as any);
        spyOn(component, 'center' as any);
        fixture.detectChanges();
      });

      it('should select the first item if requested selection is < 0', fakeAsync(() => {
        component.select(-2);
        flush();

        expect(component.selectedIndex).toBe(0);
      }));

      it('should select the last item if requested selection is >= items length', fakeAsync(() => {
        component.select(10);
        flush();

        expect(component.selectedIndex).toBe(3);
      }));
    });

    describe('with looping on', () => {
      beforeEach(() => {
        componentRef.setInput('loop', true);
        fixture.detectChanges();
      });

      it(`should select the first item if requested selection is < 0`, fakeAsync(() => {
        component.select(-1);
        flush();

        expect(component.selectedIndex).toBe(3);
      }));

      it(`should select the second item if requested selection goes 2 items beyond the first one`, fakeAsync(() => {
        component.select(-2);
        flush();

        expect(component.selectedIndex).toBe(2);
      }));

      it('should select the second item if requested selection goes 2 items beyond the last one', fakeAsync(() => {
        component.select(component.items.length + 1);
        flush();

        expect(component.selectedIndex).toBe(1);
      }));
    });

    describe('with video items', () => {
      beforeEach(fakeAsync(() => {
        component.items[2] = { src: 'video-src1', video: true };
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
          .get(2)!
          .nativeElement.querySelector('video');

        const videoPauseSpy = spyOn(videoEl!, 'pause');

        component.select(3);

        expect(videoPauseSpy).toHaveBeenCalled();
      });
    });
  });

  describe('slider', () => {
    const ITEM_WIDTH = 600;

    beforeEach(() => {
      component.mouseGestures = true;
      component.touchGestures = true;
      component.selectedIndex = 0;

      componentRef.setInput('items', generateGalleryImages(3));
      componentRef.setInput('visibleItems', 1);
    });

    describe('in loop mode with 2 (1 on each side) fringe items', () => {
      beforeEach(fakeAsync(() => {
        componentRef.setInput('loop', true);
        fixture.detectChanges();

        viewerDe.nativeElement.style.width = ITEM_WIDTH + 'px';
        tick();
        fixture.detectChanges();
      }));

      describe('with mouse', () => {
        it(`should slide to one third of the rightmost fringe item
            if user slid to 1/3 of the rightmost fringe item (1st item mirror),
            and then center on the genuine 1st item`, fakeAsync(() => {
          const usersShiftDistance = -(ITEM_WIDTH * 2 + ITEM_WIDTH / 3);

          slideByMouse(usersShiftDistance);

          let { index, tweak } = getSlidePx();
          expect(index).toBe(-1);
          expect(tweak).toBe((ITEM_WIDTH / 3) * 2);

          tick(16); // requestAnimationFrame
          flush(); // give time for centering to happen
          ({ index, tweak } = getSlidePx());
          expect(index).toBe(-1);
          expect(tweak).toBe(0);
        }));

        it(`should slide to the 2nd genuine item
            if user slid beyond the rightmost fringe item`, fakeAsync(() => {
          const usersShiftDistance = -(ITEM_WIDTH * 3 + ITEM_WIDTH / 3);

          slideByMouse(usersShiftDistance);

          let { index, tweak } = getSlidePx();
          expect(index).toBe(-1);
          expect(tweak).toBe(-ITEM_WIDTH / 3);

          tick(16); // requestAnimationFrame
          flush(); // give time for centering to happen
          ({ index, tweak } = getSlidePx());
          expect(index).toBe(-2);
          expect(tweak).toBe(0);
        }));
      });

      describe('with touch', () => {
        it(`should slide to one third of the rightmost fringe item
            if user slid to 1/3 of the rightmost fringe item (1st item mirror),
            and then center on the genuine 1st item`, fakeAsync(() => {
          const usersShiftDistance = -(ITEM_WIDTH * 2 + ITEM_WIDTH / 3);

          slideByMouse(usersShiftDistance);

          let { index, tweak } = getSlidePx();
          expect(index).toBe(-1);
          expect(tweak).toBe((ITEM_WIDTH / 3) * 2);

          tick(16); // requestAnimationFrame
          flush(); // give time for centering to happen
          ({ index, tweak } = getSlidePx());
          expect(index).toBe(-1);
          expect(tweak).toBe(0);
        }));

        it(`should slide to the first genuine item
            if user slid completely to the rightmost fringe item`, fakeAsync(() => {
          const usersShiftDistance = -(ITEM_WIDTH * 3);

          slideByTouch(usersShiftDistance);
          tick(16); // requestAnimationFrame
          flush();

          const { index, tweak } = getSlidePx();
          expect(index).toBe(-1);
          expect(tweak).toBe(0);
        }));

        it(`should slide to the 2nd genuine item
            if user slid beyond the rightmost fringe item`, fakeAsync(() => {
          const usersShiftDistance = -(ITEM_WIDTH * 3 + ITEM_WIDTH / 3);

          slideByTouch(usersShiftDistance);

          let { index, tweak } = getSlidePx();
          expect(index).toBe(-1);
          expect(tweak).toBe(-ITEM_WIDTH / 3);

          tick(16); // requestAnimationFrame
          flush(); // give time for centering to happen
          ({ index, tweak } = getSlidePx());
          expect(index).toBe(-2);
          expect(tweak).toBe(0);
        }));
      });
    });

    describe('with looping off', () => {
      beforeEach(fakeAsync(() => {
        component.visibleItems = 1;
        component.loop = false;
        component.ngOnChanges({
          visibleItems: new SimpleChange(
            undefined,
            component.visibleItems,
            true
          ),
          items: new SimpleChange(undefined, component.items, true),
        });
        fixture.detectChanges();
        viewerDe.nativeElement.style.width = ITEM_WIDTH + 'px';

        tick();
        fixture.detectChanges();
      }));

      describe('with mouse', () => {
        it(`should slide to the first item
            if user slid left outside the gallery`, fakeAsync(() => {
          const usersShiftDistance = ITEM_WIDTH / 3;

          slideByMouse(usersShiftDistance);
          tick();

          expect(getSlidePx().index).toBe(0);
        }));

        it(`should slide to the last item
            if user slid right outside the gallery`, fakeAsync(() => {
          const usersShiftDistance = -(ITEM_WIDTH * 2.5);

          slideByMouse(usersShiftDistance);
          tick();

          expect(getSlidePx().index).toBe(-(component.items.length - 1));
        }));

        it(`should slide back to the selected item
            if user shifted the slider just a little bit`, fakeAsync(() => {
          const usersShiftDistance = -(ITEM_WIDTH / 40);

          slideByMouse(usersShiftDistance);
          tick();

          const { index, tweak } = getSlidePx();

          expect(index).toBe(0);
          expect(tweak).toBe(0);
        }));

        it('should slide to next image if it was programatically selected', fakeAsync(() => {
          component.select(1);
          tick();

          expect(getSlidePx().index).toBe(-1);
        }));

        it('should not shift the already selected item if it was selected again', fakeAsync(() => {
          component.select(0);
          tick();

          const { index, tweak } = getSlidePx();

          expect(index).toBe(0);
          expect(tweak).toBe(0);
        }));
      });

      describe('with touch', () => {
        it(`should slide to the first item
            if user slid left outside the gallery`, fakeAsync(() => {
          const usersShiftDistance = ITEM_WIDTH / 3;

          slideByTouch(usersShiftDistance);
          tick();

          expect(getSlidePx().index).toBe(0);
        }));

        it(`should slide to the last item
            if user slid right outside the gallery`, fakeAsync(() => {
          const usersShiftDistance = -(ITEM_WIDTH * 2.5);

          slideByTouch(usersShiftDistance);
          tick();

          expect(getSlidePx().index).toBe(-(component.items.length - 1));
        }));

        it(`should slide back to the selected item
            if user shifted the slider just a little bit`, fakeAsync(() => {
          const usersShiftDistance = -(ITEM_WIDTH / 40);

          slideByTouch(usersShiftDistance);
          tick();

          const { index, tweak } = getSlidePx();

          expect(index).toBe(0);
          expect(tweak).toBe(0);
        }));

        it('should slide to next image if it was programatically selected', fakeAsync(() => {
          component.select(1);
          tick();

          expect(getSlidePx().index).toBe(-1);
        }));

        it('should not shift the already selected item if it was selected again', fakeAsync(() => {
          component.select(0);
          tick();

          const { index, tweak } = getSlidePx();

          expect(index).toBe(0);
          expect(tweak).toBe(0);
        }));
      });
    });

    describe('in right to left mode', () => {
      beforeEach(fakeAsync(() => {
        component.visibleItems = 1;
        component.loop = false;
        component.isRtl = true;
        component.ngOnChanges({
          visibleItems: new SimpleChange(
            undefined,
            component.visibleItems,
            true
          ),
          items: new SimpleChange(null, component.items, true),
        });
        fixture.detectChanges();
        viewerDe.nativeElement.style.width = ITEM_WIDTH + 'px';

        tick();
        fixture.detectChanges();
      }));

      describe('with mouse', () => {
        it('should slide in direction opposite to swipe direction', fakeAsync(() => {
          const usersShiftDistance = ITEM_WIDTH;

          slideByMouse(-usersShiftDistance);
          tick();

          expect(getSlidePx().index).toBe(1);
          expect(component.selectedIndex).toBe(1);
        }));
      });

      describe('with touch', () => {
        it('should slide in direction opposite to swipe direction', fakeAsync(() => {
          slideByTouch(-ITEM_WIDTH);
          tick();

          expect(getSlidePx().index).toBe(1);
          expect(component.selectedIndex).toBe(1);
        }));
      });
    });
  });

  function generateGalleryImages(quantity: number) {
    const items: GalleryItem[] = [];
    for (let i = 1; i <= quantity; i++) {
      items.push({ src: `src${i}` });
    }
    return items;
  }

  function getSlidePx() {
    const { transform } = component.itemListRef.nativeElement.style;

    if (!transform) {
      return {
        index: 0,
        tweak: 0,
      };
    }

    const [, index, tweak] = transform.match(
      /3d\(calc\((-?\d+).*\s(-?\d+)px\)/
    )!;

    return {
      index: +index,
      tweak: +tweak,
    };
  }

  function slideByMouse(distance: number) {
    const hostEl = viewerDe.nativeElement as HTMLElement;

    hostEl.dispatchEvent(
      new MouseEvent('mousedown', { clientX: 0, clientY: 0 })
    );
    document.dispatchEvent(
      new MouseEvent('mousemove', {
        movementX: distance,
        clientX: distance,
      })
    );
    document.dispatchEvent(new MouseEvent('mouseup', { clientX: distance }));
  }

  function slideByTouch(distance: number) {
    const hostEl = viewerDe.nativeElement as HTMLElement;

    hostEl.dispatchEvent(
      new TouchEvent('touchstart', {
        touches: [
          new Touch({
            clientX: 0,
            clientY: 0,
            identifier: Math.random(),
            target: component.itemListRef.nativeElement,
          }),
        ],
      })
    );

    document.dispatchEvent(
      new TouchEvent('touchmove', {
        touches: [
          new Touch({
            clientX: distance,
            clientY: 0,
            identifier: Math.random(),
            target: component.itemListRef.nativeElement,
          }),
        ],
      })
    );

    document.dispatchEvent(new TouchEvent('touchend'));
  }
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
  @ViewChild('errorTemplate', { static: true })
  errorTemplate: TemplateRef<never>;
  @ViewChild('itemTemplate', { static: true }) itemTemplate: TemplateRef<never>;
}
