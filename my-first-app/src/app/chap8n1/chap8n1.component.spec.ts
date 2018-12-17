import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap8n1Component } from './chap8n1.component';

describe('Chap8n1Component', () => {
  let component: Chap8n1Component;
  let fixture: ComponentFixture<Chap8n1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap8n1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap8n1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
