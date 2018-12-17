import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap10n12Component } from './chap10n12.component';

describe('Chap10n12Component', () => {
  let component: Chap10n12Component;
  let fixture: ComponentFixture<Chap10n12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap10n12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap10n12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
