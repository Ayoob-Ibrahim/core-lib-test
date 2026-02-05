import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Alert } from '../../store/alerts/alerts.interface';
import * as i0 from "@angular/core";
export declare class AppAlertsComponent {
    private store;
    alerts$: Observable<Alert[]>;
    constructor(store: Store);
    removeAlert(alert: Alert): void;
    private _snackBar;
    openAlert(alert: Alert): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppAlertsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppAlertsComponent, "app-alerts", never, {}, {}, never, never, true, never>;
}
