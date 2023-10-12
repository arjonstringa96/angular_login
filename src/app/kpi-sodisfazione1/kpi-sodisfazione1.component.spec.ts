import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiSodisfazione1Component } from './kpi-sodisfazione1.component';

describe('KpiSodisfazione1Component', () => {
  let component: KpiSodisfazione1Component;
  let fixture: ComponentFixture<KpiSodisfazione1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiSodisfazione1Component]
    });
    fixture = TestBed.createComponent(KpiSodisfazione1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
