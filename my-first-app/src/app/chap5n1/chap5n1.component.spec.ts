import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap5n1Component } from './chap5n1.component';

describe('Chap5n1Component', () => {
  let component: Chap5n1Component;
  let fixture: ComponentFixture<Chap5n1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap5n1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap5n1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
