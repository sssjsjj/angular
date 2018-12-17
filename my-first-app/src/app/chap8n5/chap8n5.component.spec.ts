import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap8n5Component } from './chap8n5.component';

describe('Chap8n5Component', () => {
  let component: Chap8n5Component;
  let fixture: ComponentFixture<Chap8n5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap8n5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap8n5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
