import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeAlert } from '../../store/alerts/alerts.actions';
import { Alert } from '../../store/alerts/alerts.interface';
import { selectAlerts } from '../../store/alerts/alerts.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerts',
  templateUrl: './app-alerts.component.html',
  styleUrl: './app-alerts.component.scss',
  imports: [CommonModule],
})
export class AppAlertsComponent {
  alerts$: Observable<Alert[]>;

  constructor(private store: Store) {
    this.alerts$ = this.store.pipe(select(selectAlerts));
  }

  removeAlert(alert: Alert) {
    this.store.dispatch(removeAlert({ id: alert.id }));
  }

  private _snackBar = inject(MatSnackBar);

  openAlert(alert: Alert) {
    this._snackBar.open(alert.message, 'Close', {
      // TODO: Add custom CSS classes for different alert types
      // panelClass: ['alert-container', 'alert-' + alert.type],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.store.dispatch(removeAlert({ id: alert.id }));
  }
}
