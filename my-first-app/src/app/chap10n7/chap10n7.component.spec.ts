import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap10n7Component } from './chap10n7.component';

describe('Chap10n7Component', () => {
  let component: Chap10n7Component;
  let fixture: ComponentFixture<Chap10n7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap10n7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap10n7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
