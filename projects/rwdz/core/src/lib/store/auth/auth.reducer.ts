import { createReducer, on } from '@ngrx/store';
import {
  clearLoginData,
  getAuthUser,
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
  resetPassword,
  setLoginData,
  verifyOtp,
} from './auth.actions';
import { Organization } from './auth.interface';
import { initialLoginDataState, initialTokenAuthState } from './auth.state';

const _userReducer = createReducer(
  initialTokenAuthState,
  on(getAuthUser, (state) => ({
    ...state,
  })),
  on(getAuthUserData, (state, { auth }) => ({
    ...state,
    auth,
    authInitialized: true,
  })),
  // User Info
  on(getUserInfo, (state) => ({
    ...state,
    userInitialized: false,
    error: null,
  })),
  on(getUserInfoSuccess, (state, { userInfo }) => {
    const user = { ...userInfo?.user_details };

    const organization: Organization = {
      ...state.organization,
      ...userInfo?.organization_details,
      pk: user.organization_pk,
      name: user.organization_name,
    };

    if (organization?.background_color) {
      document.documentElement.style.setProperty(
        '--primary-color',
        organization.background_color
      );
    }

    return {
      ...state,
      user,
      organization,
      userInitialized: true,
      error: null,
    };
  }),
  on(getUserInfoFailure, (state, { error }) => ({
    ...state,
    auth: null,
    user: undefined,
    organization: undefined,
    userInitialized: true,
    error,
  })),

  // Organization Settings
  on(getOrganizationSettings, (state) => ({
    ...state,
    organizationInitialized: false,
    error: null,
  })),
  on(getOrganizationSettingsSuccess, (state, { organizationSettings }) => {
    const organization: Organization = {
      ...state.organization,
      settings: organizationSettings,
    };

    return {
      ...state,
      organization,
      organizationInitialized: true,
      error: null,
    };
  }),
  on(getOrganizationSettingsFailure, (state, { error }) => ({
    ...state,
    organizationInitialized: true,
    error,
  })),

  on(login, (state) => ({
    ...state,
    loggingIn: true,
    error: null,
  })),
  on(loginSuccess, (state, { auth }) => {
    return {
      ...state,
      auth,
      loggingIn: false,
      error: null,
    };
  }),
  on(loginFailure, (state, { error }) => ({
    ...state,
    loggingIn: false,
    error,
  })),
  on(logout, (state) => ({
    ...state,
  })),
  on(verifyOtp, (state) => ({
    ...state,
    loggingIn: true,
    error: null,
  })),
  on(resendOtp, (state) => ({
    ...state,
    error: null,
  })),
  on(resetPassword, (state) => ({
    ...state,
    error: null,
  }))
);

const _loginDataReducer = createReducer(
  initialLoginDataState,
  on(setLoginData, (state, { email, password }) => ({
    ...state,
    loginData: { email, password },
  })),
  on(clearLoginData, (state) => ({
    ...state,
    loginData: null,
  }))
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}

export function loginDataReducer(state: any, action: any) {
  return _loginDataReducer(state, action);
}
