import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap10n1Component } from './chap10n1.component';

describe('Chap10n1Component', () => {
  let component: Chap10n1Component;
  let fixture: ComponentFixture<Chap10n1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap10n1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap10n1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
