import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrontoIngressiComponent } from './confronto-ingressi.component';

describe('ConfrontoIngressiComponent', () => {
  let component: ConfrontoIngressiComponent;
  let fixture: ComponentFixture<ConfrontoIngressiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfrontoIngressiComponent]
    });
    fixture = TestBed.createComponent(ConfrontoIngressiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
