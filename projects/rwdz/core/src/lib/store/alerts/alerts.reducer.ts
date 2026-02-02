import { createReducer, on } from '@ngrx/store';
import {
  addSuccessAlert,
  addInfoAlert,
  addWarningAlert,
  addErrorAlert,
  removeAlert,
} from './alerts.actions';
import { Alert, ALERT_TIMEOUTS } from './alerts.interface';

import { initialAlertsState } from './alerts.state';

const _alertsReducer = createReducer(
  initialAlertsState,

  on(addInfoAlert, (state, { id, message, timeout }) => {
    const alert: Alert = {
      id,
      message,
      icon: 'info',
      type: 'info',
      timeout: (timeout || ALERT_TIMEOUTS.info) * 1000,
    };
    return {
      alerts: [...state.alerts, alert],
    };
  }),
  on(addSuccessAlert, (state, { id, message, timeout }) => {
    const alert: Alert = {
      id,
      message,
      icon: 'check',
      type: 'success',
      timeout: (timeout || ALERT_TIMEOUTS.success) * 1000,
    };
    return {
      alerts: [...state.alerts, alert],
    };
  }),
  on(addWarningAlert, (state, { id, message, timeout }) => {
    const alert: Alert = {
      id,
      message,
      icon: 'warning',
      type: 'warning',
      timeout: (timeout || ALERT_TIMEOUTS.warning) * 1000,
    };
    return {
      alerts: [...state.alerts, alert],
    };
  }),
  on(addErrorAlert, (state, { id, message, timeout }) => {
    const alert: Alert = {
      id,
      message,
      icon: 'error',
      type: 'error',
      timeout: (timeout || ALERT_TIMEOUTS.error) * 1000,
    };
    return {
      alerts: [...state.alerts, alert],
    };
  }),

  on(removeAlert, (state, { id }) => {
    const alerts = state.alerts.filter((alert) => alert.id !== id);
    return {
      alerts,
    };
  })
);

export function alertsReducer(state: any, action: any) {
  return _alertsReducer(state, action);
}
