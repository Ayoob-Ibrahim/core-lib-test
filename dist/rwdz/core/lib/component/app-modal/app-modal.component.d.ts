import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class AppModalComponent {
    private dialogRef;
    title: string;
    isCloseIcon: boolean;
    closeButton: boolean;
    component: any;
    isTopBox: boolean;
    customStyles: {
        [key: string]: any;
    };
    constructor(dialogRef: MatDialogRef<AppModalComponent>, data: string, maxHeight: string, maxWidth: string);
    closeDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppModalComponent, "app-modal", never, { "title": { "alias": "title"; "required": false; }; "isCloseIcon": { "alias": "isCloseIcon"; "required": false; }; "closeButton": { "alias": "closeButton"; "required": false; }; "component": { "alias": "component"; "required": false; }; "isTopBox": { "alias": "isTopBox"; "required": false; }; }, {}, never, ["[dialog-content]", "[dialog-actions]"], true, never>;
}
