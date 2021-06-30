import { TestBed } from '@angular/core/testing';

import { VeuveServiceService } from './veuve-service.service';

describe('VeuveServiceService', () => {
  let service: VeuveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeuveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
