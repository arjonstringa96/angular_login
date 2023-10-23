import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRepartiGraph1Component } from './comparison-reparti-graph1.component';

describe('ComparisonRepartiGraph1Component', () => {
  let component: ComparisonRepartiGraph1Component;
  let fixture: ComponentFixture<ComparisonRepartiGraph1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRepartiGraph1Component]
    });
    fixture = TestBed.createComponent(ComparisonRepartiGraph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
