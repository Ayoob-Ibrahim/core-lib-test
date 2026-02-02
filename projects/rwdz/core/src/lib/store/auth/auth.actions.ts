import { createAction, props } from '@ngrx/store';
import { User } from './auth.interface';

export const getAuthUser = createAction('[Auth] Get Auth User');
export const getAuthUserData = createAction(
  '[Auth] Get Auth User Data',
  props<{ auth: any }>()
);

export const getUserInfo = createAction('[Auth] Get User Info');
export const getUserInfoSuccess = createAction(
  '[Auth] Get User Info Success',
  props<{ userInfo: any }>()
);
export const getUserInfoFailure = createAction(
  '[Auth] Get User Info Failure',
  props<{ error: any }>()
);

export const getOrganizationSettings = createAction(
  '[Auth] Get Organization Settings'
);
export const getOrganizationSettingsSuccess = createAction(
  '[Auth] Get Organization Settings Success',
  props<{ organizationSettings: any }>()
);
export const getOrganizationSettingsFailure = createAction(
  '[Auth] Get Organization Settings Failure',
  props<{ error: any }>()
);

export const login = createAction('[Auth] Login', props<{ payload: any }>());

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ auth: any }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');

export const verifyOtp = createAction(
  '[Auth] Verify Otp',
  props<{ payload: any }>()
);

export const resendOtp = createAction(
  '[Auth] Resend Otp',
  props<{ payload: any }>()
);

export const resendOtpSuccess = createAction('[Auth] Resend Otp Success');

export const resendOtpFailure = createAction(
  '[Auth] Resend Otp Failure',
  props<{ error: any }>()
);

export const resetPassword = createAction(
  '[Auth] Reset Password',
  props<{ payload: any }>()
);

export const resetPasswordSuccess = createAction(
  '[Auth] Reset Password Success',
  props<{ message: any }>()
);

export const resetPasswordFailure = createAction(
  '[Auth] Reset Password Failure',
  props<{ error: any }>()
);

export const setLoginData = createAction(
  '[Auth] Set Login Data',
  props<{ email: string; password: string }>()
);

export const clearLoginData = createAction('[Auth] Clear Login Data');

// Profile
export const updateUserProfile = createAction(
  '[User] Update User Profile',
  props<{ user: User }>()
);

export const uploadUserProfilePhoto = createAction(
  '[User] Upload User Profile Photo',
  props<{ payload: any }>()
);
