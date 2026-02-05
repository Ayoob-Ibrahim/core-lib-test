import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AuthInterceptor implements HttpInterceptor {
    private router;
    private store;
    private isUnauthorizedRedirecting;
    constructor(router: Router, store: Store);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthInterceptor>;
}
