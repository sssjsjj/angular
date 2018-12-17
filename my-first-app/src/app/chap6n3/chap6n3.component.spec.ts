import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap6n3Component } from './chap6n3.component';

describe('Chap6n3Component', () => {
  let component: Chap6n3Component;
  let fixture: ComponentFixture<Chap6n3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap6n3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap6n3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
