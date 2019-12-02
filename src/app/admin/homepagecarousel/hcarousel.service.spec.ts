import { TestBed } from '@angular/core/testing';

import { HcarouselService } from './hcarousel.service';

describe('HcarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HcarouselService = TestBed.get(HcarouselService);
    expect(service).toBeTruthy();
  });
});
