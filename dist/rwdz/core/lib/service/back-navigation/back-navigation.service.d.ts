import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class BackNavigationService {
    private router;
    private location;
    private backRoute;
    private previousUrl;
    constructor(router: Router, location: Location);
    setBackRoute(route: string): void;
    goBack(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackNavigationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BackNavigationService>;
}
