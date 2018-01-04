import { TestBed, inject } from '@angular/core/testing';

import { MassegeService } from './message.service';

describe('MassegeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MassegeService]
    });
  });

  it('should be created', inject([MassegeService], (service: MassegeService) => {
    expect(service).toBeTruthy();
  }));
});
