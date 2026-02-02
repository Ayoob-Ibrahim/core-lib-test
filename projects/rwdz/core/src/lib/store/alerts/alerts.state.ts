import { Alert } from './alerts.interface';

export interface AlertsState {
  alerts: Alert[];
}

export const initialAlertsState: AlertsState = {
  alerts: [],
};
