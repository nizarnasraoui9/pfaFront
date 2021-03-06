import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheVeuveComponent } from './recherche-veuve.component';

describe('RechercheVeuveComponent', () => {
  let component: RechercheVeuveComponent;
  let fixture: ComponentFixture<RechercheVeuveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheVeuveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheVeuveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
