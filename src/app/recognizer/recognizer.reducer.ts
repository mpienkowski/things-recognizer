import { RecognizerActions, RecognizerActionTypes } from './recognizer.actions';

export interface State {
  isModelLoaded: boolean;
  isCameraInitialized: boolean;
  errorDetails: string;
}

export const initialState: State = {
  isModelLoaded: false,
  isCameraInitialized: false,
  errorDetails: ''
};

export function reducer(state = initialState, action: RecognizerActions): State {
  switch (action.type) {
    case RecognizerActionTypes.LoadModelSuccess:
      return {...state, isModelLoaded: true};
    case RecognizerActionTypes.RecognitionError:
    case RecognizerActionTypes.InitializeCameraFail:
        return {...state, errorDetails: action.payload as string};
    default:
      return state;
  }
}
