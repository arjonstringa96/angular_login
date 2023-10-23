import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRepartiGraph2Component } from './comparison-reparti-graph2.component';

describe('ComparisonRepartiGraph2Component', () => {
  let component: ComparisonRepartiGraph2Component;
  let fixture: ComponentFixture<ComparisonRepartiGraph2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRepartiGraph2Component]
    });
    fixture = TestBed.createComponent(ComparisonRepartiGraph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
