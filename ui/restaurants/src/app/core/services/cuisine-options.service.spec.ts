import { TestBed } from '@angular/core/testing';

import { CuisineOptionsService } from './cuisine-options.service';

describe('CuisineOptionsService', () => {
  let service: CuisineOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuisineOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
