import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapt8n5subComponent } from './chapt8n5sub.component';

describe('Chapt8n5subComponent', () => {
  let component: Chapt8n5subComponent;
  let fixture: ComponentFixture<Chapt8n5subComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapt8n5subComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapt8n5subComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
