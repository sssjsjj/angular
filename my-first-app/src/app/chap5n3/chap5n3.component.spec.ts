import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap5n3Component } from './chap5n3.component';

describe('Chap5n3Component', () => {
  let component: Chap5n3Component;
  let fixture: ComponentFixture<Chap5n3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap5n3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap5n3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
