import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoThumbsOrientationComponent } from './demo-thumbs-orientation.component';

describe('DemoThumbsOrientationComponent', () => {
  let component: DemoThumbsOrientationComponent;
  let fixture: ComponentFixture<DemoThumbsOrientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoThumbsOrientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoThumbsOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
