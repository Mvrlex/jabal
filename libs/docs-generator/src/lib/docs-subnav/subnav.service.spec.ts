import { TestBed } from '@angular/core/testing';

import { SubnavService } from './subnav.service';

describe('SubnavService', () => {
  let service: SubnavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubnavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
