import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap5n2Component } from './chap5n2.component';

describe('Chap5n2Component', () => {
  let component: Chap5n2Component;
  let fixture: ComponentFixture<Chap5n2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap5n2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap5n2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
