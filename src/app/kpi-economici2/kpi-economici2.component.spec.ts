import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiEconomici2Component } from './kpi-economici2.component';

describe('KpiEconomici2Component', () => {
  let component: KpiEconomici2Component;
  let fixture: ComponentFixture<KpiEconomici2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiEconomici2Component]
    });
    fixture = TestBed.createComponent(KpiEconomici2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
