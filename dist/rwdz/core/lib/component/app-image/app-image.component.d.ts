import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AppImageComponent {
    src: string;
    height: string;
    width: string;
    ngClass: string;
    defaultImage: string;
    customStyles: {
        [key: string]: string;
    };
    clicked: EventEmitter<void>;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppImageComponent, "app-image", never, { "src": { "alias": "src"; "required": false; }; "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; "ngClass": { "alias": "ngClass"; "required": false; }; "defaultImage": { "alias": "defaultImage"; "required": false; }; "customStyles": { "alias": "customStyles"; "required": false; }; }, { "clicked": "clicked"; }, never, never, true, never>;
}
