import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscreverstartupComponent } from './inscreverstartup.component';

describe('InscreverstartupComponent', () => {
  let component: InscreverstartupComponent;
  let fixture: ComponentFixture<InscreverstartupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscreverstartupComponent]
    });
    fixture = TestBed.createComponent(InscreverstartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
