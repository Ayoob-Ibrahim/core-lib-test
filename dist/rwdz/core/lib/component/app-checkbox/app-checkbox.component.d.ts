import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class AppCheckboxComponent {
    private translate;
    control: FormControl;
    label?: any;
    labelBold?: boolean;
    showCheckbox?: boolean;
    showErrorAlert?: boolean;
    changed: EventEmitter<boolean>;
    constructor(translate: TranslateService);
    onChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppCheckboxComponent, "app-checkbox", never, { "control": { "alias": "control"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelBold": { "alias": "labelBold"; "required": false; }; "showCheckbox": { "alias": "showCheckbox"; "required": false; }; "showErrorAlert": { "alias": "showErrorAlert"; "required": false; }; }, { "changed": "changed"; }, never, never, true, never>;
}
