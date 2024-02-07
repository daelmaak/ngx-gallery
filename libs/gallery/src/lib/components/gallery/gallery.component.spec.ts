import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import type { StrictComponentRef } from '../../core/ng';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let componentRef: StrictComponentRef<GalleryComponent>;
  let fixture: ComponentFixture<GalleryComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    de = fixture.debugElement;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should handle empty items input in looping mode', () => {
    componentRef.setInput('items', undefined);
    fixture.detectChanges();

    componentRef.setInput('loop', true);
    fixture.detectChanges();

    expect().nothing();
  });

  it('should not reset items when they are already set and different @Input() is changed', () => {
    component.items = [{ src: 'src1' }, { src: 'src2' }];
    fixture.detectChanges();

    const items = component.items;
    componentRef.setInput('thumbs', false);
    fixture.detectChanges();

    expect(component.items).toBe(items);
  });

  describe('emitters', () => {
    beforeEach(fakeAsync(() => {
      component.items = [{ src: 'src1' }, { src: 'src2' }];
      fixture.detectChanges();
      tick();
    }));

    it('should emit event when viewer image clicked', () => {
      const itemClickSpy = spyOn(component.itemClick, 'emit');
      const secondItem = de.queryAll(By.css('viewer ul li'))[1];

      const mockedClick = { name: 'mocked-event' } as any;
      secondItem.triggerEventHandler('click', mockedClick);

      expect(itemClickSpy).toHaveBeenCalled();
      expect(itemClickSpy).toHaveBeenCalledWith({
        item: component.items[1],
        index: 1,
        event: mockedClick,
      });
    });

    it('should emit event when thumbnail clicked', () => {
      const thumbClickSpy = spyOn(component.thumbClick, 'emit');
      const secondThumb = de.queryAll(By.css('thumbs ul li'))[1];

      const mockedClick = { name: 'mocked-event' } as any;
      secondThumb.triggerEventHandler('click', mockedClick);

      expect(thumbClickSpy).toHaveBeenCalled();
      expect(thumbClickSpy).toHaveBeenCalledWith({
        item: component.items[1],
        index: 1,
        event: mockedClick,
      });
    });

    it('should emit event when thumbnail hovered', () => {
      const thumbHoverSpy = spyOn(component.thumbHover, 'emit');
      const secondThumb = de.queryAll(By.css('thumbs ul li'))[1];

      const mockedMouseenter = { name: 'mocked-event' } as any;
      secondThumb.triggerEventHandler('mouseenter', mockedMouseenter);

      expect(thumbHoverSpy).toHaveBeenCalled();
      expect(thumbHoverSpy).toHaveBeenCalledWith({
        item: component.items[1],
        index: 1,
        event: mockedMouseenter,
      });
    });
  });

  describe('class attribute', () => {
    beforeEach(fakeAsync(() => {
      component.items = [{ src: 'src1' }, { src: 'src2' }];
    }));

    it('should have class denoting RTL mode if turned on', () => {
      component.isRtl = true;
      fixture.detectChanges();

      expect(de.classes.rtl).toBeTruthy();
    });

    it('should have no class denoting RTL if turned off', () => {
      fixture.detectChanges();

      expect(de.classes.rtl).toBeFalsy();
    });
  });
});
