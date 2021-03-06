import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrainComponent } from './parrain.component';

describe('ParrainComponent', () => {
  let component: ParrainComponent;
  let fixture: ComponentFixture<ParrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
