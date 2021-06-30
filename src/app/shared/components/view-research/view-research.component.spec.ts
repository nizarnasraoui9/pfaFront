import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResearchComponent } from './view-research.component';

describe('ViewResearchComponent', () => {
  let component: ViewResearchComponent;
  let fixture: ComponentFixture<ViewResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
