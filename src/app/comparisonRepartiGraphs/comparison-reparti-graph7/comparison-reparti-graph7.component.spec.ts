import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRepartiGraph7Component } from './comparison-reparti-graph7.component';

describe('ComparisonRepartiGraph7Component', () => {
  let component: ComparisonRepartiGraph7Component;
  let fixture: ComponentFixture<ComparisonRepartiGraph7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRepartiGraph7Component]
    });
    fixture = TestBed.createComponent(ComparisonRepartiGraph7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
