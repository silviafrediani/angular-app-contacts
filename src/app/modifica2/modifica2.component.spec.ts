import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modifica2Component } from './modifica2.component';

describe('Modifica2Component', () => {
  let component: Modifica2Component;
  let fixture: ComponentFixture<Modifica2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modifica2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modifica2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
