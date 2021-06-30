import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDossierComponent } from './ajouter-dossier.component';

describe('AjouterDossierComponent', () => {
  let component: AjouterDossierComponent;
  let fixture: ComponentFixture<AjouterDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
