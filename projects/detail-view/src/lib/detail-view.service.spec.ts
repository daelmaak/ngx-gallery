import { TestBed } from '@angular/core/testing';

import { DetailViewService } from './detail-view.service';

describe('DetailViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailViewService = TestBed.get(DetailViewService);
    expect(service).toBeTruthy();
  });
});
