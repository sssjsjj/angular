import { TestBed } from '@angular/core/testing';

import { Chap10n72Service } from './chap10n7-2.service';

describe('Chap10n72Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Chap10n72Service = TestBed.get(Chap10n72Service);
    expect(service).toBeTruthy();
  });
});
