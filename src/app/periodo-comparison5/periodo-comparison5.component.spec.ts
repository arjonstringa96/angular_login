import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoComparison5Component } from './periodo-comparison5.component';

describe('PeriodoComparison5Component', () => {
  let component: PeriodoComparison5Component;
  let fixture: ComponentFixture<PeriodoComparison5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodoComparison5Component]
    });
    fixture = TestBed.createComponent(PeriodoComparison5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
