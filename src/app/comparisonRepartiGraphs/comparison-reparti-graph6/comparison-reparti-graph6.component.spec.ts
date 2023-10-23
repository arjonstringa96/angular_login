import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRepartiGraph6Component } from './comparison-reparti-graph6.component';

describe('ComparisonRepartiGraph6Component', () => {
  let component: ComparisonRepartiGraph6Component;
  let fixture: ComponentFixture<ComparisonRepartiGraph6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRepartiGraph6Component]
    });
    fixture = TestBed.createComponent(ComparisonRepartiGraph6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
