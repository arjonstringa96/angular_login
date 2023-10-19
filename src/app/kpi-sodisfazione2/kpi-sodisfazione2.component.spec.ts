import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiSodisfazione2Component } from './kpi-sodisfazione2.component';

describe('KpiSodisfazione2Component', () => {
  let component: KpiSodisfazione2Component;
  let fixture: ComponentFixture<KpiSodisfazione2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiSodisfazione2Component]
    });
    fixture = TestBed.createComponent(KpiSodisfazione2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
