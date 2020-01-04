import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDetailComponent } from './gallery-detail.component';

describe('GalleryDetailComponent', () => {
  let component: GalleryDetailComponent;
  let fixture: ComponentFixture<GalleryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
