import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { logout } from '../../store/auth/auth.actions';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isUnauthorizedRedirecting = false;

  constructor(private router: Router, private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !this.isUnauthorizedRedirecting) {
          this.isUnauthorizedRedirecting = true;
          this.store.dispatch(logout());
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
