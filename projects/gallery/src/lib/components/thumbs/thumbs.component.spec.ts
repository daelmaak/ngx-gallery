import {
  ChangeDetectionStrategy,
  SimpleChange,
  DebugElement,
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
});
