import { TestBed } from '@angular/core/testing';

import { FootService } from './foot.service';

describe('FootService', () => {
  let service: FootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
