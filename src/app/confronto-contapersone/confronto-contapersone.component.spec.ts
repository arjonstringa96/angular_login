import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrontoContapersoneComponent } from './confronto-contapersone.component';

describe('ConfrontoContapersoneComponent', () => {
  let component: ConfrontoContapersoneComponent;
  let fixture: ComponentFixture<ConfrontoContapersoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfrontoContapersoneComponent]
    });
    fixture = TestBed.createComponent(ConfrontoContapersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
