import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap9n1subComponent } from './chap9n1sub.component';

describe('Chap9n1subComponent', () => {
  let component: Chap9n1subComponent;
  let fixture: ComponentFixture<Chap9n1subComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap9n1subComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap9n1subComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
