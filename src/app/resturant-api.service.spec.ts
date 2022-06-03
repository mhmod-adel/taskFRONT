import { TestBed } from '@angular/core/testing';

import { ResturantApiService } from './resturant-api.service';

describe('ResturantApiService', () => {
  let service: ResturantApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
