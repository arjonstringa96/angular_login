import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiProvaComponent } from './kpi-prova.component';

describe('KpiProvaComponent', () => {
  let component: KpiProvaComponent;
  let fixture: ComponentFixture<KpiProvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiProvaComponent]
    });
    fixture = TestBed.createComponent(KpiProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
