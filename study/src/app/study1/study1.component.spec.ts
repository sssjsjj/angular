import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study1Component } from './study1.component';

describe('Study1Component', () => {
  let component: Study1Component;
  let fixture: ComponentFixture<Study1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
