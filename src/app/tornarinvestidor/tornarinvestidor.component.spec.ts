import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TornarinvestidorComponent } from './tornarinvestidor.component';

describe('TornarinvestidorComponent', () => {
  let component: TornarinvestidorComponent;
  let fixture: ComponentFixture<TornarinvestidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TornarinvestidorComponent]
    });
    fixture = TestBed.createComponent(TornarinvestidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
