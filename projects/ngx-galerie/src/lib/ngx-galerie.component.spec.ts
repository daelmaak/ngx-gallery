import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGalerieComponent } from './ngx-galerie.component';

describe('NgxGalerieComponent', () => {
  let component: NgxGalerieComponent;
  let fixture: ComponentFixture<NgxGalerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGalerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
