import { AlertsState } from './alerts.state';
export declare const selectAlertsState: import("@ngrx/store").MemoizedSelector<object, AlertsState, import("@ngrx/store").DefaultProjectorFn<AlertsState>>;
export declare const selectAlerts: import("@ngrx/store").MemoizedSelector<object, import("./alerts.interface").Alert[], (s1: AlertsState) => import("./alerts.interface").Alert[]>;
