import { TestBed } from '@angular/core/testing';

import { VideoService } from './video.service';
import { HttpClientModule } from '@angular/common/http';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
