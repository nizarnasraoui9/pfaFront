import { TestBed } from '@angular/core/testing';

import { ParrainServiceService } from './parrain-service.service';

describe('ParrainServiceService', () => {
  let service: ParrainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParrainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
