import {
  ChangeDetectionStrategy,
  SimpleChange,
  DebugElement,
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImage } from '../../core';
import { ChevronIconComponent } from '../icons/chevron/chevron-icon.component';
import { ThumbnailsComponent } from './thumbnails.component';
import { By } from '@angular/platform-browser';

describe('ThumbnailsComponent', () => {
  let component: ThumbnailsComponent;
  let fixture: ComponentFixture<ThumbnailsComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbnailsComponent, ChevronIconComponent],
    })
      .overrideComponent(ThumbnailsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsComponent);
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

      expect(itemEls[0].classes.selected).toBeFalsy();
      expect(itemEls[1].classes.selected).toBeTruthy();
      expect(itemEls[2].classes.selected).toBeFalsy();
    });
  });
});
