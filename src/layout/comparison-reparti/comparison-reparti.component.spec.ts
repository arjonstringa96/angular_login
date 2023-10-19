import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRepartiComponent } from './comparison-reparti.component';

describe('ComparisonRepartiComponent', () => {
  let component: ComparisonRepartiComponent;
  let fixture: ComponentFixture<ComparisonRepartiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRepartiComponent]
    });
    fixture = TestBed.createComponent(ComparisonRepartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
