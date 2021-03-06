import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerserTransactionComponent } from './verser-transaction.component';

describe('VerserTransactionComponent', () => {
  let component: VerserTransactionComponent;
  let fixture: ComponentFixture<VerserTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerserTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerserTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
