import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { NEVER } from 'rxjs';

import { GalleryComponent } from '@ngx-imagery/gallery';

import { GalleryDetailComponent } from './gallery-detail.component';
import { CloseIconComponent } from '../icons/close-icon/close-icon.component';
import { GalleryDetailRef } from '../../gallery-detail-ref';

describe('GalleryDetailComponent', () => {
  let component: GalleryDetailComponent;
  let fixture: ComponentFixture<GalleryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GalleryDetailComponent,
        MockComponent(GalleryComponent),
        CloseIconComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const overlayRefStub = new Proxy(
      {},
      {
        get() {
          return () => NEVER;
        }
      }
    ) as any;

    fixture = TestBed.createComponent(GalleryDetailComponent);
    component = fixture.componentInstance;
    component.config = {};
    component.galleryDetailRef = new GalleryDetailRef(overlayRefStub);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
