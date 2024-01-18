import { TestBed } from '@angular/core/testing';

import { FaqServices } from './faq-services.service';

describe('FaqServicesService', () => {
  let service: FaqServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
