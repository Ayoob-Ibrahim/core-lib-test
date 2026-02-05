import { ElementRef, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class AppPhotoUploadComponent {
    photoInput: ElementRef;
    label: string;
    hint: string;
    photo: string | null;
    accept: string;
    iconName: string;
    resetFlag: boolean;
    control: FormControl;
    photoSelected: EventEmitter<any>;
    preview: string | ArrayBuffer | null | undefined;
    constructor();
    ngOnInit(): void;
    triggerPhotoInput(): void;
    onPhotoSelected(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppPhotoUploadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppPhotoUploadComponent, "app-photo-upload", never, { "label": { "alias": "label"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "photo": { "alias": "photo"; "required": false; }; "accept": { "alias": "accept"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "resetFlag": { "alias": "resetFlag"; "required": false; }; "control": { "alias": "control"; "required": false; }; "preview": { "alias": "preview"; "required": false; }; }, { "photoSelected": "photoSelected"; }, never, never, true, never>;
}
