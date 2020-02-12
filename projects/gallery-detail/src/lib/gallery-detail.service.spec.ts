import { TestBed } from '@angular/core/testing';

import { GalleryDetailService } from './gallery-detail.service';
import { Overlay } from '@angular/cdk/overlay';

describe('GalleryDetailService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Overlay,
          useValue: {}
        }
      ]
    })
  );

  it('should be created', () => {
    const service: GalleryDetailService = TestBed.get(GalleryDetailService);
    expect(service).toBeTruthy();
  });
});
