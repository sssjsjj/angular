import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap11n4Component } from './chap11n4.component';

describe('Chap11n4Component', () => {
  let component: Chap11n4Component;
  let fixture: ComponentFixture<Chap11n4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap11n4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap11n4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
