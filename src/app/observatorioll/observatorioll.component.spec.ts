import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservatoriollComponent } from './observatorioll.component';

describe('ObservatoriollComponent', () => {
  let component: ObservatoriollComponent;
  let fixture: ComponentFixture<ObservatoriollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservatoriollComponent]
    });
    fixture = TestBed.createComponent(ObservatoriollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
