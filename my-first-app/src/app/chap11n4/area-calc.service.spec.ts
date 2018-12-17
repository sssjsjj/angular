import { TestBed } from '@angular/core/testing';

import { AreaCalcService } from './area-calc.service';

describe('AreaCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaCalcService = TestBed.get(AreaCalcService);
    expect(service).toBeTruthy();
  });
});
