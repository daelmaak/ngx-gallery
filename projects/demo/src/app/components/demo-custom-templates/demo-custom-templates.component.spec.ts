import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCustomTemplatesComponent } from './demo-custom-templates.component';

describe('DemoCustomTemplatesComponent', () => {
  let component: DemoCustomTemplatesComponent;
  let fixture: ComponentFixture<DemoCustomTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCustomTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCustomTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
