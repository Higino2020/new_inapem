import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcossistemaComponent } from './ecossistema.component';

describe('EcossistemaComponent', () => {
  let component: EcossistemaComponent;
  let fixture: ComponentFixture<EcossistemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcossistemaComponent]
    });
    fixture = TestBed.createComponent(EcossistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
