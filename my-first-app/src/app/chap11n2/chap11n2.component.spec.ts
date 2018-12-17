import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap11n2Component } from './chap11n2.component';

describe('Chap11n2Component', () => {
  let component: Chap11n2Component;
  let fixture: ComponentFixture<Chap11n2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap11n2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap11n2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
