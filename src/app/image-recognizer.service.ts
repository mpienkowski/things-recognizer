import { Injectable } from '@angular/core';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { ObjectDetection } from '@tensorflow-models/coco-ssd';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { LoadModelSuccess, ObjectsRecognized, RecognitionError } from './recognizer/recognizer.actions';
import { ViewportService } from './viewport.service';


@Injectable({
  providedIn: 'root'
})
export class ImageRecognizerService {
  private loadModel: Promise<ObjectDetection> = cocoSsd.load();

  constructor(private store: Store<State>,
              private viewportService: ViewportService) {
    this.loadModel = cocoSsd.load()
      .then(model => {
        this.store.dispatch(new LoadModelSuccess());
        return model;
      });
  }

  public recognize() {
    this.loadModel.then((model) => this.detectFrames(this.viewportService.getVideoElement(), model));
  }

  private detectFrames(video, model) {
    requestAnimationFrame(() => {
      model.detect(video)
        .then(predictions => {
          this.store.dispatch(new ObjectsRecognized(predictions));
          this.detectFrames(video, model);
        })
        .catch(e => this.store.dispatch(new RecognitionError(e.message)));
    });
  }
}
