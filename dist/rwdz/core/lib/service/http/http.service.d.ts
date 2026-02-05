import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as i0 from "@angular/core";
interface Options {
    passToken?: boolean;
    ignoreJsonContentType?: boolean;
    multipartFormData?: boolean;
    params?: {
        [key: string]: string;
    };
    headers?: {
        [key: string]: string;
    };
}
export declare class HttpService {
    private http;
    private store;
    token: string | null | undefined;
    httpOptions: any;
    hostUrl: string;
    constructor(http: HttpClient, store: Store<{}>);
    getAuthToken(): Observable<string | null | undefined>;
    private _setOptions;
    get<T>(url: string, { passToken, ignoreJsonContentType, multipartFormData, params, headers, }?: Options): Observable<T>;
    post<T>(url: string, body: any, { passToken, ignoreJsonContentType, multipartFormData, params, headers, }?: Options): Observable<T>;
    put<T>(url: string, body: any, { passToken, ignoreJsonContentType, multipartFormData, headers, params, }: Options): Observable<T>;
    patch<T>(url: string, body: any, { passToken, ignoreJsonContentType, multipartFormData, params, headers, }: Options): Observable<T>;
    delete<T>(url: string, { passToken, ignoreJsonContentType, multipartFormData, params, headers, }: Options): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpService>;
}
export {};
