export interface AlertParams {
    id: number;
    message: string;
    timeout?: number | null;
}
export interface Alert {
    id: number;
    message: string;
    icon: string | null;
    type: 'info' | 'success' | 'warning' | 'error';
    timeout?: number;
}
export declare const ALERT_TIMEOUTS: {
    info: number;
    success: number;
    warning: number;
    error: number;
};
