import { TestBed } from '@angular/core/testing';

import { PCServService } from './pcserv.service';

describe('PCServService', () => {
  let service: PCServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PCServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
