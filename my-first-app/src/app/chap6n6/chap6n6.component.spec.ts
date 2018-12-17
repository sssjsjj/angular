import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap6n6Component } from './chap6n6.component';

describe('Chap6n6Component', () => {
  let component: Chap6n6Component;
  let fixture: ComponentFixture<Chap6n6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap6n6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap6n6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
