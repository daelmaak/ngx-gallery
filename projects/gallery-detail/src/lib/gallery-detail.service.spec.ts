import { TestBed } from '@angular/core/testing';

import { GalleryDetailService } from './gallery-detail.service';

describe('GalleryDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleryDetailService = TestBed.get(GalleryDetailService);
    expect(service).toBeTruthy();
  });
});
