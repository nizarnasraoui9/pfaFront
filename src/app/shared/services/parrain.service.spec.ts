import { TestBed } from '@angular/core/testing';

import { ParrainService } from './parrain.service';

describe('ParrainService', () => {
  let service: ParrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
