import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap9n1Component } from './chap9n1.component';

describe('Chap9n1Component', () => {
  let component: Chap9n1Component;
  let fixture: ComponentFixture<Chap9n1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap9n1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap9n1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
