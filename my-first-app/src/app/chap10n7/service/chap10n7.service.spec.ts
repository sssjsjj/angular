import { TestBed } from '@angular/core/testing';

import { Chap10n7Service } from './chap10n7.service';

describe('Chap10n7Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Chap10n7Service = TestBed.get(Chap10n7Service);
    expect(service).toBeTruthy();
  });
});
