import { TestBed, inject } from '@angular/core/testing';

import { VisitorLogService } from './visitor-log.service';

describe('VisitorLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitorLogService]
    });
  });

  it('should be created', inject([VisitorLogService], (service: VisitorLogService) => {
    expect(service).toBeTruthy();
  }));
});
