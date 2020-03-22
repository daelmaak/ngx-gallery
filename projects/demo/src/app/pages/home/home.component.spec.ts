import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { GalleryDetailService } from 'projects/gallery-detail/src/public-api';
import { GalleryModule } from 'projects/gallery/src/public-api';
import { HomeComponent } from './home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NoopAnimationsModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatRadioModule,
        MatRadioModule,
        GalleryModule
      ],
      declarations: [HomeComponent],
      providers: [
        {
          provide: GalleryDetailService,
          useValue: jasmine.createSpyObj('GalleryDetailService', ['open'])
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
