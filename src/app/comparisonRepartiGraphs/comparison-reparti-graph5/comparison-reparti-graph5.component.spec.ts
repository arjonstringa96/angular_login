import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRepartiGraph5Component } from './comparison-reparti-graph5.component';

describe('ComparisonRepartiGraph5Component', () => {
  let component: ComparisonRepartiGraph5Component;
  let fixture: ComponentFixture<ComparisonRepartiGraph5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRepartiGraph5Component]
    });
    fixture = TestBed.createComponent(ComparisonRepartiGraph5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
