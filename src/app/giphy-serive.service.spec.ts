import { TestBed } from '@angular/core/testing';

import { GiphySeriveService } from './giphy-serive.service';

describe('GiphySeriveService', () => {
  let service: GiphySeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphySeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
