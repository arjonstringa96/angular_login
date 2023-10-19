import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastRepartiComponent } from './forecast-reparti.component';

describe('ForecastRepartiComponent', () => {
  let component: ForecastRepartiComponent;
  let fixture: ComponentFixture<ForecastRepartiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastRepartiComponent]
    });
    fixture = TestBed.createComponent(ForecastRepartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
