import { TestBed } from '@angular/core/testing';

import { NgxGalerieService } from './ngx-galerie.service';

describe('NgxGalerieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxGalerieService = TestBed.get(NgxGalerieService);
    expect(service).toBeTruthy();
  });
});
