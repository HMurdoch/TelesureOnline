import { TestBed } from '@angular/core/testing';

import { WordsByNameService } from './words-by-name.service';

describe('WordsByNameService', () => {
  let service: WordsByNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordsByNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
