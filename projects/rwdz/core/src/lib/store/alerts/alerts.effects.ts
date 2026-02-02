// src/app/state/campaign.effects.ts

import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ALERT_TIMEOUTS } from './alerts.interface';

import {
  addSuccessAlert,
  addInfoAlert,
  addWarningAlert,
  addErrorAlert,
  removeAlert,
} from './alerts.actions';
import { AlertsState } from './alerts.state';

@Injectable()
export class AlertsEffects {
  constructor() {}

  private actions$ = inject(Actions);
  private store = inject(Store<AlertsState>);

  addInfoAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addInfoAlert),
      mergeMap((action) => {
        const timeout = action?.timeout || ALERT_TIMEOUTS.info;
        return timer(timeout * 1000).pipe(
          map(() => removeAlert({ id: action?.id }))
        );
      })
    )
  );

  addSuccessAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSuccessAlert),
      mergeMap((action) => {
        const timeout = action?.timeout || ALERT_TIMEOUTS.success;
        return timer(timeout * 1000).pipe(
          map(() => removeAlert({ id: action?.id }))
        );
      })
    )
  );

  addWarningAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addWarningAlert),
      mergeMap((action) => {
        const timeout = action?.timeout || ALERT_TIMEOUTS.warning;
        return timer(timeout * 1000).pipe(
          map(() => removeAlert({ id: action?.id }))
        );
      })
    )
  );

  addErrorAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addErrorAlert),
      mergeMap((action) => {
        const timeout = action?.timeout || ALERT_TIMEOUTS.error;
        return timer(timeout * 1000).pipe(
          map(() => removeAlert({ id: action?.id }))
        );
      })
    )
  );
}
