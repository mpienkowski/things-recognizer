import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {reducer as recognizer, State as recognizerState } from '../recognizer/recognizer.reducer';

export interface State {
  recognizer: recognizerState;
}

export const reducers: ActionReducerMap<State> = {
  recognizer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
