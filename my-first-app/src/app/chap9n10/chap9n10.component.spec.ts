import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap9n10Component } from './chap9n10.component';

describe('Chap9n10Component', () => {
  let component: Chap9n10Component;
  let fixture: ComponentFixture<Chap9n10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap9n10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap9n10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
