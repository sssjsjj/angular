import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap5n4Component } from './chap5n4.component';

describe('Chap5n4Component', () => {
  let component: Chap5n4Component;
  let fixture: ComponentFixture<Chap5n4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap5n4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap5n4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
