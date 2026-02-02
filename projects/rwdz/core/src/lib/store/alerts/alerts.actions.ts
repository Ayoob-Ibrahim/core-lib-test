import { createAction, props } from '@ngrx/store';
import { AlertParams } from './alerts.interface';

export const addSuccessAlert = createAction(
  '[Alerts] Add Success Alert',
  props<AlertParams>()
);

export const addInfoAlert = createAction(
  '[Alerts] Add Info Alert',
  props<AlertParams>()
);

export const addWarningAlert = createAction(
  '[Alerts] Add Warning Alert',
  props<AlertParams>()
);

export const addErrorAlert = createAction(
  '[Alerts] Add Error Alert',
  props<AlertParams>()
);

export const removeAlert = createAction(
  '[Alerts] Remove Alert',
  props<{ id: number }>()
);
