import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap7n1Component } from './chap7n1.component';

describe('Chap7n1Component', () => {
  let component: Chap7n1Component;
  let fixture: ComponentFixture<Chap7n1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap7n1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap7n1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
