import { TestBed } from '@angular/core/testing';

import { OrphelinServiceService } from './orphelin-service.service';

describe('OrphelinServiceService', () => {
  let service: OrphelinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrphelinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
