import { BackNavigationService } from '../../service/back-navigation/back-navigation.service';
import * as i0 from "@angular/core";
export declare class AppBackButtonComponent {
    private backNavigationService;
    color: string;
    constructor(backNavigationService: BackNavigationService);
    onClick(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppBackButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppBackButtonComponent, "app-back-button", never, { "color": { "alias": "color"; "required": false; }; }, {}, never, never, true, never>;
}
