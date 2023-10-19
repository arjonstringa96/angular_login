import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurniPersonaliComponent } from './turni-personali.component';

describe('TurniPersonaliComponent', () => {
  let component: TurniPersonaliComponent;
  let fixture: ComponentFixture<TurniPersonaliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurniPersonaliComponent]
    });
    fixture = TestBed.createComponent(TurniPersonaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
