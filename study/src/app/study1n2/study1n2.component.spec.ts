import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study1n2Component } from './study1n2.component';

describe('Study1n2Component', () => {
  let component: Study1n2Component;
  let fixture: ComponentFixture<Study1n2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study1n2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study1n2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
