import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDonneurComponent } from './ajouter-donneur.component';

describe('AjouterDonneurComponent', () => {
  let component: AjouterDonneurComponent;
  let fixture: ComponentFixture<AjouterDonneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDonneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDonneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
