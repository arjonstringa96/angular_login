import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntiEsperienzaComparison1Component } from './punti-esperienza-comparison1.component';

describe('PuntiEsperienzaComparison1Component', () => {
  let component: PuntiEsperienzaComparison1Component;
  let fixture: ComponentFixture<PuntiEsperienzaComparison1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntiEsperienzaComparison1Component]
    });
    fixture = TestBed.createComponent(PuntiEsperienzaComparison1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
