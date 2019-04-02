import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RecognizerEffects } from './recognizer.effects';

describe('RecognizerEffects', () => {
  let actions$: Observable<any>;
  let effects: RecognizerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecognizerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RecognizerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
