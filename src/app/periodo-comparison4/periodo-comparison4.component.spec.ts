import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoComparison4Component } from './periodo-comparison4.component';

describe('PeriodoComparison4Component', () => {
  let component: PeriodoComparison4Component;
  let fixture: ComponentFixture<PeriodoComparison4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodoComparison4Component]
    });
    fixture = TestBed.createComponent(PeriodoComparison4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
