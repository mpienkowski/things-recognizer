import { TestBed } from '@angular/core/testing';

import { FramesRendererService } from './frames-renderer.service';

describe('FramesRendererService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FramesRendererService = TestBed.get(FramesRendererService);
    expect(service).toBeTruthy();
  });
});
