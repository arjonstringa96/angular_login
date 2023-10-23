import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRepartiGraph3Component } from './comparison-reparti-graph3.component';

describe('ComparisonRepartiGraph3Component', () => {
  let component: ComparisonRepartiGraph3Component;
  let fixture: ComponentFixture<ComparisonRepartiGraph3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRepartiGraph3Component]
    });
    fixture = TestBed.createComponent(ComparisonRepartiGraph3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
