import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosllComponent } from './servicosll.component';

describe('ServicosllComponent', () => {
  let component: ServicosllComponent;
  let fixture: ComponentFixture<ServicosllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicosllComponent]
    });
    fixture = TestBed.createComponent(ServicosllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
