import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable, firstValueFrom, of } from 'rxjs';
import { Store, select } from '@ngrx/store';

// import { environment } from 'src/environments/environment';

import { selectAuthToken } from '../../store/auth/auth.selector';

interface Options {
  passToken?: boolean;
  ignoreJsonContentType?: boolean;
  multipartFormData?: boolean;
  params?: { [key: string]: string };
  headers?: { [key: string]: string };
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  token: string | null | undefined;
  httpOptions: any;
  hostUrl: string = "environment.url.app";

  constructor(private http: HttpClient, private store: Store<{}>) {
    this.getAuthToken().subscribe((token) => {
      this.token = token;
    });
  }

  getAuthToken(): Observable<string | null | undefined> {
    return this.store.pipe(
      select(selectAuthToken),
      map((auth) => {
        return auth;
      })
    );
  }

  private _setOptions({
    passToken = true,
    ignoreJsonContentType,
    multipartFormData,
    params,
    headers,
  }: Options) {
    let allHeaders: HttpHeaders = new HttpHeaders({ 'Accept-Language': 'en' });

    if (passToken && !!this.token) {
      allHeaders = allHeaders.set('Authorization', `Token ${this.token}`);
    }

    if (!ignoreJsonContentType) {
      allHeaders = allHeaders.set('Content-Type', 'application/json');
    }

    if (multipartFormData) {
      allHeaders = allHeaders.set('Content-Type', 'multipart/form-data');
    }

    // Add additional headers if provided
    if (headers) {
      for (const key in headers) {
        if (headers.hasOwnProperty(key)) {
          allHeaders = allHeaders.set(key, headers[key]);
        }
      }
    }

    // Prepare HttpParams
    let allParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          allParams = allParams.set(key, params[key]);
        }
      }
    }

    this.httpOptions = {
      params: allParams,
      headers: allHeaders,
    };
  }

  get<T>(
    url: string,
    {
      passToken = true,
      ignoreJsonContentType,
      multipartFormData,
      params,
      headers,
    }: Options = {}
  ): Observable<T> {
    this._setOptions({
      passToken,
      ignoreJsonContentType,
      multipartFormData,
      params,
      headers,
    });

    if (passToken && !this.token) {
      return of({ error: 'No token found' } as unknown as T);
    }
    return this.http.get<T>(this.hostUrl + url, {
      params: this.httpOptions.params,
      headers: this.httpOptions.headers,
    });
  }

  post<T>(
    url: string,
    body: any,
    {
      passToken,
      ignoreJsonContentType,
      multipartFormData,
      params,
      headers,
    }: Options = {}
  ): Observable<T> {
    this._setOptions({
      passToken,
      ignoreJsonContentType,
      multipartFormData,
      headers,
      params,
    });

    if (passToken && !this.token) {
      return of({ error: 'No token found' } as unknown as T);
    }

    return this.http.post<T>(this.hostUrl + url, body, {
      params: this.httpOptions.params,
      headers: this.httpOptions.headers,
    });
  }

  put<T>(
    url: string,
    body: any,
    {
      passToken,
      ignoreJsonContentType,
      multipartFormData,
      headers,
      params,
    }: Options
  ): Observable<T> {
    this._setOptions({
      passToken,
      ignoreJsonContentType,
      multipartFormData,
      headers,
      params,
    });

    if (passToken && !this.token) {
      return of({ error: 'No token found' } as unknown as T);
    }

    return this.http.put<T>(this.hostUrl + url, body, {
      params: this.httpOptions.params,
      headers: this.httpOptions.headers,
    });
  }

  patch<T>(
    url: string,
    body: any,
    {
      passToken,
      ignoreJsonContentType,
      multipartFormData,
      params,
      headers,
    }: Options
  ): Observable<T> {
    this._setOptions({
      passToken,
      ignoreJsonContentType,
      multipartFormData,
      headers,
      params,
    });

    if (passToken && !this.token) {
      return of({ error: 'No token found' } as unknown as T);
    }
    return this.http.patch<T>(this.hostUrl + url, body, {
      params: this.httpOptions.params,
      headers: this.httpOptions.headers,
    });
  }

  delete<T>(
    url: string,
    {
      passToken,
      ignoreJsonContentType,
      multipartFormData,
      params,
      headers,
    }: Options
  ): Observable<T> {
    this._setOptions({
      passToken,
      ignoreJsonContentType,
      multipartFormData,
      headers,
      params,
    });

    if (passToken && !this.token) {
      return of({ error: 'No token found' } as unknown as T);
    }

    return this.http.delete<T>(this.hostUrl + url, {
      params: this.httpOptions.params,
      headers: this.httpOptions.headers,
    });
  }
}
