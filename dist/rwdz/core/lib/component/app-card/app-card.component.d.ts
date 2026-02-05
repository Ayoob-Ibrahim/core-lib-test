import * as i0 from "@angular/core";
export declare class AppCardComponent {
    hasHeader: boolean;
    hasFooter: boolean;
    hasActions: boolean;
    removeContentPadding: boolean;
    actionsAlign: 'start' | 'center' | 'end';
    customStyles: {
        [key: string]: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<AppCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppCardComponent, "app-card", never, { "hasHeader": { "alias": "hasHeader"; "required": false; }; "hasFooter": { "alias": "hasFooter"; "required": false; }; "hasActions": { "alias": "hasActions"; "required": false; }; "removeContentPadding": { "alias": "removeContentPadding"; "required": false; }; "actionsAlign": { "alias": "actionsAlign"; "required": false; }; "customStyles": { "alias": "customStyles"; "required": false; }; }, {}, never, ["[card-header]", "[card-content]", "[card-footer]", "[card-actions]"], true, never>;
}
