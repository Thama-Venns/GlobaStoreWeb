import { TestBed } from '@angular/core/testing';

import { GlobalAPiService } from '../global-api-service';

describe('GlobalAPiServiceService', () => {
  let service: GlobalAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
