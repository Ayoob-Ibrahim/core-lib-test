import { AlertParams } from './alerts.interface';
export declare const addSuccessAlert: import("@ngrx/store").ActionCreator<"[Alerts] Add Success Alert", (props: AlertParams) => AlertParams & import("@ngrx/store").Action<"[Alerts] Add Success Alert">>;
export declare const addInfoAlert: import("@ngrx/store").ActionCreator<"[Alerts] Add Info Alert", (props: AlertParams) => AlertParams & import("@ngrx/store").Action<"[Alerts] Add Info Alert">>;
export declare const addWarningAlert: import("@ngrx/store").ActionCreator<"[Alerts] Add Warning Alert", (props: AlertParams) => AlertParams & import("@ngrx/store").Action<"[Alerts] Add Warning Alert">>;
export declare const addErrorAlert: import("@ngrx/store").ActionCreator<"[Alerts] Add Error Alert", (props: AlertParams) => AlertParams & import("@ngrx/store").Action<"[Alerts] Add Error Alert">>;
export declare const removeAlert: import("@ngrx/store").ActionCreator<"[Alerts] Remove Alert", (props: {
    id: number;
}) => {
    id: number;
} & import("@ngrx/store").Action<"[Alerts] Remove Alert">>;
