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

// In seconds
export const ALERT_TIMEOUTS = {
  info: 3,
  success: 4,
  warning: 5,
  error: 6,
};
