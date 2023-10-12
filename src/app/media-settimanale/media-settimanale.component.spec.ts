import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSettimanaleComponent } from './media-settimanale.component';

describe('MediaSettimanaleComponent', () => {
  let component: MediaSettimanaleComponent;
  let fixture: ComponentFixture<MediaSettimanaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaSettimanaleComponent]
    });
    fixture = TestBed.createComponent(MediaSettimanaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
