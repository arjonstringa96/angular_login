import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRepartiGraph9Component } from './comparison-reparti-graph9.component';

describe('ComparisonRepartiGraph9Component', () => {
  let component: ComparisonRepartiGraph9Component;
  let fixture: ComponentFixture<ComparisonRepartiGraph9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRepartiGraph9Component]
    });
    fixture = TestBed.createComponent(ComparisonRepartiGraph9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
