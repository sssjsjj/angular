import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap6n1Component } from './chap6n1.component';

describe('Chap6n1Component', () => {
  let component: Chap6n1Component;
  let fixture: ComponentFixture<Chap6n1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap6n1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap6n1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
