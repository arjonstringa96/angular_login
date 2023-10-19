import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiEconomici1Component } from './kpi-economici1.component';

describe('KpiEconomici1Component', () => {
  let component: KpiEconomici1Component;
  let fixture: ComponentFixture<KpiEconomici1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiEconomici1Component]
    });
    fixture = TestBed.createComponent(KpiEconomici1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
