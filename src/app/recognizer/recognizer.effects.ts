import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { InitializeCameraFail, InitializeCameraSuccess, ObjectsRecognized, RecognizerActionTypes } from './recognizer.actions';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { debounceTime, map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { CameraService } from '../camera.service';
import { of } from 'rxjs/internal/observable/of';
import { FramesRendererService } from '../frames-renderer.service';
import { tap } from 'rxjs/internal/operators/tap';
import { ImageRecognizerService } from '../image-recognizer.service';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { ViewportService } from '../viewport.service';
import { merge } from 'rxjs/internal/observable/merge';


@Injectable()
export class RecognizerEffects {

  @Effect()
  initializeCamera$ = this.actions$
    .pipe(
      ofType(RecognizerActionTypes.InitializeCamera),
      mergeMap(() => this.cameraService.initialize()
        .pipe(
          map(() => new InitializeCameraSuccess()),
          catchError(e => of(new InitializeCameraFail(e)))
        ))
    );

  @Effect({dispatch: false})
  renderFrames$ = this.actions$
    .pipe(
      ofType(RecognizerActionTypes.ObjectsRecognized),
      tap(({payload}: ObjectsRecognized) => this.framesRendererService.render(payload))
    );


  @Effect({dispatch: false})
  windowResize$ = merge(
    fromEvent(window, 'resize').pipe(debounceTime(350)),
  )
    .pipe(tap(() => this.viewportMaximizerService.maximize()));

  @Effect({dispatch: false})
  startRecognition$ = this.actions$
    .pipe(
      ofType(RecognizerActionTypes.StartRecognition),
      tap(() => this.viewportMaximizerService.maximize()),
      tap(() => this.imageRecognizerService.recognize())
    );

  constructor(private actions$: Actions,
              private cameraService: CameraService,
              private framesRendererService: FramesRendererService,
              private imageRecognizerService: ImageRecognizerService,
              private viewportMaximizerService: ViewportService
  ) {
  }


}
