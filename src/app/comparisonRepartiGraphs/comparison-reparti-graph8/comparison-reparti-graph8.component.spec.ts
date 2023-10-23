import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRepartiGraph8Component } from './comparison-reparti-graph8.component';

describe('ComparisonRepartiGraph8Component', () => {
  let component: ComparisonRepartiGraph8Component;
  let fixture: ComponentFixture<ComparisonRepartiGraph8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRepartiGraph8Component]
    });
    fixture = TestBed.createComponent(ComparisonRepartiGraph8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
