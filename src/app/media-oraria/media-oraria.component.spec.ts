import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaOrariaComponent } from './media-oraria.component';

describe('MediaOrariaComponent', () => {
  let component: MediaOrariaComponent;
  let fixture: ComponentFixture<MediaOrariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaOrariaComponent]
    });
    fixture = TestBed.createComponent(MediaOrariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
