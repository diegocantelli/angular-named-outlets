import { TestBed } from '@angular/core/testing';

import { LightSwitchGuard } from './light-switch.guard';

describe('LightSwitchGuard', () => {
  let guard: LightSwitchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LightSwitchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
