import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class LanguageService {
    private translate;
    private currentLanguageSubject;
    currentLanguage$: import("rxjs").Observable<string>;
    constructor(translate: TranslateService);
    changeLanguage(language: string): void;
    private saveLanguage;
    private getSavedLanguage;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LanguageService>;
}
