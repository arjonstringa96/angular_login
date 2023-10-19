import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaperkpiComponent } from './provaperkpi.component';

describe('ProvaperkpiComponent', () => {
  let component: ProvaperkpiComponent;
  let fixture: ComponentFixture<ProvaperkpiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvaperkpiComponent]
    });
    fixture = TestBed.createComponent(ProvaperkpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
