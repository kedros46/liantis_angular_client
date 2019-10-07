import { TestBed } from '@angular/core/testing';

import { HorecaService } from './horeca-service.service';

describe('HorecaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorecaService = TestBed.get(HorecaService);
    expect(service).toBeTruthy();
  });
});
