import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AppButtonComponent {
    type: 'raised' | 'outline' | 'flat' | 'basic' | 'icon' | 'fab' | 'mini-fab' | '';
    eventType: 'button' | 'submit';
    color: string;
    customStyles: {
        [key: string]: string;
    };
    text: string;
    icon: string | null | undefined;
    loading: boolean | null;
    disabled: boolean | null;
    isAction: boolean | null;
    redirectUrl: string | any;
    redirectTarget: string;
    clicked: EventEmitter<void>;
    colorClass: string;
    ngOnInit(): void;
    private getColorClass;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppButtonComponent, "app-button", never, { "type": { "alias": "type"; "required": false; }; "eventType": { "alias": "eventType"; "required": false; }; "color": { "alias": "color"; "required": false; }; "customStyles": { "alias": "customStyles"; "required": false; }; "text": { "alias": "text"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "isAction": { "alias": "isAction"; "required": false; }; "redirectUrl": { "alias": "redirectUrl"; "required": false; }; "redirectTarget": { "alias": "redirectTarget"; "required": false; }; }, { "clicked": "clicked"; }, never, never, true, never>;
}
