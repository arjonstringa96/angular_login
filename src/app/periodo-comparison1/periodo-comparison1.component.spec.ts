import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoComparison1Component } from './periodo-comparison1.component';

describe('PeriodoComparison1Component', () => {
  let component: PeriodoComparison1Component;
  let fixture: ComponentFixture<PeriodoComparison1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodoComparison1Component]
    });
    fixture = TestBed.createComponent(PeriodoComparison1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
