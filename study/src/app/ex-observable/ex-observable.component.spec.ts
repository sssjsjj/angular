import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExObservableComponent } from './ex-observable.component';

describe('ExObservableComponent', () => {
  let component: ExObservableComponent;
  let fixture: ComponentFixture<ExObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
