import { TestBed } from '@angular/core/testing';

import { VeuveService } from './veuve.service';

describe('VeuveService', () => {
  let service: VeuveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeuveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
