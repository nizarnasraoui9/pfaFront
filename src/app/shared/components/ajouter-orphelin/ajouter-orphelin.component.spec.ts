import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOrphelinComponent } from './ajouter-orphelin.component';

describe('AjouterOrphelinComponent', () => {
  let component: AjouterOrphelinComponent;
  let fixture: ComponentFixture<AjouterOrphelinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterOrphelinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterOrphelinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
