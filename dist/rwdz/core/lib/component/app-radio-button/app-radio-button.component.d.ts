import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class AppRadioButtonComponent {
    control: FormControl;
    label?: string;
    value?: string;
    defaultSelected: any;
    multi?: boolean;
    optionsList?: any[];
    classes: string;
    changed: EventEmitter<boolean>;
    constructor();
    onSelectionChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppRadioButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppRadioButtonComponent, "app-radio-button", never, { "control": { "alias": "control"; "required": false; }; "label": { "alias": "label"; "required": false; }; "value": { "alias": "value"; "required": false; }; "defaultSelected": { "alias": "defaultSelected"; "required": false; }; "multi": { "alias": "multi"; "required": false; }; "optionsList": { "alias": "optionsList"; "required": false; }; "classes": { "alias": "classes"; "required": false; }; }, { "changed": "changed"; }, never, never, true, never>;
}
