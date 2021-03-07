import { TestBed } from '@angular/core/testing';

import { RechercheDossierService } from './recherche-dossier.service';

describe('RechercheDossierService', () => {
  let service: RechercheDossierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RechercheDossierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
