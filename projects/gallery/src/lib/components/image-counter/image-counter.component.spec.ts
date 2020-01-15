import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCounterComponent } from './image-counter.component';

describe('ImageCounterComponent', () => {
  let component: ImageCounterComponent;
  let fixture: ComponentFixture<ImageCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
