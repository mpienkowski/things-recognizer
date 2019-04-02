import { TestBed } from '@angular/core/testing';

import { ImageRecognizerService } from './image-recognizer.service';

describe('ImageRecognizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageRecognizerService = TestBed.get(ImageRecognizerService);
    expect(service).toBeTruthy();
  });
});
