import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoComparison2Component } from './periodo-comparison2.component';

describe('PeriodoComparison2Component', () => {
  let component: PeriodoComparison2Component;
  let fixture: ComponentFixture<PeriodoComparison2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodoComparison2Component]
    });
    fixture = TestBed.createComponent(PeriodoComparison2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
