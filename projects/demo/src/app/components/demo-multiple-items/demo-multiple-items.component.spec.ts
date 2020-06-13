import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMultipleItemsComponent } from './demo-multiple-items.component';

describe('DemoMultipleItemsComponent', () => {
  let component: DemoMultipleItemsComponent;
  let fixture: ComponentFixture<DemoMultipleItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMultipleItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMultipleItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
