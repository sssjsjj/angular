import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap6n2Component } from './chap6n2.component';

describe('Chap6n2Component', () => {
  let component: Chap6n2Component;
  let fixture: ComponentFixture<Chap6n2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap6n2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap6n2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
