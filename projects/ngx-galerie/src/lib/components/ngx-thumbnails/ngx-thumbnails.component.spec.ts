import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxThumbnailsComponent } from './ngx-thumbnails.component';

describe('NgxThumbnailsComponent', () => {
  let component: NgxThumbnailsComponent;
  let fixture: ComponentFixture<NgxThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
