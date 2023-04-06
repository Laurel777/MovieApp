import { TestBed } from '@angular/core/testing';

import { MovieimageService } from './movieimage.service';

describe('MovieimageService', () => {
  let service: MovieimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
