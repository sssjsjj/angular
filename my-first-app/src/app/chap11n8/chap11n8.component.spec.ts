import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap11n8Component } from './chap11n8.component';

describe('Chap11n8Component', () => {
  let component: Chap11n8Component;
  let fixture: ComponentFixture<Chap11n8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap11n8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap11n8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
