import { State } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectRecognizer = (state: State) => state.recognizer;

export const selectIsModelLoaded = createSelector(
  selectRecognizer,
  (state) => state.isModelLoaded
);

export const selectErrorDetails = createSelector(
  selectRecognizer,
  (state) => state.errorDetails
);
