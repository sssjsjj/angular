import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap6n5Component } from './chap6n5.component';

describe('Chap6n5Component', () => {
  let component: Chap6n5Component;
  let fixture: ComponentFixture<Chap6n5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap6n5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap6n5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
