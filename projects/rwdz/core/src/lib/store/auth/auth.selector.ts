import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginDataState, TokenAuthState } from './auth.state';

export const selectTokenAuthState =
  createFeatureSelector<TokenAuthState>('auth');
export const selectAuthState =
  createFeatureSelector<LoginDataState>('login-data');

export const selectIsUserLoggedIn = createSelector(
  selectTokenAuthState,
  (state) =>
    !!(
      state.authInitialized &&
      state.auth?.token &&
      state.user?.pk &&
      state.organization?.pk &&
      // Just to ensure that the organization settings are loaded
      state.organization?.settings?.enable_rewards
    )
);

export const selectAuth = createSelector(
  selectTokenAuthState,
  (state) => state.auth
);

export const selectAuthToken = createSelector(
  selectTokenAuthState,
  (state) => state.auth?.token
);

export const selectAuthInitialized = createSelector(
  selectTokenAuthState,
  (state: TokenAuthState) => state.authInitialized
);

// User Info
export const selectUser = createSelector(
  selectTokenAuthState,
  (state: TokenAuthState) => state?.user
);

export const selectUserInfoInitialized = createSelector(
  selectTokenAuthState,
  (state: TokenAuthState) => state.userInitialized
);

// User Organization
export const selectUserOrganization = createSelector(
  selectTokenAuthState,
  (state: TokenAuthState) => state?.organization
);

export const selectUserOrganizationInitialized = createSelector(
  selectTokenAuthState,
  (state: TokenAuthState) => state.organizationInitialized
);

// Login
export const selectLogin = createSelector(
  selectTokenAuthState,
  (state) => state.auth || {}
);

export const selectLoggingIn = createSelector(
  selectTokenAuthState,
  (state: TokenAuthState) => state.loggingIn
);

export const selectLoginSuccess = createSelector(
  selectTokenAuthState,
  (state) => state.auth
);

export const selectLoginData = createSelector(
  selectAuthState,
  (state: LoginDataState) => state.loginData
);

export const selectLoginError = createSelector(
  selectTokenAuthState,
  (state: TokenAuthState) => state.loginError
);

// Logout
export const selectLoggingOut = createSelector(
  selectTokenAuthState,
  (state: TokenAuthState) => state.loggingOut
);
