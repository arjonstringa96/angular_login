import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrontoMonteOreComponent } from './confronto-monte-ore.component';

describe('ConfrontoMonteOreComponent', () => {
  let component: ConfrontoMonteOreComponent;
  let fixture: ComponentFixture<ConfrontoMonteOreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfrontoMonteOreComponent]
    });
    fixture = TestBed.createComponent(ConfrontoMonteOreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
