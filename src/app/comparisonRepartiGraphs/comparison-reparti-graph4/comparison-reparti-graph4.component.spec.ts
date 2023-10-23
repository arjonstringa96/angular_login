import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRepartiGraph4Component } from './comparison-reparti-graph4.component';

describe('ComparisonRepartiGraph4Component', () => {
  let component: ComparisonRepartiGraph4Component;
  let fixture: ComponentFixture<ComparisonRepartiGraph4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRepartiGraph4Component]
    });
    fixture = TestBed.createComponent(ComparisonRepartiGraph4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
