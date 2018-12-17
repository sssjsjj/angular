import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap6n4Component } from './chap6n4.component';

describe('Chap6n4Component', () => {
  let component: Chap6n4Component;
  let fixture: ComponentFixture<Chap6n4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap6n4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap6n4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
