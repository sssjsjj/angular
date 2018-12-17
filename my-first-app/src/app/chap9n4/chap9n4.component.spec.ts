import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap9n4Component } from './chap9n4.component';

describe('Chap9n4Component', () => {
  let component: Chap9n4Component;
  let fixture: ComponentFixture<Chap9n4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap9n4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap9n4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
