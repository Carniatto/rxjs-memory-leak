import { TestBed } from '@angular/core/testing';

import { LuckyService } from './lucky.service';

describe('LuckyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LuckyService = TestBed.get(LuckyService);
    expect(service).toBeTruthy();
  });
});
