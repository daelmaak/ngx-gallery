import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsComponent } from './thumbnails.component';
import { ChevronIconComponent } from '../icons/chevron/chevron-icon.component';

describe('ThumbnailsComponent', () => {
  let component: ThumbnailsComponent;
  let fixture: ComponentFixture<ThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbnailsComponent, ChevronIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
