import { TestBed, inject } from '@angular/core/testing';

import { RoadtripStopService } from './roadtrip-stop.service';

describe('RoadtripStopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoadtripStopService]
    });
  });

  it('should be created', inject([RoadtripStopService], (service: RoadtripStopService) => {
    expect(service).toBeTruthy();
  }));
});
