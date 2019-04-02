import { Action } from '@ngrx/store';
import { DetectedObject } from '@tensorflow-models/coco-ssd';

export enum RecognizerActionTypes {
  LoadRecognizers = '[Recognizer] Load Recognizers',
  LoadModelSuccess = '[Recognizer] Load Model Success',
  InitializeCamera = '[Recognizer] Initialize Camera',
  InitializeCameraSuccess = '[Recognizer] Initialize Camera Success',
  InitializeCameraFail = '[Recognizer] Initialize Camera Fail',
  RecognitionError = '[Recognizer] Recognition Error',
  ObjectsRecognized = '[Recognizer] Objects Recognized',
  StartRecognition = '[Recognizer] Start Recognition',
}

export class LoadRecognizers implements Action {
  readonly type = RecognizerActionTypes.LoadRecognizers;
}

export class LoadModelSuccess implements Action {
  readonly type = RecognizerActionTypes.LoadModelSuccess;
}

export class InitializeCamera implements Action {
  readonly type = RecognizerActionTypes.InitializeCamera;
}

export class InitializeCameraSuccess implements Action {
  readonly type = RecognizerActionTypes.InitializeCameraSuccess;
}

export class InitializeCameraFail implements Action {
  readonly type = RecognizerActionTypes.InitializeCameraFail;

  constructor(public payload: string) {
  }
}

export class RecognitionError implements Action {
  readonly type = RecognizerActionTypes.RecognitionError;

  constructor(public payload: string) {
  }
}

export class ObjectsRecognized implements Action {
  readonly type = RecognizerActionTypes.ObjectsRecognized;

  constructor(public payload: DetectedObject[]) {
  }
}

export class StartRecognition implements Action {
  readonly type = RecognizerActionTypes.StartRecognition;
}


export type RecognizerActions = LoadRecognizers
  | InitializeCamera
  | InitializeCameraSuccess
  | InitializeCameraFail
  | RecognitionError
  | ObjectsRecognized
  | StartRecognition
  | LoadModelSuccess;
