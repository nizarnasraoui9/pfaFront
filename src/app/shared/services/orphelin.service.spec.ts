import { TestBed } from '@angular/core/testing';

import { OrphelinService } from './orphelin.service';

describe('OrphelinService', () => {
  let service: OrphelinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrphelinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
