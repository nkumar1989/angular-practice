import { TestBed } from '@angular/core/testing';

import { HomeLoanOfferService } from './home-loan-offer.service';

describe('HomeLoanOfferService', () => {
  let service: HomeLoanOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeLoanOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
