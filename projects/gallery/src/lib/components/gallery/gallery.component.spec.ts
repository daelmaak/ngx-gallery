import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponent, MockPipe } from 'ng-mocks';

import { GalleryImage } from '../../core';
import { SafePipe } from '../../pipes/safe.pipe';
import { CounterComponent } from '../counter/counter.component';
import { ChevronIconComponent } from '../icons/chevron/chevron-icon.component';
import { ThumbsComponent } from '../thumbs/thumbs.component';
import { ViewerComponent } from '../viewer/viewer.component';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [
        GalleryComponent,
        ViewerComponent,
        ThumbsComponent,
        MockComponent(ChevronIconComponent),
        MockComponent(CounterComponent),
        MockPipe(SafePipe),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('emitters', () => {
    beforeEach(() => {
      component.items = [new GalleryImage('src1'), new GalleryImage('src2')];
      fixture.detectChanges();
    });

    it('should emit event when viewer image clicked', () => {
      const imageClickSpy = spyOn(component.imageClick, 'emit');
      const secondItem = de.queryAll(By.css('doe-viewer ul li'))[1];

      const mockedClick = { name: 'mocked-event' };
      secondItem.triggerEventHandler('click', mockedClick);

      expect(imageClickSpy).toHaveBeenCalled();
      expect(imageClickSpy).toHaveBeenCalledWith({
        item: component.items[1],
        index: 1,
        event: mockedClick,
      });
    });

    it('should emit event when thumbnail clicked', () => {
      const thumbClickSpy = spyOn(component.thumbClick, 'emit');
      const secondThumb = de.queryAll(By.css('doe-thumbs ul li'))[1];

      const mockedClick = { name: 'mocked-event' };
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
      const secondThumb = de.queryAll(By.css('doe-thumbs ul li'))[1];

      const mockedMouseenter = { name: 'mocked-event' };
      secondThumb.triggerEventHandler('mouseenter', mockedMouseenter);

      expect(thumbHoverSpy).toHaveBeenCalled();
      expect(thumbHoverSpy).toHaveBeenCalledWith({
        item: component.items[1],
        index: 1,
        event: mockedMouseenter,
      });
    });
  });
});
