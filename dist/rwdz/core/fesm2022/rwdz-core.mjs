import * as i0 from '@angular/core';
import { inject, Component, Input, EventEmitter, Output, Injectable, Inject, ViewChild, Pipe } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i2 from '@ngrx/store';
import { createAction, props, createFeatureSelector, createSelector, select } from '@ngrx/store';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1$1 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1$3 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import * as i1$2 from '@angular/router';
import { NavigationStart } from '@angular/router';
import { filter, catchError, switchMap, map as map$1 } from 'rxjs/operators';
import * as i2$2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i3$1 from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i2$3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i3$2 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i3$3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1$4 from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i3$4 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { Subject, debounceTime, throwError, map, of, BehaviorSubject, forkJoin } from 'rxjs';
import * as i5 from '@angular/material/select';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import * as i1$5 from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const addSuccessAlert = createAction('[Alerts] Add Success Alert', props());
const addInfoAlert = createAction('[Alerts] Add Info Alert', props());
const addWarningAlert = createAction('[Alerts] Add Warning Alert', props());
const addErrorAlert = createAction('[Alerts] Add Error Alert', props());
const removeAlert = createAction('[Alerts] Remove Alert', props());

const selectAlertsState = createFeatureSelector('alerts');
const selectAlerts = createSelector(selectAlertsState, (state) => state.alerts || []);

class AppAlertsComponent {
    constructor(store) {
        this.store = store;
        this._snackBar = inject(MatSnackBar);
        this.alerts$ = this.store.pipe(select(selectAlerts));
    }
    removeAlert(alert) {
        this.store.dispatch(removeAlert({ id: alert.id }));
    }
    openAlert(alert) {
        this._snackBar.open(alert.message, 'Close', {
            // TODO: Add custom CSS classes for different alert types
            // panelClass: ['alert-container', 'alert-' + alert.type],
            horizontalPosition: 'center',
            verticalPosition: 'top',
        });
        this.store.dispatch(removeAlert({ id: alert.id }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppAlertsComponent, deps: [{ token: i2.Store }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppAlertsComponent, isStandalone: true, selector: "app-alerts", ngImport: i0, template: "<div class=\"alerts-container\">\n  <div\n    *ngFor=\"let alert of alerts$ | async; let i = index\"\n    class=\"alert-container\"\n    [ngClass]=\"'alert-' + alert.type\"\n    [ngStyle]=\"{ bottom: i * 56 + 8 + 'px' }\"\n  >\n    <div class=\"alert-icon\">\n      <mat-icon>{{ alert.icon }}</mat-icon>\n    </div>\n    <div\n      class=\"alert-message\"\n      [innerHTML]=\"alert.message\"\n      (click)=\"openAlert(alert)\"\n    ></div>\n    <button class=\"alert-close\" (click)=\"removeAlert(alert)\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </div>\n</div>\n", styles: [".alerts-container .alert-container{display:flex;align-items:center;width:calc(100% - 3rem);position:fixed;z-index:9999;left:1rem;right:2rem;bottom:1rem;padding:.5rem;border-radius:var(--rwdz-border-radius);background-color:var(--rwdz-color-white);border:1px solid var(--rwdz-color-info);color:var(--rwdz-color-info)}.alerts-container .alert-container:hover{z-index:99999}.alerts-container .alert-container.alert-success{border-color:var(--rwdz-color-success);color:var(--rwdz-color-success)}.alerts-container .alert-container.alert-warning{border-color:var(--rwdz-color-warning);color:var(--rwdz-color-warning)}.alerts-container .alert-container.alert-error{border-color:var(--rwdz-color-error);color:var(--rwdz-color-error)}.alerts-container .alert-container .alert-icon{margin-right:1rem;color:inherit;height:2rem}.alerts-container .alert-container .alert-icon .mat-icon{font-size:2rem;height:2rem;width:2rem}.alerts-container .alert-container .alert-message{flex:1;flex-grow:1;color:inherit}.alerts-container .alert-container button{border:none;background-color:var(--rwdz-color-white)}.alerts-container .alert-container .alert-close{cursor:pointer;margin-left:1rem;color:inherit}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppAlertsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alerts', imports: [CommonModule, MatIconModule], template: "<div class=\"alerts-container\">\n  <div\n    *ngFor=\"let alert of alerts$ | async; let i = index\"\n    class=\"alert-container\"\n    [ngClass]=\"'alert-' + alert.type\"\n    [ngStyle]=\"{ bottom: i * 56 + 8 + 'px' }\"\n  >\n    <div class=\"alert-icon\">\n      <mat-icon>{{ alert.icon }}</mat-icon>\n    </div>\n    <div\n      class=\"alert-message\"\n      [innerHTML]=\"alert.message\"\n      (click)=\"openAlert(alert)\"\n    ></div>\n    <button class=\"alert-close\" (click)=\"removeAlert(alert)\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </div>\n</div>\n", styles: [".alerts-container .alert-container{display:flex;align-items:center;width:calc(100% - 3rem);position:fixed;z-index:9999;left:1rem;right:2rem;bottom:1rem;padding:.5rem;border-radius:var(--rwdz-border-radius);background-color:var(--rwdz-color-white);border:1px solid var(--rwdz-color-info);color:var(--rwdz-color-info)}.alerts-container .alert-container:hover{z-index:99999}.alerts-container .alert-container.alert-success{border-color:var(--rwdz-color-success);color:var(--rwdz-color-success)}.alerts-container .alert-container.alert-warning{border-color:var(--rwdz-color-warning);color:var(--rwdz-color-warning)}.alerts-container .alert-container.alert-error{border-color:var(--rwdz-color-error);color:var(--rwdz-color-error)}.alerts-container .alert-container .alert-icon{margin-right:1rem;color:inherit;height:2rem}.alerts-container .alert-container .alert-icon .mat-icon{font-size:2rem;height:2rem;width:2rem}.alerts-container .alert-container .alert-message{flex:1;flex-grow:1;color:inherit}.alerts-container .alert-container button{border:none;background-color:var(--rwdz-color-white)}.alerts-container .alert-container .alert-close{cursor:pointer;margin-left:1rem;color:inherit}\n"] }]
        }], ctorParameters: () => [{ type: i2.Store }] });

class AppSpinnerComponent {
    constructor() {
        this.mode = 'indeterminate';
        // 'determinate' | 'indeterminate' | 'buffer' | 'query'
        this.color = '#000';
        this.value = 35;
        this.diameter = 24;
        this.width = 3;
        this.bufferValue = 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppSpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppSpinnerComponent, isStandalone: true, selector: "app-spinner", inputs: { mode: "mode", color: "color", value: "value", diameter: "diameter", width: "width", bufferValue: "bufferValue" }, ngImport: i0, template: "<div class=\"spinner-container\">\n  <mat-spinner\n    [color]=\"color\"\n    [diameter]=\"diameter\"\n    [strokeWidth]=\"width\"\n    [mode]=\"mode\"\n    [value]=\"value\"\n  />\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-spinner', imports: [CommonModule, MatProgressSpinnerModule], template: "<div class=\"spinner-container\">\n  <mat-spinner\n    [color]=\"color\"\n    [diameter]=\"diameter\"\n    [strokeWidth]=\"width\"\n    [mode]=\"mode\"\n    [value]=\"value\"\n  />\n</div>\n" }]
        }], propDecorators: { mode: [{
                type: Input
            }], color: [{
                type: Input
            }], value: [{
                type: Input
            }], diameter: [{
                type: Input
            }], width: [{
                type: Input
            }], bufferValue: [{
                type: Input
            }] } });

class AppButtonComponent {
    constructor() {
        this.type = '';
        this.eventType = 'button';
        this.color = 'primary';
        this.customStyles = {};
        this.text = '';
        this.icon = '';
        this.loading = false;
        this.disabled = false;
        this.isAction = false;
        this.redirectUrl = '';
        this.redirectTarget = '_blank';
        this.clicked = new EventEmitter();
        this.colorClass = '';
    }
    ngOnInit() {
        this.colorClass =
            (this.isAction ? 'action-button ' : '') + this.getColorClass();
    }
    getColorClass() {
        switch (this.color) {
            case 'primary':
                return 'mat-primary';
            case 'accent':
                return 'mat-accent';
            case 'warn':
                return 'mat-warn';
            case 'white':
                return 'mat-white';
            default:
                return '#000';
        }
    }
    handleClick() {
        this.clicked.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppButtonComponent, isStandalone: true, selector: "app-button", inputs: { type: "type", eventType: "eventType", color: "color", customStyles: "customStyles", text: "text", icon: "icon", loading: "loading", disabled: "disabled", isAction: "isAction", redirectUrl: "redirectUrl", redirectTarget: "redirectTarget" }, outputs: { clicked: "clicked" }, ngImport: i0, template: "<button\n  *ngIf=\"type === 'raised'\"\n  mat-raised-button\n  [ngClass]=\"colorClass\"\n  [ngStyle]=\"customStyles\"\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <div class=\"button-content\">\n    <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n    <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n      {{ icon }}\n    </mat-icon>\n    {{ text }}\n  </div>\n</button>\n\n<button\n  *ngIf=\"type === 'outline'\"\n  mat-stroked-button\n  [ngClass]=\"colorClass\"\n  [ngStyle]=\"customStyles\"\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <div class=\"button-content\">\n    <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n    <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n      {{ icon }}\n    </mat-icon>\n    {{ text }}\n  </div>\n</button>\n<button\n  *ngIf=\"type === 'flat'\"\n  mat-flat-button\n  [ngClass]=\"colorClass\"\n  [ngStyle]=\"customStyles\"\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <div class=\"button-content\">\n    <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n    <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n      {{ icon }}\n    </mat-icon>\n    {{ text }}\n  </div>\n</button>\n\n<button\n  *ngIf=\"type === '' && !redirectUrl\"\n  mat-button\n  [ngClass]=\"colorClass\"\n  [ngStyle]=\"customStyles\"\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <div class=\"button-content\">\n    <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n    <mat-icon class=\"icon-spinner m-0\" *ngIf=\"!loading && icon\">\n      {{ icon }}\n    </mat-icon>\n    {{ text }}\n  </div>\n</button>\n\n<a\n  *ngIf=\"type === '' && redirectUrl\"\n  mat-button\n  [ngClass]=\"colorClass\"\n  [ngStyle]=\"customStyles\"\n  [href]=\"redirectUrl\"\n>\n  <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n  {{ text }}\n</a>\n\n<button\n  *ngIf=\"type === 'basic'\"\n  mat-button\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <div class=\"button-content\">\n    <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n    <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n      {{ icon }}\n    </mat-icon>\n    {{ text }}\n  </div>\n</button>\n\n<button\n  *ngIf=\"type === 'icon'\"\n  mat-icon-button\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n  <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n    {{ icon }}\n  </mat-icon>\n</button>\n\n<button\n  *ngIf=\"type === 'fab'\"\n  mat-fab\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n  <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n    {{ icon }}\n  </mat-icon>\n</button>\n\n<button\n  *ngIf=\"type === 'mini-fab'\"\n  mat-mini-fab\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n  <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n    {{ icon }}\n  </mat-icon>\n</button>\n", styles: [".action-button{height:48px}.button-content{display:flex;align-items:center;justify-content:center}.button-content .icon-spinner{margin-right:8px}::ng-deep .mdc-button.mat-primary .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,::ng-deep .mdc-button.mat-primary .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--rwdz-color-white)!important}button.mdc-button.mat-white{background-color:var(--rwdz-color-white);color:var(--rwdz-color-primary);border:1px solid var(--rwdz-color-border)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: AppSpinnerComponent, selector: "app-spinner", inputs: ["mode", "color", "value", "diameter", "width", "bufferValue"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i3.MatMiniFabButton, selector: "button[mat-mini-fab]", exportAs: ["matButton"] }, { kind: "component", type: i3.MatFabButton, selector: "button[mat-fab]", inputs: ["extended"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-button', imports: [CommonModule, MatIconModule, AppSpinnerComponent, MatButtonModule], template: "<button\n  *ngIf=\"type === 'raised'\"\n  mat-raised-button\n  [ngClass]=\"colorClass\"\n  [ngStyle]=\"customStyles\"\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <div class=\"button-content\">\n    <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n    <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n      {{ icon }}\n    </mat-icon>\n    {{ text }}\n  </div>\n</button>\n\n<button\n  *ngIf=\"type === 'outline'\"\n  mat-stroked-button\n  [ngClass]=\"colorClass\"\n  [ngStyle]=\"customStyles\"\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <div class=\"button-content\">\n    <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n    <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n      {{ icon }}\n    </mat-icon>\n    {{ text }}\n  </div>\n</button>\n<button\n  *ngIf=\"type === 'flat'\"\n  mat-flat-button\n  [ngClass]=\"colorClass\"\n  [ngStyle]=\"customStyles\"\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <div class=\"button-content\">\n    <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n    <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n      {{ icon }}\n    </mat-icon>\n    {{ text }}\n  </div>\n</button>\n\n<button\n  *ngIf=\"type === '' && !redirectUrl\"\n  mat-button\n  [ngClass]=\"colorClass\"\n  [ngStyle]=\"customStyles\"\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <div class=\"button-content\">\n    <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n    <mat-icon class=\"icon-spinner m-0\" *ngIf=\"!loading && icon\">\n      {{ icon }}\n    </mat-icon>\n    {{ text }}\n  </div>\n</button>\n\n<a\n  *ngIf=\"type === '' && redirectUrl\"\n  mat-button\n  [ngClass]=\"colorClass\"\n  [ngStyle]=\"customStyles\"\n  [href]=\"redirectUrl\"\n>\n  <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n  {{ text }}\n</a>\n\n<button\n  *ngIf=\"type === 'basic'\"\n  mat-button\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <div class=\"button-content\">\n    <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n    <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n      {{ icon }}\n    </mat-icon>\n    {{ text }}\n  </div>\n</button>\n\n<button\n  *ngIf=\"type === 'icon'\"\n  mat-icon-button\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n  <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n    {{ icon }}\n  </mat-icon>\n</button>\n\n<button\n  *ngIf=\"type === 'fab'\"\n  mat-fab\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n  <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n    {{ icon }}\n  </mat-icon>\n</button>\n\n<button\n  *ngIf=\"type === 'mini-fab'\"\n  mat-mini-fab\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\"\n  [attr.type]=\"eventType\"\n>\n  <app-spinner class=\"icon-spinner\" *ngIf=\"loading\"></app-spinner>\n  <mat-icon class=\"icon-spinner\" *ngIf=\"!loading && icon\">\n    {{ icon }}\n  </mat-icon>\n</button>\n", styles: [".action-button{height:48px}.button-content{display:flex;align-items:center;justify-content:center}.button-content .icon-spinner{margin-right:8px}::ng-deep .mdc-button.mat-primary .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,::ng-deep .mdc-button.mat-primary .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--rwdz-color-white)!important}button.mdc-button.mat-white{background-color:var(--rwdz-color-white);color:var(--rwdz-color-primary);border:1px solid var(--rwdz-color-border)}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], eventType: [{
                type: Input
            }], color: [{
                type: Input
            }], customStyles: [{
                type: Input
            }], text: [{
                type: Input
            }], icon: [{
                type: Input
            }], loading: [{
                type: Input
            }], disabled: [{
                type: Input
            }], isAction: [{
                type: Input
            }], redirectUrl: [{
                type: Input
            }], redirectTarget: [{
                type: Input
            }], clicked: [{
                type: Output
            }] } });

class BackNavigationService {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.backRoute = null;
        this.previousUrl = null;
        this.router.events
            .pipe(filter((event) => event instanceof NavigationStart))
            .subscribe((event) => {
            this.previousUrl = event.url;
        });
    }
    setBackRoute(route) {
        this.backRoute = route;
    }
    goBack() {
        if (this.backRoute) {
            this.router.navigate([this.backRoute]);
            this.backRoute = null;
        }
        else if (this.previousUrl) {
            this.location.back();
        }
        else {
            // Fallback to home or another default route
            this.router.navigate(['/']);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: BackNavigationService, deps: [{ token: i1$2.Router }, { token: i1.Location }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: BackNavigationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: BackNavigationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i1.Location }] });

class AppBackButtonComponent {
    constructor(backNavigationService) {
        this.backNavigationService = backNavigationService;
        this.color = 'primary';
    }
    async onClick() {
        this.backNavigationService.goBack();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppBackButtonComponent, deps: [{ token: BackNavigationService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppBackButtonComponent, isStandalone: true, selector: "app-back-button", inputs: { color: "color" }, ngImport: i0, template: "<app-button\n  type=\"flat\"\n  [text]=\"'back' | translate\"\n  icon=\"arrow_back_ios\"\n  (click)=\"onClick()\"\n  [color]=\"color\"\n/>\n", styles: [".cursor-pointer{cursor:pointer}.cursor-pointer:hover{color:var(--rwdz-color-primary)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: AppButtonComponent, selector: "app-button", inputs: ["type", "eventType", "color", "customStyles", "text", "icon", "loading", "disabled", "isAction", "redirectUrl", "redirectTarget"], outputs: ["clicked"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppBackButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-back-button', imports: [CommonModule, AppButtonComponent, TranslateModule], template: "<app-button\n  type=\"flat\"\n  [text]=\"'back' | translate\"\n  icon=\"arrow_back_ios\"\n  (click)=\"onClick()\"\n  [color]=\"color\"\n/>\n", styles: [".cursor-pointer{cursor:pointer}.cursor-pointer:hover{color:var(--rwdz-color-primary)}\n"] }]
        }], ctorParameters: () => [{ type: BackNavigationService }], propDecorators: { color: [{
                type: Input
            }] } });

class AppCardComponent {
    constructor() {
        this.hasHeader = false;
        this.hasFooter = false;
        this.hasActions = false;
        this.removeContentPadding = false;
        this.actionsAlign = 'start';
        this.customStyles = {};
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppCardComponent, isStandalone: true, selector: "app-card", inputs: { hasHeader: "hasHeader", hasFooter: "hasFooter", hasActions: "hasActions", removeContentPadding: "removeContentPadding", actionsAlign: "actionsAlign", customStyles: "customStyles" }, ngImport: i0, template: "<mat-card [ngStyle]=\"customStyles\">\n  <mat-card-header *ngIf=\"hasHeader\">\n    <ng-content select=\"[card-header]\"></ng-content>\n  </mat-card-header>\n  \n  <mat-card-content [ngClass]=\"{'p-0': removeContentPadding}\">\n    <ng-content select=\"[card-content]\"></ng-content>\n  </mat-card-content>\n  \n  <mat-card-footer *ngIf=\"hasFooter\">\n    <ng-content select=\"[card-footer]\"></ng-content>\n  </mat-card-footer>\n\n  <mat-card-actions *ngIf=\"hasActions\" [attr.align]=\"actionsAlign\">\n    <ng-content select=\"[card-actions]\"></ng-content>\n  </mat-card-actions>\n</mat-card>\n", styles: ["mat-card-actions[align=end]{justify-content:flex-end}mat-card-actions[align=center]{justify-content:center}mat-card-actions[align=start]{justify-content:flex-start}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i2$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i2$2.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i2$2.MatCardContent, selector: "mat-card-content" }, { kind: "directive", type: i2$2.MatCardFooter, selector: "mat-card-footer" }, { kind: "component", type: i2$2.MatCardHeader, selector: "mat-card-header" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-card', imports: [CommonModule, MatCardModule], template: "<mat-card [ngStyle]=\"customStyles\">\n  <mat-card-header *ngIf=\"hasHeader\">\n    <ng-content select=\"[card-header]\"></ng-content>\n  </mat-card-header>\n  \n  <mat-card-content [ngClass]=\"{'p-0': removeContentPadding}\">\n    <ng-content select=\"[card-content]\"></ng-content>\n  </mat-card-content>\n  \n  <mat-card-footer *ngIf=\"hasFooter\">\n    <ng-content select=\"[card-footer]\"></ng-content>\n  </mat-card-footer>\n\n  <mat-card-actions *ngIf=\"hasActions\" [attr.align]=\"actionsAlign\">\n    <ng-content select=\"[card-actions]\"></ng-content>\n  </mat-card-actions>\n</mat-card>\n", styles: ["mat-card-actions[align=end]{justify-content:flex-end}mat-card-actions[align=center]{justify-content:center}mat-card-actions[align=start]{justify-content:flex-start}\n"] }]
        }], propDecorators: { hasHeader: [{
                type: Input
            }], hasFooter: [{
                type: Input
            }], hasActions: [{
                type: Input
            }], removeContentPadding: [{
                type: Input
            }], actionsAlign: [{
                type: Input
            }], customStyles: [{
                type: Input
            }] } });

class AppCheckboxComponent {
    constructor(translate) {
        this.translate = translate;
        this.labelBold = false;
        this.showCheckbox = true;
        this.showErrorAlert = true;
        this.changed = new EventEmitter();
    }
    onChange(event) {
        if (this.showCheckbox) {
            if (this.label) {
                this.label.checked = event.checked;
            }
            this.changed.emit(event);
        }
        else {
            this.changed.emit(event.checked);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppCheckboxComponent, deps: [{ token: i1$3.TranslateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppCheckboxComponent, isStandalone: true, selector: "app-checkbox", inputs: { control: "control", label: "label", labelBold: "labelBold", showCheckbox: "showCheckbox", showErrorAlert: "showErrorAlert" }, outputs: { changed: "changed" }, ngImport: i0, template: "<ng-container *ngIf=\"showCheckbox; else labelOnly\">\n  <mat-checkbox [ngClass]=\"labelBold ? 'fw-bold':''\" [formControl]=\"control\" (change)=\"onChange($event)\">\n    {{ label }}\n  </mat-checkbox>\n  <mat-error *ngIf=\"control.touched && control.hasError('required') && showErrorAlert\">\n    {{ label }} {{'isRequired' | translate}}\n  </mat-error>\n</ng-container>\n\n<ng-template #labelOnly>\n  <div class=\"d-flex justify-content-start\">\n    <div class=\"app-tabs\">\n      <mat-checkbox\n        [formControl]=\"control\"\n        class=\"app-tab hidden-box\"\n        (change)=\"onChange($event)\"\n        [ngClass]=\"label.checked ? 'active' : ''\"\n      >\n        {{ label.label | translate }}\n      </mat-checkbox>\n    </div>\n  </div>\n</ng-template>\n", styles: [".checkbox-label-tap{background-color:var(--rwdz-color-primary);padding:10px;border-radius:var(--rwdz-border-radius)}.app-tabs{height:4rem}.app-tab{padding:.5rem;text-decoration:none;margin:.5rem;border-radius:var(--rwdz-border-radius);display:inline-block;transition:all .25s ease-in-out;color:var(--rwdz-color-label);font-size:.875rem;line-height:.25rem;cursor:pointer}.app-tab:hover{color:var(--rwdz-color-primary)}.app-tab.active{background-color:var(--rwdz-color-primary);color:var(--rwdz-color-white)}mat-error{font-size:12px}::ng-deep .mat-mdc-checkbox.fw-bold .mdc-label{font-weight:700!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i4.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "directive", type: i2$3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-checkbox', imports: [CommonModule, TranslateModule, ReactiveFormsModule, MatCheckboxModule, MatFormFieldModule,], template: "<ng-container *ngIf=\"showCheckbox; else labelOnly\">\n  <mat-checkbox [ngClass]=\"labelBold ? 'fw-bold':''\" [formControl]=\"control\" (change)=\"onChange($event)\">\n    {{ label }}\n  </mat-checkbox>\n  <mat-error *ngIf=\"control.touched && control.hasError('required') && showErrorAlert\">\n    {{ label }} {{'isRequired' | translate}}\n  </mat-error>\n</ng-container>\n\n<ng-template #labelOnly>\n  <div class=\"d-flex justify-content-start\">\n    <div class=\"app-tabs\">\n      <mat-checkbox\n        [formControl]=\"control\"\n        class=\"app-tab hidden-box\"\n        (change)=\"onChange($event)\"\n        [ngClass]=\"label.checked ? 'active' : ''\"\n      >\n        {{ label.label | translate }}\n      </mat-checkbox>\n    </div>\n  </div>\n</ng-template>\n", styles: [".checkbox-label-tap{background-color:var(--rwdz-color-primary);padding:10px;border-radius:var(--rwdz-border-radius)}.app-tabs{height:4rem}.app-tab{padding:.5rem;text-decoration:none;margin:.5rem;border-radius:var(--rwdz-border-radius);display:inline-block;transition:all .25s ease-in-out;color:var(--rwdz-color-label);font-size:.875rem;line-height:.25rem;cursor:pointer}.app-tab:hover{color:var(--rwdz-color-primary)}.app-tab.active{background-color:var(--rwdz-color-primary);color:var(--rwdz-color-white)}mat-error{font-size:12px}::ng-deep .mat-mdc-checkbox.fw-bold .mdc-label{font-weight:700!important}\n"] }]
        }], ctorParameters: () => [{ type: i1$3.TranslateService }], propDecorators: { control: [{
                type: Input
            }], label: [{
                type: Input
            }], labelBold: [{
                type: Input
            }], showCheckbox: [{
                type: Input
            }], showErrorAlert: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class AppIconComponent {
    constructor() {
        this.iconName = '';
        this.color = '';
        this.size = 24;
        this.toolTipPosition = undefined;
        this.toolTipText = '';
    }
    get iconContainerStyle() {
        let bgColor = `${this.color}1A`;
        return this.color ? { 'background-color': bgColor } : {};
    }
    get iconStyle() {
        return this.color || this.size
            ? {
                color: this.color,
                'font-size': `${this.size}px`,
                width: `${this.size}px`,
                height: `${this.size}px`,
            }
            : {};
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppIconComponent, isStandalone: true, selector: "app-icon", inputs: { iconName: "iconName", color: "color", size: "size", toolTipPosition: "toolTipPosition", toolTipText: "toolTipText" }, ngImport: i0, template: "<div class=\"icon-container\" [ngStyle]=\"iconContainerStyle\">\n  <mat-icon\n    [ngStyle]=\"iconStyle\"\n    [matTooltipPosition]=\"toolTipPosition!\"\n    [matTooltip]=\"toolTipText\"\n  >\n    {{ iconName }}\n  </mat-icon>\n</div>\n", styles: [".icon-container{display:inline-flex;align-items:center;justify-content:center}.icon-with-padding{padding:.6rem;border-radius:.5rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i3$2.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-icon', imports: [CommonModule, MatIconModule, MatTooltipModule], template: "<div class=\"icon-container\" [ngStyle]=\"iconContainerStyle\">\n  <mat-icon\n    [ngStyle]=\"iconStyle\"\n    [matTooltipPosition]=\"toolTipPosition!\"\n    [matTooltip]=\"toolTipText\"\n  >\n    {{ iconName }}\n  </mat-icon>\n</div>\n", styles: [".icon-container{display:inline-flex;align-items:center;justify-content:center}.icon-with-padding{padding:.6rem;border-radius:.5rem}\n"] }]
        }], propDecorators: { iconName: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], toolTipPosition: [{
                type: Input
            }], toolTipText: [{
                type: Input
            }] } });

class AppImageComponent {
    constructor() {
        this.src = '';
        this.height = '';
        this.width = '';
        this.ngClass = '';
        this.defaultImage = '';
        this.customStyles = {};
        this.clicked = new EventEmitter();
    }
    handleClick() {
        this.clicked.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppImageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppImageComponent, isStandalone: true, selector: "app-image", inputs: { src: "src", height: "height", width: "width", ngClass: "ngClass", defaultImage: "defaultImage", customStyles: "customStyles" }, outputs: { clicked: "clicked" }, ngImport: i0, template: "<div class=\"image-container\">\n  <img\n    [src]=\"src || defaultImage\"\n    [attr.height]=\"height\"\n    [attr.width]=\"width\"\n    [ngClass]=\"ngClass\"\n    (click)=\"handleClick()\"\n  />\n</div>\n", styles: ["img{cursor:pointer}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-image', imports: [CommonModule], template: "<div class=\"image-container\">\n  <img\n    [src]=\"src || defaultImage\"\n    [attr.height]=\"height\"\n    [attr.width]=\"width\"\n    [ngClass]=\"ngClass\"\n    (click)=\"handleClick()\"\n  />\n</div>\n", styles: ["img{cursor:pointer}\n"] }]
        }], propDecorators: { src: [{
                type: Input
            }], height: [{
                type: Input
            }], width: [{
                type: Input
            }], ngClass: [{
                type: Input
            }], defaultImage: [{
                type: Input
            }], customStyles: [{
                type: Input
            }], clicked: [{
                type: Output
            }] } });

class AppInputComponent {
    constructor() {
        this.type = 'text';
        this.placeholder = '';
        this.prefixIcon = '';
        this.suffixIcon = '';
        this.required = false;
        this.hintStart = undefined;
        this.hintEnd = undefined;
        this.iconChange = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
    ngOnInit() {
        this.control.valueChanges.subscribe((newValue) => {
            this.valueChange.emit(newValue);
        });
    }
    onClickSuffix() {
        this.iconChange.emit(this.suffixIcon);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppInputComponent, isStandalone: true, selector: "app-input", inputs: { label: "label", control: "control", type: "type", placeholder: "placeholder", prefixIcon: "prefixIcon", suffixIcon: "suffixIcon", required: "required", hintStart: "hintStart", hintEnd: "hintEnd" }, outputs: { iconChange: "iconChange", valueChange: "valueChange" }, ngImport: i0, template: "<mat-form-field appearance=\"outline\">\n  <mat-icon *ngIf=\"prefixIcon\" matPrefix>{{ prefixIcon }}</mat-icon>\n  <mat-icon *ngIf=\"suffixIcon\" matSuffix (click)=\"onClickSuffix()\">\n    {{ suffixIcon }}\n  </mat-icon>\n  <mat-label *ngIf=\"label\">{{ label }}</mat-label>\n  <input\n    matInput\n    [type]=\"type\"\n    [placeholder]=\"placeholder\"\n    [formControl]=\"control\"\n  />\n  <mat-hint *ngIf=\"hintStart\" align=\"start\">\n    {{ hintStart }}\n  </mat-hint>\n  <mat-hint *ngIf=\"hintEnd\" align=\"end\">\n    {{ hintEnd }}\n  </mat-hint>\n\n  <mat-error *ngIf=\"control.touched && control.hasError('required')\">\n    {{ label || placeholder }} {{ \"isRequired\" | translate }}\n  </mat-error>\n  <mat-error *ngIf=\"control.touched && control.hasError('pattern')\">\n    <!-- TODO: update to Language -->\n    Invalid Input\n  </mat-error>\n  <mat-error *ngIf=\"control.touched && control.hasError('email')\">\n    {{ \"emailRequired\" | translate }}\n  </mat-error>\n</mat-form-field>\n", styles: [".form-append{padding-right:10px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2$3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2$3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2$3.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i2$3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3$3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-input', imports: [
                        CommonModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatIconModule,
                        TranslateModule, ReactiveFormsModule
                    ], template: "<mat-form-field appearance=\"outline\">\n  <mat-icon *ngIf=\"prefixIcon\" matPrefix>{{ prefixIcon }}</mat-icon>\n  <mat-icon *ngIf=\"suffixIcon\" matSuffix (click)=\"onClickSuffix()\">\n    {{ suffixIcon }}\n  </mat-icon>\n  <mat-label *ngIf=\"label\">{{ label }}</mat-label>\n  <input\n    matInput\n    [type]=\"type\"\n    [placeholder]=\"placeholder\"\n    [formControl]=\"control\"\n  />\n  <mat-hint *ngIf=\"hintStart\" align=\"start\">\n    {{ hintStart }}\n  </mat-hint>\n  <mat-hint *ngIf=\"hintEnd\" align=\"end\">\n    {{ hintEnd }}\n  </mat-hint>\n\n  <mat-error *ngIf=\"control.touched && control.hasError('required')\">\n    {{ label || placeholder }} {{ \"isRequired\" | translate }}\n  </mat-error>\n  <mat-error *ngIf=\"control.touched && control.hasError('pattern')\">\n    <!-- TODO: update to Language -->\n    Invalid Input\n  </mat-error>\n  <mat-error *ngIf=\"control.touched && control.hasError('email')\">\n    {{ \"emailRequired\" | translate }}\n  </mat-error>\n</mat-form-field>\n", styles: [".form-append{padding-right:10px}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], control: [{
                type: Input
            }], type: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], prefixIcon: [{
                type: Input
            }], suffixIcon: [{
                type: Input
            }], required: [{
                type: Input
            }], hintStart: [{
                type: Input
            }], hintEnd: [{
                type: Input
            }], iconChange: [{
                type: Output
            }], valueChange: [{
                type: Output
            }] } });

class AppTextComponent {
    constructor() {
        this.type = 'body';
        this.size = 'large';
        this.fontSize = undefined;
        this.bold = false;
        this.semiBold = false;
        this.removeMargin = false;
    }
    get textClass() {
        let classes = `mat-${this.type}-${this.size}`;
        if (this.bold) {
            classes += ' font-bold';
        }
        if (this.semiBold) {
            classes += ' font-semi-bold';
        }
        if (this.removeMargin) {
            classes += ' m-0';
        }
        if (this.class) {
            classes += ` ${this.class}`;
        }
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppTextComponent, isStandalone: true, selector: "app-text", inputs: { type: "type", size: "size", fontSize: "fontSize", bold: "bold", semiBold: "semiBold", removeMargin: "removeMargin", textColor: "textColor", class: "class", htmlContent: "htmlContent" }, ngImport: i0, template: "<div [ngClass]=\"textClass\" [ngStyle]=\"{ color: textColor }\" [style.fontSize]=\"fontSize\">\n  <ng-container *ngIf=\"!htmlContent; else htmlTemplate\">\n    <ng-content></ng-content>\n  </ng-container>\n\n  <ng-template #htmlTemplate>\n    <div [innerHTML]=\"htmlContent\"></div>\n  </ng-template>\n</div>\n\n ", styles: [".font-bold{font-weight:700!important}.mat-headline-large{font-weight:700!important;font-family:var(--rwdz-font-family)!important;font:var(--mat-sys-headline-large);margin-bottom:.25rem}.mat-headline-medium{font-weight:700;font-size:1.25rem;font-family:var(--rwdz-font-family);margin:0 0 .5em}.mat-label-large,.mat-typography .mat-label-large{font:var(--mat-sys-label-large);letter-spacing:.006rem;font-family:var(--rwdz-font-family)!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-text', imports: [CommonModule], template: "<div [ngClass]=\"textClass\" [ngStyle]=\"{ color: textColor }\" [style.fontSize]=\"fontSize\">\n  <ng-container *ngIf=\"!htmlContent; else htmlTemplate\">\n    <ng-content></ng-content>\n  </ng-container>\n\n  <ng-template #htmlTemplate>\n    <div [innerHTML]=\"htmlContent\"></div>\n  </ng-template>\n</div>\n\n ", styles: [".font-bold{font-weight:700!important}.mat-headline-large{font-weight:700!important;font-family:var(--rwdz-font-family)!important;font:var(--mat-sys-headline-large);margin-bottom:.25rem}.mat-headline-medium{font-weight:700;font-size:1.25rem;font-family:var(--rwdz-font-family);margin:0 0 .5em}.mat-label-large,.mat-typography .mat-label-large{font:var(--mat-sys-label-large);letter-spacing:.006rem;font-family:var(--rwdz-font-family)!important}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], bold: [{
                type: Input
            }], semiBold: [{
                type: Input
            }], removeMargin: [{
                type: Input
            }], textColor: [{
                type: Input
            }], class: [{
                type: Input
            }], htmlContent: [{
                type: Input
            }] } });

class AppModalComponent {
    constructor(dialogRef, data, maxHeight, maxWidth) {
        this.dialogRef = dialogRef;
        this.title = '';
        this.isCloseIcon = true;
        this.closeButton = true;
        this.isTopBox = true;
        this.customStyles = {};
        this.customStyles = { height: maxHeight, weight: maxWidth };
    }
    closeDialog() {
        this.dialogRef.close(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppModalComponent, deps: [{ token: i1$4.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: MAT_DIALOG_DATA }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppModalComponent, isStandalone: true, selector: "app-modal", inputs: { title: "title", isCloseIcon: "isCloseIcon", closeButton: "closeButton", component: "component", isTopBox: "isTopBox" }, ngImport: i0, template: "<div class=\"top-box\" *ngIf=\"isTopBox\"></div>\n<div class=\"dialog-wrapper\" [ngClass]=\"{ 'top-position': isTopBox }\">\n  <div class=\"mx-4 my-2\">\n    <div class=\"d-flex justify-content-between\">\n      <app-text\n        *ngIf=\"title\"\n        type=\"headline\"\n        size=\"medium\"\n        [ngClass]=\"{ ' white-color': isTopBox }\"\n      >\n        {{ title }}\n      </app-text>\n      <app-icon\n        class=\"close-button\"\n        matDialogClose\n        (click)=\"(closeButton)\"\n        iconName=\"close\"\n      />\n    </div>\n  </div>\n  <div class=\"dialog-content\" mat-dialog-content>\n    <div class=\"content-container\">\n      <ng-content select=\"[dialog-content]\"></ng-content>\n    </div>\n  </div>\n  <div class=\"dialog-actions\" mat-dialog-actions>\n    <ng-content select=\"[dialog-actions]\"></ng-content>\n  </div>\n</div>\n", styles: [".dialog-wrapper{width:80vw;max-width:100%}.dialog-content{padding-top:0;max-height:calc(90vh - 150px)}.dialog-content .content-container{height:100%;overflow-y:auto}.dialog-actions{padding-top:0}.close-button{background-color:var(--rwdz-color-white);border-radius:var(--rwdz-border-radius);padding:.35rem;height:2.2rem}.top-position{position:relative;top:-150px;margin-bottom:-150px}.white-color{color:var(--rwdz-color-white)}.top-box{height:10rem;background-color:var(--rwdz-color-primary)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AppIconComponent, selector: "app-icon", inputs: ["iconName", "color", "size", "toolTipPosition", "toolTipText"] }, { kind: "component", type: AppTextComponent, selector: "app-text", inputs: ["type", "size", "fontSize", "bold", "semiBold", "removeMargin", "textColor", "class", "htmlContent"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-modal', imports: [CommonModule, AppIconComponent, AppTextComponent], template: "<div class=\"top-box\" *ngIf=\"isTopBox\"></div>\n<div class=\"dialog-wrapper\" [ngClass]=\"{ 'top-position': isTopBox }\">\n  <div class=\"mx-4 my-2\">\n    <div class=\"d-flex justify-content-between\">\n      <app-text\n        *ngIf=\"title\"\n        type=\"headline\"\n        size=\"medium\"\n        [ngClass]=\"{ ' white-color': isTopBox }\"\n      >\n        {{ title }}\n      </app-text>\n      <app-icon\n        class=\"close-button\"\n        matDialogClose\n        (click)=\"(closeButton)\"\n        iconName=\"close\"\n      />\n    </div>\n  </div>\n  <div class=\"dialog-content\" mat-dialog-content>\n    <div class=\"content-container\">\n      <ng-content select=\"[dialog-content]\"></ng-content>\n    </div>\n  </div>\n  <div class=\"dialog-actions\" mat-dialog-actions>\n    <ng-content select=\"[dialog-actions]\"></ng-content>\n  </div>\n</div>\n", styles: [".dialog-wrapper{width:80vw;max-width:100%}.dialog-content{padding-top:0;max-height:calc(90vh - 150px)}.dialog-content .content-container{height:100%;overflow-y:auto}.dialog-actions{padding-top:0}.close-button{background-color:var(--rwdz-color-white);border-radius:var(--rwdz-border-radius);padding:.35rem;height:2.2rem}.top-position{position:relative;top:-150px;margin-bottom:-150px}.white-color{color:var(--rwdz-color-white)}.top-box{height:10rem;background-color:var(--rwdz-color-primary)}\n"] }]
        }], ctorParameters: () => [{ type: i1$4.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }], propDecorators: { title: [{
                type: Input
            }], isCloseIcon: [{
                type: Input
            }], closeButton: [{
                type: Input
            }], component: [{
                type: Input
            }], isTopBox: [{
                type: Input
            }] } });

class AppPhotoUploadComponent {
    constructor() {
        this.label = '';
        this.hint = '';
        this.photo = null;
        this.accept = '.jpg, .jpeg, .png';
        this.iconName = 'photo_camera';
        this.resetFlag = false;
        this.photoSelected = new EventEmitter();
        this.preview = null;
    }
    ngOnInit() {
        if (!this.control) {
            throw new Error('PhotoUploadComponent requires a FormControl as an input');
        }
    }
    triggerPhotoInput() {
        this.photoInput.nativeElement.click();
    }
    onPhotoSelected(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const photo = input.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.preview = e.target?.result;
            };
            reader.readAsDataURL(photo);
            // Set the photo object to the passed form control without setting the input's value directly
            this.control?.setValue(photo);
            this.control.markAsDirty();
            this.control.markAsTouched();
            this.photoSelected.emit(photo);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppPhotoUploadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppPhotoUploadComponent, isStandalone: true, selector: "app-photo-upload", inputs: { label: "label", hint: "hint", photo: "photo", accept: "accept", iconName: "iconName", resetFlag: "resetFlag", control: "control", preview: "preview" }, outputs: { photoSelected: "photoSelected" }, viewQueries: [{ propertyName: "photoInput", first: true, predicate: ["photoInput"], descendants: true }], ngImport: i0, template: "<div class=\"d-flex flex-column justify-content-center align-items-center\">\n  <app-icon\n    *ngIf=\"!(preview || photo)\"\n    iconName=\"account_circle\"\n    [size]=\"140\"\n    color=\"#ccc\"\n  />\n\n  <img\n    *ngIf=\"preview || photo\"\n    [src]=\"preview || photo\"\n    class=\"profile-photo mb-4\"\n  />\n\n  <app-button\n    *ngIf=\"label\"\n    type=\"basic\"\n    [icon]=\"iconName\"\n    [text]=\"label\"\n    (click)=\"triggerPhotoInput()\"\n  />\n\n  <input\n    #photoInput\n    id=\"photoInput\"\n    type=\"file\"\n    (change)=\"onPhotoSelected($event)\"\n    [attr.accept]=\"accept\"\n    hidden\n  />\n\n  <app-text *ngIf=\"hint\" type=\"label\" class=\"mt-2\">\n    {{ hint }}\n  </app-text>\n</div>\n", styles: [".profile-photo{border-radius:.5rem;box-shadow:0 0 .25rem #0000001a;width:100%;max-width:200px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AppIconComponent, selector: "app-icon", inputs: ["iconName", "color", "size", "toolTipPosition", "toolTipText"] }, { kind: "component", type: AppTextComponent, selector: "app-text", inputs: ["type", "size", "fontSize", "bold", "semiBold", "removeMargin", "textColor", "class", "htmlContent"] }, { kind: "component", type: AppButtonComponent, selector: "app-button", inputs: ["type", "eventType", "color", "customStyles", "text", "icon", "loading", "disabled", "isAction", "redirectUrl", "redirectTarget"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppPhotoUploadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-photo-upload', imports: [CommonModule, AppIconComponent, AppTextComponent, AppButtonComponent], template: "<div class=\"d-flex flex-column justify-content-center align-items-center\">\n  <app-icon\n    *ngIf=\"!(preview || photo)\"\n    iconName=\"account_circle\"\n    [size]=\"140\"\n    color=\"#ccc\"\n  />\n\n  <img\n    *ngIf=\"preview || photo\"\n    [src]=\"preview || photo\"\n    class=\"profile-photo mb-4\"\n  />\n\n  <app-button\n    *ngIf=\"label\"\n    type=\"basic\"\n    [icon]=\"iconName\"\n    [text]=\"label\"\n    (click)=\"triggerPhotoInput()\"\n  />\n\n  <input\n    #photoInput\n    id=\"photoInput\"\n    type=\"file\"\n    (change)=\"onPhotoSelected($event)\"\n    [attr.accept]=\"accept\"\n    hidden\n  />\n\n  <app-text *ngIf=\"hint\" type=\"label\" class=\"mt-2\">\n    {{ hint }}\n  </app-text>\n</div>\n", styles: [".profile-photo{border-radius:.5rem;box-shadow:0 0 .25rem #0000001a;width:100%;max-width:200px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { photoInput: [{
                type: ViewChild,
                args: ['photoInput']
            }], label: [{
                type: Input
            }], hint: [{
                type: Input
            }], photo: [{
                type: Input
            }], accept: [{
                type: Input
            }], iconName: [{
                type: Input
            }], resetFlag: [{
                type: Input
            }], control: [{
                type: Input
            }], photoSelected: [{
                type: Output
            }], preview: [{
                type: Input
            }] } });

class AppRadioButtonComponent {
    constructor() {
        this.multi = false;
        this.classes = '';
        this.changed = new EventEmitter();
    }
    onSelectionChange(event) {
        this.changed.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppRadioButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppRadioButtonComponent, isStandalone: true, selector: "app-radio-button", inputs: { control: "control", label: "label", value: "value", defaultSelected: "defaultSelected", multi: "multi", optionsList: "optionsList", classes: "classes" }, outputs: { changed: "changed" }, ngImport: i0, template: "<ng-container *ngIf=\"!multi\">\n  <mat-radio-button\n    [attr.name]=\"label\"\n    [attr.value]=\"value\"\n    [checked]=\"defaultSelected === value\"\n    (change)=\"onSelectionChange($event)\"\n  >\n    {{ label }}\n  </mat-radio-button>\n</ng-container>\n\n<ng-container *ngIf=\"multi\">\n  <mat-radio-group (change)=\"onSelectionChange($event)\" [ngClass]=\"classes\" [formControl]=\"control\">\n    <mat-radio-button *ngFor=\"let option of optionsList\" [value]=\"option.value\">\n      {{ option.label }}\n    </mat-radio-button>\n  </mat-radio-group>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3$4.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i3$4.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-radio-button', imports: [CommonModule, ReactiveFormsModule,
                        MatRadioModule], template: "<ng-container *ngIf=\"!multi\">\n  <mat-radio-button\n    [attr.name]=\"label\"\n    [attr.value]=\"value\"\n    [checked]=\"defaultSelected === value\"\n    (change)=\"onSelectionChange($event)\"\n  >\n    {{ label }}\n  </mat-radio-button>\n</ng-container>\n\n<ng-container *ngIf=\"multi\">\n  <mat-radio-group (change)=\"onSelectionChange($event)\" [ngClass]=\"classes\" [formControl]=\"control\">\n    <mat-radio-button *ngFor=\"let option of optionsList\" [value]=\"option.value\">\n      {{ option.label }}\n    </mat-radio-button>\n  </mat-radio-group>\n</ng-container>\n" }]
        }], ctorParameters: () => [], propDecorators: { control: [{
                type: Input
            }], label: [{
                type: Input
            }], value: [{
                type: Input
            }], defaultSelected: [{
                type: Input
            }], multi: [{
                type: Input
            }], optionsList: [{
                type: Input
            }], classes: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class AppSearchComponent {
    constructor() {
        this.searchLabel = 'Search';
        this.search = new EventEmitter();
        this.searchKey = '';
        this.searchSubject = new Subject();
    }
    ngOnInit() {
        this.searchSubject.pipe(debounceTime(1000)).subscribe((query) => {
            this.search.emit(query);
        });
    }
    onSearch(event) {
        const inputElement = event.target;
        const query = inputElement?.value ?? '';
        this.searchSubject.next(query);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppSearchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppSearchComponent, isStandalone: true, selector: "app-search", inputs: { searchLabel: "searchLabel", searchKey: "searchKey" }, outputs: { search: "search" }, ngImport: i0, template: "<mat-form-field class=\"app-search\" appearance=\"outline\">\n  <mat-label class=\"custom-label\">{{ searchLabel }}</mat-label>\n  <input matInput [(ngModel)]=\"searchKey\" (input)=\"onSearch($event)\" />\n  <mat-icon matSuffix>search</mat-icon>\n</mat-form-field>\n", styles: ["::ng-deep .app-search .mat-mdc-form-field-subscript-wrapper{display:none!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2$3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3$3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-search', imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule], template: "<mat-form-field class=\"app-search\" appearance=\"outline\">\n  <mat-label class=\"custom-label\">{{ searchLabel }}</mat-label>\n  <input matInput [(ngModel)]=\"searchKey\" (input)=\"onSearch($event)\" />\n  <mat-icon matSuffix>search</mat-icon>\n</mat-form-field>\n", styles: ["::ng-deep .app-search .mat-mdc-form-field-subscript-wrapper{display:none!important}\n"] }]
        }], propDecorators: { searchLabel: [{
                type: Input
            }], search: [{
                type: Output
            }], searchKey: [{
                type: Input
            }] } });

class AppSelectComponent {
    constructor(translate) {
        this.translate = translate;
        this.label = '';
        this.searchLabel = '';
        this.showLabel = false;
        this.showSearchBox = true;
        this.showAddBtn = false;
        this.resetFlag = false;
        this.loading = false;
        this.hintStart = undefined;
        this.hintEnd = undefined;
        this.noOptions = 'No data found';
        // Fixed Options & Local Search
        this.dynamicOptions = true;
        this.compareKey = 'pk';
        this.onOptionSelect = new EventEmitter();
        this.searchKey = new EventEmitter();
        this.addBtnClicked = new EventEmitter();
        this.optionsList = [];
        this.searchQuery = '';
        this.customStyles = {
            width: '100%',
        };
        this.isAddBtnClicked = false;
        this.originalList = [];
        this.compareOptions = (a, b) => {
            if (!a || !b)
                return false;
            return a[this.compareKey] === b[this.compareKey];
        };
        this.searchLabel = this.translate.instant(this.searchLabel || 'search');
    }
    ngOnChanges(changes) {
        if (changes['resetFlag'] && this.resetFlag) {
            this.resetSelection();
        }
    }
    ngOnInit() {
        if (!this.getOption) {
            this.getOption = (option) => option.name;
        }
    }
    get btnIcon() {
        return this.addBtnDetails?.icon || 'add';
    }
    updateSearchQuery(query) {
        const searchValue = typeof query === 'string'
            ? query
            : query.target?.value || '';
        if (this.dynamicOptions) {
            this.searchKey?.emit(searchValue);
        }
        else {
            if (this.originalList.length === 0) {
                this.originalList = this.optionsList;
            }
            this.optionsList = this.originalList.filter(option => this.getOption(option)
                .toLowerCase()
                .includes(searchValue.toLowerCase()));
        }
    }
    onChangeSelection(event) {
        this.onOptionSelect.emit(event.value);
    }
    resetSelection() {
        // this.selectedOption = null;
    }
    onAddBtnClicked() {
        this.isAddBtnClicked = !this.isAddBtnClicked;
        // this.selectedOption = null;
        this.matSelect?.close();
        this.addBtnClicked.emit(this.isAddBtnClicked);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppSelectComponent, deps: [{ token: i1$3.TranslateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: AppSelectComponent, isStandalone: true, selector: "app-select", inputs: { label: "label", searchLabel: "searchLabel", selectAllLabel: "selectAllLabel", showLabel: "showLabel", showSearchBox: "showSearchBox", showAddBtn: "showAddBtn", addBtnDetails: "addBtnDetails", resetFlag: "resetFlag", getOption: "getOption", control: "control", loading: "loading", hintStart: "hintStart", hintEnd: "hintEnd", noOptions: "noOptions", dynamicOptions: "dynamicOptions", compareKey: "compareKey", optionsList: "optionsList", searchQuery: "searchQuery" }, outputs: { onOptionSelect: "onOptionSelect", searchKey: "searchKey", addBtnClicked: "addBtnClicked" }, viewQueries: [{ propertyName: "matSelect", first: true, predicate: MatSelect, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-form-field appearance=\"outline\">\n  <mat-label *ngIf=\"showLabel\">{{ label }}</mat-label>\n  <mat-select\n    [placeholder]=\"label\"\n    [formControl]=\"control\"\n    [compareWith]=\"compareOptions\"\n    (selectionChange)=\"onChangeSelection($event)\"\n    [ngClass]=\"loading ? 'select-list-loading' : ''\"\n  >\n    <!-- (closed)=\"resetSearch()\" -->\n    <div *ngIf=\"showAddBtn\" class=\"row g-0 px-2 mb-2\">\n      <app-button\n        class=\"col-12\"\n        [customStyles]=\"customStyles\"\n        type=\"flat\"\n        [icon]=\"btnIcon\"\n        [text]=\"addBtnDetails.text\"\n        (clicked)=\"onAddBtnClicked()\"\n      ></app-button>\n    </div>\n    <div *ngIf=\"showSearchBox\" class=\"row g-0 px-2\">\n      <app-search\n        class=\"col-12 mb-2\"\n        [searchKey]=\"searchQuery\"\n        [searchLabel]=\"searchLabel\"\n        (search)=\"updateSearchQuery($event)\"\n      ></app-search>\n    </div>\n    <mat-option *ngFor=\"let option of optionsList\" [value]=\"option\">\n      {{ getOption(option) }}\n    </mat-option>\n    <mat-option\n      *ngIf=\"!!optionsList && optionsList.length === 0\"\n      [disabled]=\"true\"\n    >\n      {{ noOptions }}\n    </mat-option>\n  </mat-select>\n  <ng-container *ngIf=\"loading\">\n    <div matSuffix class=\"loading-spinner\">\n      <mat-spinner diameter=\"18\"></mat-spinner>\n    </div>\n  </ng-container>\n  <mat-hint *ngIf=\"hintStart\" align=\"start\">\n    {{ hintStart }}\n  </mat-hint>\n  <mat-hint *ngIf=\"hintEnd\" align=\"end\">\n    {{ hintEnd }}\n  </mat-hint>\n  <mat-error *ngIf=\"control.touched && control.hasError('required')\">\n    {{ label }} - {{ \"required\" | translate }}\n  </mat-error>\n</mat-form-field>\n", styles: [".loading-spinner{position:absolute;top:50%;right:8px;transform:translateY(-50%);pointer-events:none}mat-spinner{width:18px;height:18px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2$3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2$3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2$3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i5.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "component", type: AppButtonComponent, selector: "app-button", inputs: ["type", "eventType", "color", "customStyles", "text", "icon", "loading", "disabled", "isAction", "redirectUrl", "redirectTarget"], outputs: ["clicked"] }, { kind: "component", type: AppSearchComponent, selector: "app-search", inputs: ["searchLabel", "searchKey"], outputs: ["search"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AppSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-select', imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatProgressSpinnerModule, TranslateModule, AppButtonComponent, AppSearchComponent], template: "<mat-form-field appearance=\"outline\">\n  <mat-label *ngIf=\"showLabel\">{{ label }}</mat-label>\n  <mat-select\n    [placeholder]=\"label\"\n    [formControl]=\"control\"\n    [compareWith]=\"compareOptions\"\n    (selectionChange)=\"onChangeSelection($event)\"\n    [ngClass]=\"loading ? 'select-list-loading' : ''\"\n  >\n    <!-- (closed)=\"resetSearch()\" -->\n    <div *ngIf=\"showAddBtn\" class=\"row g-0 px-2 mb-2\">\n      <app-button\n        class=\"col-12\"\n        [customStyles]=\"customStyles\"\n        type=\"flat\"\n        [icon]=\"btnIcon\"\n        [text]=\"addBtnDetails.text\"\n        (clicked)=\"onAddBtnClicked()\"\n      ></app-button>\n    </div>\n    <div *ngIf=\"showSearchBox\" class=\"row g-0 px-2\">\n      <app-search\n        class=\"col-12 mb-2\"\n        [searchKey]=\"searchQuery\"\n        [searchLabel]=\"searchLabel\"\n        (search)=\"updateSearchQuery($event)\"\n      ></app-search>\n    </div>\n    <mat-option *ngFor=\"let option of optionsList\" [value]=\"option\">\n      {{ getOption(option) }}\n    </mat-option>\n    <mat-option\n      *ngIf=\"!!optionsList && optionsList.length === 0\"\n      [disabled]=\"true\"\n    >\n      {{ noOptions }}\n    </mat-option>\n  </mat-select>\n  <ng-container *ngIf=\"loading\">\n    <div matSuffix class=\"loading-spinner\">\n      <mat-spinner diameter=\"18\"></mat-spinner>\n    </div>\n  </ng-container>\n  <mat-hint *ngIf=\"hintStart\" align=\"start\">\n    {{ hintStart }}\n  </mat-hint>\n  <mat-hint *ngIf=\"hintEnd\" align=\"end\">\n    {{ hintEnd }}\n  </mat-hint>\n  <mat-error *ngIf=\"control.touched && control.hasError('required')\">\n    {{ label }} - {{ \"required\" | translate }}\n  </mat-error>\n</mat-form-field>\n", styles: [".loading-spinner{position:absolute;top:50%;right:8px;transform:translateY(-50%);pointer-events:none}mat-spinner{width:18px;height:18px}\n"] }]
        }], ctorParameters: () => [{ type: i1$3.TranslateService }], propDecorators: { label: [{
                type: Input
            }], searchLabel: [{
                type: Input
            }], selectAllLabel: [{
                type: Input
            }], showLabel: [{
                type: Input
            }], showSearchBox: [{
                type: Input
            }], showAddBtn: [{
                type: Input
            }], addBtnDetails: [{
                type: Input
            }], resetFlag: [{
                type: Input
            }], getOption: [{
                type: Input
            }], control: [{
                type: Input
            }], loading: [{
                type: Input
            }], hintStart: [{
                type: Input
            }], hintEnd: [{
                type: Input
            }], noOptions: [{
                type: Input
            }], dynamicOptions: [{
                type: Input
            }], compareKey: [{
                type: Input
            }], onOptionSelect: [{
                type: Output
            }], searchKey: [{
                type: Output
            }], addBtnClicked: [{
                type: Output
            }], optionsList: [{
                type: Input
            }], matSelect: [{
                type: ViewChild,
                args: [MatSelect]
            }], searchQuery: [{
                type: Input
            }] } });

//Core Component Public api

class TruncatePipe {
    transform(value, limit) {
        if (!value) {
            return '';
        }
        return value.length < limit ? value : value.slice(0, limit) + '...';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TruncatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.0", ngImport: i0, type: TruncatePipe, isStandalone: true, name: "truncate" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TruncatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'truncate',
                }]
        }] });

//Core Pipe Public api

const getAuthUser = createAction('[Auth] Get Auth User');
const getAuthUserData = createAction('[Auth] Get Auth User Data', props());
const getUserInfo = createAction('[Auth] Get User Info');
const getUserInfoSuccess = createAction('[Auth] Get User Info Success', props());
const getUserInfoFailure = createAction('[Auth] Get User Info Failure', props());
const getOrganizationSettings = createAction('[Auth] Get Organization Settings');
const getOrganizationSettingsSuccess = createAction('[Auth] Get Organization Settings Success', props());
const getOrganizationSettingsFailure = createAction('[Auth] Get Organization Settings Failure', props());
const login = createAction('[Auth] Login', props());
const loginSuccess = createAction('[Auth] Login Success', props());
const loginFailure = createAction('[Auth] Login Failure', props());
const logout = createAction('[Auth] Logout');
const verifyOtp = createAction('[Auth] Verify Otp', props());
const resendOtp = createAction('[Auth] Resend Otp', props());
const resendOtpSuccess = createAction('[Auth] Resend Otp Success');
const resendOtpFailure = createAction('[Auth] Resend Otp Failure', props());
const resetPassword = createAction('[Auth] Reset Password', props());
const resetPasswordSuccess = createAction('[Auth] Reset Password Success', props());
const resetPasswordFailure = createAction('[Auth] Reset Password Failure', props());
const setLoginData = createAction('[Auth] Set Login Data', props());
const clearLoginData = createAction('[Auth] Clear Login Data');
// Profile
const updateUserProfile = createAction('[User] Update User Profile', props());
const uploadUserProfilePhoto = createAction('[User] Upload User Profile Photo', props());

class AuthInterceptor {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.isUnauthorizedRedirecting = false;
    }
    intercept(req, next) {
        return next.handle(req).pipe(catchError((error) => {
            if (error.status === 401 && !this.isUnauthorizedRedirecting) {
                this.isUnauthorizedRedirecting = true;
                this.store.dispatch(logout());
                this.router.navigate(['/login']);
            }
            return throwError(() => error);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AuthInterceptor, deps: [{ token: i1$2.Router }, { token: i2.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AuthInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: AuthInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.Router }, { type: i2.Store }] });

class ErrorHandlerService {
    constructor(translate) {
        this.translate = translate;
    }
    handleError(error) {
        let errorMessage = this.translate.instant('error.unknownError');
        if (error.error instanceof ErrorEvent) {
            // Client-side or network error
            errorMessage =
                this.translate.instant('error.clientSideError') + error.error.message;
        }
        else {
            // Server-side error
            switch (error.status) {
                case 400:
                    try {
                        errorMessage = error.error
                            ? this.parseToString(error.error)
                            : this.translate.instant('error.badRequest');
                    }
                    catch (_) {
                        errorMessage = this.translate.instant('error.badRequest');
                    }
                    break;
                case 401:
                    errorMessage = this.translate.instant('error.401');
                    this.handleUnauthorized();
                    break;
                case 404:
                    errorMessage = this.translate.instant('error.404');
                    break;
                case 500:
                    errorMessage = this.translate.instant('error.500');
                    break;
                default:
                    errorMessage =
                        this.translate.instant('error.serverError') + error.message;
            }
        }
        return errorMessage;
    }
    parseToString(error) {
        return typeof error === 'string' ? error : JSON.stringify(error);
    }
    async handleUnauthorized() {
        window.location.reload();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ErrorHandlerService, deps: [{ token: i1$3.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ErrorHandlerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: ErrorHandlerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$3.TranslateService }] });

const selectTokenAuthState = createFeatureSelector('auth');
const selectAuthState = createFeatureSelector('login-data');
const selectIsUserLoggedIn = createSelector(selectTokenAuthState, (state) => !!(state.authInitialized &&
    state.auth?.token &&
    state.user?.pk &&
    state.organization?.pk &&
    // Just to ensure that the organization settings are loaded
    state.organization?.settings?.enable_rewards));
const selectAuth = createSelector(selectTokenAuthState, (state) => state.auth);
const selectAuthToken = createSelector(selectTokenAuthState, (state) => state.auth?.token);
const selectAuthInitialized = createSelector(selectTokenAuthState, (state) => state.authInitialized);
// User Info
const selectUser = createSelector(selectTokenAuthState, (state) => state?.user);
const selectUserInfoInitialized = createSelector(selectTokenAuthState, (state) => state.userInitialized);
// User Organization
const selectUserOrganization = createSelector(selectTokenAuthState, (state) => state?.organization);
const selectUserOrganizationInitialized = createSelector(selectTokenAuthState, (state) => state.organizationInitialized);
// Login
const selectLogin = createSelector(selectTokenAuthState, (state) => state.auth || {});
const selectLoggingIn = createSelector(selectTokenAuthState, (state) => state.loggingIn);
const selectLoginSuccess = createSelector(selectTokenAuthState, (state) => state.auth);
const selectLoginData = createSelector(selectAuthState, (state) => state.loginData);
const selectLoginError = createSelector(selectTokenAuthState, (state) => state.loginError);
// Logout
const selectLoggingOut = createSelector(selectTokenAuthState, (state) => state.loggingOut);

class HttpService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this.hostUrl = "environment.url.app";
        this.getAuthToken().subscribe((token) => {
            this.token = token;
        });
    }
    getAuthToken() {
        return this.store.pipe(select(selectAuthToken), map((auth) => {
            return auth;
        }));
    }
    _setOptions({ passToken = true, ignoreJsonContentType, multipartFormData, params, headers, }) {
        let allHeaders = new HttpHeaders({ 'Accept-Language': 'en' });
        if (passToken && !!this.token) {
            allHeaders = allHeaders.set('Authorization', `Token ${this.token}`);
        }
        if (!ignoreJsonContentType) {
            allHeaders = allHeaders.set('Content-Type', 'application/json');
        }
        if (multipartFormData) {
            allHeaders = allHeaders.set('Content-Type', 'multipart/form-data');
        }
        // Add additional headers if provided
        if (headers) {
            for (const key in headers) {
                if (headers.hasOwnProperty(key)) {
                    allHeaders = allHeaders.set(key, headers[key]);
                }
            }
        }
        // Prepare HttpParams
        let allParams = new HttpParams();
        if (params) {
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    allParams = allParams.set(key, params[key]);
                }
            }
        }
        this.httpOptions = {
            params: allParams,
            headers: allHeaders,
        };
    }
    get(url, { passToken = true, ignoreJsonContentType, multipartFormData, params, headers, } = {}) {
        this._setOptions({
            passToken,
            ignoreJsonContentType,
            multipartFormData,
            params,
            headers,
        });
        if (passToken && !this.token) {
            return of({ error: 'No token found' });
        }
        return this.http.get(this.hostUrl + url, {
            params: this.httpOptions.params,
            headers: this.httpOptions.headers,
        });
    }
    post(url, body, { passToken, ignoreJsonContentType, multipartFormData, params, headers, } = {}) {
        this._setOptions({
            passToken,
            ignoreJsonContentType,
            multipartFormData,
            headers,
            params,
        });
        if (passToken && !this.token) {
            return of({ error: 'No token found' });
        }
        return this.http.post(this.hostUrl + url, body, {
            params: this.httpOptions.params,
            headers: this.httpOptions.headers,
        });
    }
    put(url, body, { passToken, ignoreJsonContentType, multipartFormData, headers, params, }) {
        this._setOptions({
            passToken,
            ignoreJsonContentType,
            multipartFormData,
            headers,
            params,
        });
        if (passToken && !this.token) {
            return of({ error: 'No token found' });
        }
        return this.http.put(this.hostUrl + url, body, {
            params: this.httpOptions.params,
            headers: this.httpOptions.headers,
        });
    }
    patch(url, body, { passToken, ignoreJsonContentType, multipartFormData, params, headers, }) {
        this._setOptions({
            passToken,
            ignoreJsonContentType,
            multipartFormData,
            headers,
            params,
        });
        if (passToken && !this.token) {
            return of({ error: 'No token found' });
        }
        return this.http.patch(this.hostUrl + url, body, {
            params: this.httpOptions.params,
            headers: this.httpOptions.headers,
        });
    }
    delete(url, { passToken, ignoreJsonContentType, multipartFormData, params, headers, }) {
        this._setOptions({
            passToken,
            ignoreJsonContentType,
            multipartFormData,
            headers,
            params,
        });
        if (passToken && !this.token) {
            return of({ error: 'No token found' });
        }
        return this.http.delete(this.hostUrl + url, {
            params: this.httpOptions.params,
            headers: this.httpOptions.headers,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: HttpService, deps: [{ token: i1$5.HttpClient }, { token: i2.Store }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: HttpService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$5.HttpClient }, { type: i2.Store }] });

class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.currentLanguageSubject = new BehaviorSubject(this.getSavedLanguage() || 'en');
        this.currentLanguage$ = this.currentLanguageSubject.asObservable();
        const defaultLang = this.currentLanguageSubject.value;
        this.translate.setDefaultLang(defaultLang);
        this.translate.use(defaultLang);
    }
    changeLanguage(language) {
        this.translate.use(language).subscribe({
            next: () => {
                this.currentLanguageSubject.next(language);
                this.saveLanguage(language);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            },
            error: (err) => {
                // console.error(`Failed to load translations for ${language}:`, err);
            },
        });
    }
    saveLanguage(language) {
        localStorage.setItem('$LANG', language);
    }
    getSavedLanguage() {
        try {
            return localStorage.getItem('$LANG');
        }
        catch (e) {
            return 'en';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: LanguageService, deps: [{ token: i1$3.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: LanguageService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: LanguageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$3.TranslateService }] });

class TranslationResolverService {
    constructor(translate, http, languageService) {
        this.translate = translate;
        this.http = http;
        this.languageService = languageService;
    }
    resolve(route, state) {
        return this.languageService.currentLanguage$.pipe(switchMap((language) => {
            const appLoader = new TranslateHttpLoader(this.http, '/assets/i18n/', '.json');
            const modulePath = route.data['translationPath'];
            const moduleLoader = new TranslateHttpLoader(this.http, `/assets/i18n/${modulePath}/`, '.json');
            const appTranslation = appLoader.getTranslation(language);
            const moduleTranslation = moduleLoader.getTranslation(language);
            return forkJoin([appTranslation, moduleTranslation]).pipe(map$1(([appTranslations, moduleTranslations]) => {
                const allTranslations = deepMerge(appTranslations, moduleTranslations);
                this.translate.setTranslation(language, allTranslations, true);
                this.translate.use(language);
                return true;
            }));
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TranslationResolverService, deps: [{ token: i1$3.TranslateService }, { token: i1$5.HttpClient }, { token: LanguageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TranslationResolverService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TranslationResolverService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1$3.TranslateService }, { type: i1$5.HttpClient }, { type: LanguageService }] });
function deepMerge(target, source) {
    // Iterate over all keys in the source object
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            const targetValue = target[key];
            const sourceValue = source[key];
            // Check if both target and source values are objects and not null
            if (typeof targetValue === 'object' &&
                targetValue !== null &&
                typeof sourceValue === 'object' &&
                sourceValue !== null) {
                // Recursively merge nested objects
                target[key] = deepMerge(targetValue, sourceValue);
            }
            else {
                // Otherwise, assign the source value directly
                target[key] = sourceValue;
            }
        }
    }
    return target;
}

//Core Service Public api

const RWDZ_CORE_THEME = {
    FONT_SIZE: '--rwdz-font-size',
    FONT_FAMILY: '--rwdz-font-family',
    COLOR_PRIMARY: '--rwdz-color-primary',
    COLOR_SUCCESS: '--rwdz-color-success',
    COLOR_WARNING: '--rwdz-color-warning',
    COLOR_ERROR: '--rwdz-color-error',
    COLOR_INFO: '--rwdz-color-info',
    COLOR_TEXT: '--rwdz-color-text',
    COLOR_LABEL: '--rwdz-color-label',
    COLOR_BACKGROUND: '--rwdz-color-background',
    COLOR_BORDER: '--rwdz-color-border',
    COLOR_WHITE: '--rwdz-color-white',
    BORDER_RADIUS: '--rwdz-border-radius'
};

/**
 * Generated bundle index. Do not edit.
 */

export { AppAlertsComponent, AppBackButtonComponent, AppButtonComponent, AppCardComponent, AppCheckboxComponent, AppIconComponent, AppImageComponent, AppInputComponent, AppModalComponent, AppPhotoUploadComponent, AppRadioButtonComponent, AppSearchComponent, AppSelectComponent, AppSpinnerComponent, AppTextComponent, AuthInterceptor, BackNavigationService, ErrorHandlerService, HttpService, LanguageService, RWDZ_CORE_THEME, TranslationResolverService, TruncatePipe };
//# sourceMappingURL=rwdz-core.mjs.map
