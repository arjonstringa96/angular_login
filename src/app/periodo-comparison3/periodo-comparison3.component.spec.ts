import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoComparison3Component } from './periodo-comparison3.component';

describe('PeriodoComparison3Component', () => {
  let component: PeriodoComparison3Component;
  let fixture: ComponentFixture<PeriodoComparison3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodoComparison3Component]
    });
    fixture = TestBed.createComponent(PeriodoComparison3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
