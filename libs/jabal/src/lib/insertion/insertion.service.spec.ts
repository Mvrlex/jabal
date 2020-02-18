import { TestBed } from '@angular/core/testing';

import { InsertionService } from './insertion.service';

describe('InsertionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertionService = TestBed.get(InsertionService);
    expect(service).toBeTruthy();
  });
});
