import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheOrphelinComponent } from './recherche-orphelin.component';

describe('RechercheOrphelinComponent', () => {
  let component: RechercheOrphelinComponent;
  let fixture: ComponentFixture<RechercheOrphelinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheOrphelinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheOrphelinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
