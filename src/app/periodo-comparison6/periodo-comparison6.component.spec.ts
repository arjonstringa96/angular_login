import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoComparison6Component } from './periodo-comparison6.component';

describe('PeriodoComparison6Component', () => {
  let component: PeriodoComparison6Component;
  let fixture: ComponentFixture<PeriodoComparison6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodoComparison6Component]
    });
    fixture = TestBed.createComponent(PeriodoComparison6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
