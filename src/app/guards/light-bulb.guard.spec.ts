import { TestBed } from '@angular/core/testing';

import { LightBulbGuard } from './light-bulb.guard';

describe('LightBulbGuard', () => {
  let guard: LightBulbGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LightBulbGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
