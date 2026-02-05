import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class AppInputComponent {
    label: string;
    control: FormControl;
    type: string;
    placeholder: string;
    prefixIcon: string;
    suffixIcon: string;
    required: boolean;
    hintStart: string | undefined;
    hintEnd: string | undefined;
    iconChange: EventEmitter<any>;
    ngOnInit(): void;
    valueChange: EventEmitter<string>;
    onClickSuffix(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppInputComponent, "app-input", never, { "label": { "alias": "label"; "required": false; }; "control": { "alias": "control"; "required": false; }; "type": { "alias": "type"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "prefixIcon": { "alias": "prefixIcon"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "required": { "alias": "required"; "required": false; }; "hintStart": { "alias": "hintStart"; "required": false; }; "hintEnd": { "alias": "hintEnd"; "required": false; }; }, { "iconChange": "iconChange"; "valueChange": "valueChange"; }, never, never, true, never>;
}
