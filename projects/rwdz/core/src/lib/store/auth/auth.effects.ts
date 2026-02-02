import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../service/error-handler/error-handler.service';
import {
  addErrorAlert,
  addInfoAlert,
  addSuccessAlert,
} from '../../store/alerts/alerts.actions';
import {
  getAuthUserData,
  getOrganizationSettings,
  getOrganizationSettingsFailure,
  getOrganizationSettingsSuccess,
  getUserInfo,
  getUserInfoFailure,
  getUserInfoSuccess,
  login,
  loginFailure,
  loginSuccess,
  logout,
  resendOtp,
  resendOtpFailure,
  resendOtpSuccess,
  resetPassword,
  resetPasswordFailure,
  resetPasswordSuccess,
  updateUserProfile,
  uploadUserProfilePhoto,
  verifyOtp,
} from './auth.actions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private translate: TranslateService,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private dialog: MatDialog
  ) {}

  private actions$ = inject(Actions);

  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserInfo),
      mergeMap((_) => {
        return this.authService.getUserInfo().pipe(
          map((userInfo) => {
            return getUserInfoSuccess({ userInfo });
          }),
          catchError((error) => {
            // Most likely user logged in from another browser
            error = this.errorHandler.handleError(error);
            return of(
              getUserInfoFailure({ error }),
              addInfoAlert({
                id: new Date().getTime(),
                message: this.translate.instant('auth.loginToContinue'),
                timeout: 5,
              })
            );
          })
        );
      })
    )
  );

  getOrganizationSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOrganizationSettings),
      mergeMap((_) => {
        return this.authService.getOrganizationSettings().pipe(
          map((organizationSettings) => {
            return getOrganizationSettingsSuccess({ organizationSettings });
          }),
          catchError((error) => {
            return of(getOrganizationSettingsFailure({ error }));
          })
        );
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) => {
        return this.authService.login(action.payload).pipe(
          mergeMap((auth) => {
            if (
              auth?.require_email_twofa ||
              auth?.require_twofa ||
              auth?.require_whatsapp_twofa
            ) {
              auth.token = '';
              return of(loginSuccess({ auth }));
            } else {
              return of(
                addSuccessAlert({
                  id: new Date().getTime(),
                  message: this.translate.instant('auth.loggedIn'),
                }),
                loginSuccess({ auth })
              );
            }
          }),
          catchError((error) => {
            error = this.errorHandler.handleError(error);
            return of(
              loginFailure({ error }),
              addErrorAlert({
                id: new Date().getTime(),
                message: error,
              })
            );
          })
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      mergeMap((_) => {
        return this.authService.logout().pipe(
          mergeMap(() => {
            this.dialog.closeAll();
            this.router.navigate(['/']);
            return of(
              addSuccessAlert({
                id: new Date().getTime(),
                message: this.translate.instant('auth.loggedOut'),
              }),
              getAuthUserData({ auth: null })
            );
          }),
          catchError((error) => {
            // Still remove the auth token - at least from the UI side it's logged out
            getAuthUserData({ auth: null });
            error = this.errorHandler.handleError(error);
            return of(
              addErrorAlert({
                id: new Date().getTime(),
                message: error,
              })
            );
          })
        );
      })
    )
  );

  verifyOtp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(verifyOtp),
      mergeMap((action) => {
        return this.authService.verifyOtp(action.payload).pipe(
          mergeMap((auth) => {
            return of(
              addSuccessAlert({
                id: new Date().getTime(),
                message: this.translate.instant('auth.loggedIn'),
              }),
              loginSuccess({ auth })
            );
          }),
          catchError((error) => {
            error = this.errorHandler.handleError(error);
            return of(
              loginFailure({ error }),
              addErrorAlert({
                id: new Date().getTime(),
                message: error,
              })
            );
          })
        );
      })
    )
  );

  resendOtp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resendOtp),
      mergeMap((action) => {
        return this.authService.resendOtp(action.payload).pipe(
          mergeMap(() => {
            return of(
              addSuccessAlert({
                id: new Date().getTime(),
                message: this.translate.instant('auth.otpResent'),
              }),
              resendOtpSuccess()
            );
          }),
          catchError((error) => {
            error = this.errorHandler.handleError(error);
            return of(
              resendOtpFailure({ error }),
              addErrorAlert({
                id: new Date().getTime(),
                message: error,
              })
            );
          })
        );
      })
    )
  );

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetPassword),
      mergeMap((action) => {
        return this.authService.resetPassword(action.payload).pipe(
          mergeMap((message) => [
            addSuccessAlert({
              id: new Date().getTime(),
              message: message[0],
            }),
            resetPasswordSuccess({ message }),
          ]),
          catchError((error) => {
            error = this.errorHandler.handleError(error);
            return of(
              resetPasswordFailure({ error }),
              addSuccessAlert({
                id: new Date().getTime(),
                message: this.translate.instant('auth.resetInstructionsSent'),
              })
            );
          })
        );
      })
    )
  );

  updateUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserProfile), // When this action is dispatched
      mergeMap((action) =>
        this.authService.updateUserProfile(action.user).pipe(
          mergeMap((_) => [
            addSuccessAlert({
              id: new Date().getTime(),
              message: this.translate.instant('auth.profile'),
            }),
            getUserInfo(),
          ]),
          catchError((error) => {
            error = this.errorHandler.handleError(error);
            return of(
              addErrorAlert({
                id: new Date().getTime(),
                message: error,
              })
            );
          })
        )
      )
    )
  );

  uploadUserProfilePhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uploadUserProfilePhoto),
      mergeMap((action) =>
        this.authService.uploadUserProfilePhoto(action.payload).pipe(
          mergeMap((_) => [
            addSuccessAlert({
              id: new Date().getTime(),
              message: this.translate.instant('auth.profilePhoto'),
            }),
            getUserInfo(),
          ]),
          catchError((error) => {
            error = this.errorHandler.handleError(error);
            return of(
              addErrorAlert({
                id: new Date().getTime(),
                message: error,
              })
            );
          })
        )
      )
    )
  );
}
