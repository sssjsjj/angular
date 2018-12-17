import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap9n4subComponent } from './chap9n4sub.component';

describe('Chap9n4subComponent', () => {
  let component: Chap9n4subComponent;
  let fixture: ComponentFixture<Chap9n4subComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap9n4subComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap9n4subComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
