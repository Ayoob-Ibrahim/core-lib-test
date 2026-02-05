import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../service/language-translation/language.service';
import * as i0 from "@angular/core";
export declare class TranslationResolverService implements Resolve<any> {
    private translate;
    private http;
    private languageService;
    constructor(translate: TranslateService, http: HttpClient, languageService: LanguageService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationResolverService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslationResolverService>;
}
