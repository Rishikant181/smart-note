import { TestBed } from '@angular/core/testing';

import { GlobalDataService } from './data-store.service';

describe('GlobalDataService', () => {
  let service: GlobalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
