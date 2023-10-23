import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntiEsperienzaKPIComponent } from './punti-esperienza-kpi.component';

describe('PuntiEsperienzaKPIComponent', () => {
  let component: PuntiEsperienzaKPIComponent;
  let fixture: ComponentFixture<PuntiEsperienzaKPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntiEsperienzaKPIComponent]
    });
    fixture = TestBed.createComponent(PuntiEsperienzaKPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
