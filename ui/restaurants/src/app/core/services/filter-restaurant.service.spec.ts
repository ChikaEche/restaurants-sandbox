import { TestBed } from '@angular/core/testing';

import { FilterRestaurantService } from './filter-restaurant.service';

describe('FilterRestaurantService', () => {
  let service: FilterRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
