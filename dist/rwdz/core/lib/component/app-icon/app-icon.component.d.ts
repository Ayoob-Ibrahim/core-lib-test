import { TooltipPosition } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
export declare class AppIconComponent {
    iconName: string;
    color: string;
    size: number;
    toolTipPosition: TooltipPosition | undefined;
    toolTipText: string;
    get iconContainerStyle(): {
        'background-color': string;
    } | {
        'background-color'?: undefined;
    };
    get iconStyle(): {
        color: string;
        'font-size': string;
        width: string;
        height: string;
    } | {
        color?: undefined;
        'font-size'?: undefined;
        width?: undefined;
        height?: undefined;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<AppIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppIconComponent, "app-icon", never, { "iconName": { "alias": "iconName"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; "toolTipPosition": { "alias": "toolTipPosition"; "required": false; }; "toolTipText": { "alias": "toolTipText"; "required": false; }; }, {}, never, never, true, never>;
}
