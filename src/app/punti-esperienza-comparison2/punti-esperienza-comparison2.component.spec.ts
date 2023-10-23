import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntiEsperienzaComparison2Component } from './punti-esperienza-comparison2.component';

describe('PuntiEsperienzaComparison2Component', () => {
  let component: PuntiEsperienzaComparison2Component;
  let fixture: ComponentFixture<PuntiEsperienzaComparison2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntiEsperienzaComparison2Component]
    });
    fixture = TestBed.createComponent(PuntiEsperienzaComparison2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
