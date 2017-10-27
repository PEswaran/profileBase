import { TestBed, inject } from '@angular/core/testing';

import { TechNewsService } from './tech-news.service';

describe('TechNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechNewsService]
    });
  });

  it('should be created', inject([TechNewsService], (service: TechNewsService) => {
    expect(service).toBeTruthy();
  }));
});
