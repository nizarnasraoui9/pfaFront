import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVeuveComponent } from './ajouter-veuve.component';

describe('AjouterVeuveComponent', () => {
  let component: AjouterVeuveComponent;
  let fixture: ComponentFixture<AjouterVeuveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterVeuveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVeuveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
