import {
  ChangeDetectionStrategy,
  DebugElement,
  SimpleChange,
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
import { GalleryImage } from '../../core';
import { ChevronIconComponent } from '../icons/chevron/chevron-icon.component';
import { ThumbsComponent } from './thumbs.component';

describe('ThumbnailsComponent', () => {
  let component: ThumbsComponent;
  let fixture: ComponentFixture<ThumbsComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbsComponent, ChevronIconComponent],
    })
      .overrideComponent(ThumbsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('selecting', () => {
    beforeEach(() => {
      const items = [
        new GalleryImage('src1'),
        new GalleryImage('src2'),
        new GalleryImage('src3'),
      ];
      component.items = items;
      component.ngOnChanges({ items: new SimpleChange(null, items, true) });
    });

    it('calling select() should give newly selected thumb .selected class', () => {
      fixture.detectChanges();

      component.select(1);
      fixture.detectChanges();

      const itemEls = de.queryAll(By.css('li'));

      expect(itemEls[0].classes['doe-thumbs-item--selected']).toBeFalsy();
      expect(itemEls[1].classes['doe-thumbs-item--selected']).toBeTruthy();
      expect(itemEls[2].classes['doe-thumbs-item--selected']).toBeFalsy();
    });
  });

  describe('horizontal sliding', () => {
    const ITEM_WIDTH = 300;

    beforeEach(() => {
      const items = [
        new GalleryImage('src1'),
        new GalleryImage('src2'),
        new GalleryImage('src3'),
      ];
      component.items = items;
      component.orientation = 'bottom';

      fixture.detectChanges();
      setThumbsContainerWidth(2 * ITEM_WIDTH);
      setThumbItemsWidth(ITEM_WIDTH);
    });

    describe('with arrows', () => {
      beforeEach(fakeAsync(() => {
        component.arrows = true;

        component.ngOnChanges({
          items: new SimpleChange(null, component.items, true),
          arrows: new SimpleChange(null, component.arrows, true),
        });
        flush();
      }));

      it('should be initialized at the beginning of the slider', () => {
        expect(getSliderShift()).toBe(0);
      });

      it('should slide to next items if "next items arrow" clicked', done => {
        waitForArrows(done, arrows => {
          arrows[0].nativeElement.click();

          expect(getSliderShift()).not.toBe(0);
        });
      });

      it('should slide to the first items if "previous items arrow" clicked', done => {
        component.slide(1);

        waitForArrows(done, arrows => {
          arrows[0].nativeElement.click();

          expect(getSliderShift()).toBe(0);
        });
      });
    });

    describe('with autoscroll', () => {
      beforeEach(fakeAsync(() => {
        component.autoScroll = true;
        component.ngOnChanges({
          items: new SimpleChange(null, component.items, true),
          autoScroll: new SimpleChange(null, component.autoScroll, true),
        });
        flush();
      }));

      it(`should slide to the last item it it was selected
          although not visible in scrollport`, fakeAsync(() => {
        component.select(2);
        tick();

        expect(getSliderShift()).toBe(ITEM_WIDTH);
      }));

      it(`should slide to the last item it it was selected
          although only partially visible in scrollport`, fakeAsync(() => {
        component.thumbListRef.nativeElement.scrollLeft = ITEM_WIDTH / 2;
        tick();

        component.select(2);
        tick();

        expect(getSliderShift()).toBe(ITEM_WIDTH);
      }));

      it(`should slide to the first item it it was selected
          although not visible in scrollport`, fakeAsync(() => {
        component.thumbListRef.nativeElement.scrollLeft = ITEM_WIDTH;
        tick();

        component.select(0);
        tick();

        expect(getSliderShift()).toBe(0);
      }));

      it(`should slide to the first item it it was selected
          although only partially visible in scrollport`, fakeAsync(() => {
        component.thumbListRef.nativeElement.scrollLeft = ITEM_WIDTH / 2;
        tick();

        component.select(0);
        tick();

        expect(getSliderShift()).toBe(0);
      }));
    });

    function getSliderShift() {
      return component.thumbListRef.nativeElement.scrollLeft;
    }
  });

  describe('arrows', () => {
    const ITEM_WIDTH = 300;

    beforeEach(fakeAsync(() => {
      const items = [
        new GalleryImage('src1'),
        new GalleryImage('src2'),
        new GalleryImage('src3'),
      ];
      component.arrows = true;
      component.orientation = 'bottom';
      component.items = items;
      component.ngOnChanges({
        items: new SimpleChange(null, items, true),
        arrows: new SimpleChange(null, component.arrows, true),
        orientation: new SimpleChange(null, component.orientation, true),
      });
      fixture.detectChanges();
      setThumbsContainerWidth(2 * ITEM_WIDTH);
      setThumbItemsWidth(ITEM_WIDTH);

      flush();
    }));

    it('should disappear once they are turned off', done => {
      waitForArrows(done, _ => {
        toggleArrows(false);

        const arrows = de.queryAll(By.css('doe-chevron-icon'));
        expect(arrows.length).toBe(0);
      });
    });

    it('should re-appear once they are turned on again', done => {
      component.thumbListRef.nativeElement.scrollLeft = ITEM_WIDTH / 2;

      toggleArrows(false);

      toggleArrows(true);

      waitForArrows(done, _ => {
        const arrows = de.queryAll(By.css('doe-chevron-icon'));
        expect(arrows.length).toBe(2);
      });
    });

    function toggleArrows(enabled: boolean) {
      component.arrows = enabled;
      component.ngOnChanges({
        arrows: new SimpleChange(null, component.arrows, false),
      });
      fixture.detectChanges();
    }
  });

  describe('loading', () => {
    beforeEach(() => {
      const items = [
        new GalleryImage('src1'),
        new GalleryImage('src2'),
        new GalleryImage('src3'),
      ];
      component.items = items;
      component.ngOnChanges({ items: new SimpleChange(null, items, true) });
    });

    it(`shouldn't load main image`, () => {
      fixture.detectChanges();

      const emptyImages = de.queryAll(By.css('li img[src=""]'));

      expect(emptyImages.length).toBe(3);
    });
  });

  function setThumbsContainerWidth(width: number) {
    const thumbsEl = de.nativeElement as HTMLElement;
    thumbsEl.style.width = width + 'px';
  }

  function setThumbItemsWidth(width: number) {
    component.thumbsRef.toArray().forEach(thumbEl => {
      thumbEl.nativeElement.style.width = width + 'px';
    });
  }

  function waitForArrows(done: DoneFn, cb: (arrows: DebugElement[]) => void) {
    let arrows: DebugElement[];

    const arrowWaiter = setInterval(() => {
      arrows = de.queryAll(By.css('doe-chevron-icon'));

      if (arrows.length) {
        clearInterval(arrowWaiter);

        cb(arrows);

        done();
      }
    }, 10);
  }
});
