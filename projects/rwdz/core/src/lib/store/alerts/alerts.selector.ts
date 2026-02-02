import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AlertsState } from './alerts.state';

export const selectAlertsState = createFeatureSelector<AlertsState>('alerts');

export const selectAlerts = createSelector(
  selectAlertsState,
  (state) => state.alerts || []
);
