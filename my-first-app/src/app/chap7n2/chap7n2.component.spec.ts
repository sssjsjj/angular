import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap7n2Component } from './chap7n2.component';

describe('Chap7n2Component', () => {
  let component: Chap7n2Component;
  let fixture: ComponentFixture<Chap7n2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap7n2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap7n2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
