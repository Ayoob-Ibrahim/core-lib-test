import { User } from './auth.interface';
export declare const getAuthUser: import("@ngrx/store").ActionCreator<"[Auth] Get Auth User", () => import("@ngrx/store").Action<"[Auth] Get Auth User">>;
export declare const getAuthUserData: import("@ngrx/store").ActionCreator<"[Auth] Get Auth User Data", (props: {
    auth: any;
}) => {
    auth: any;
} & import("@ngrx/store").Action<"[Auth] Get Auth User Data">>;
export declare const getUserInfo: import("@ngrx/store").ActionCreator<"[Auth] Get User Info", () => import("@ngrx/store").Action<"[Auth] Get User Info">>;
export declare const getUserInfoSuccess: import("@ngrx/store").ActionCreator<"[Auth] Get User Info Success", (props: {
    userInfo: any;
}) => {
    userInfo: any;
} & import("@ngrx/store").Action<"[Auth] Get User Info Success">>;
export declare const getUserInfoFailure: import("@ngrx/store").ActionCreator<"[Auth] Get User Info Failure", (props: {
    error: any;
}) => {
    error: any;
} & import("@ngrx/store").Action<"[Auth] Get User Info Failure">>;
export declare const getOrganizationSettings: import("@ngrx/store").ActionCreator<"[Auth] Get Organization Settings", () => import("@ngrx/store").Action<"[Auth] Get Organization Settings">>;
export declare const getOrganizationSettingsSuccess: import("@ngrx/store").ActionCreator<"[Auth] Get Organization Settings Success", (props: {
    organizationSettings: any;
}) => {
    organizationSettings: any;
} & import("@ngrx/store").Action<"[Auth] Get Organization Settings Success">>;
export declare const getOrganizationSettingsFailure: import("@ngrx/store").ActionCreator<"[Auth] Get Organization Settings Failure", (props: {
    error: any;
}) => {
    error: any;
} & import("@ngrx/store").Action<"[Auth] Get Organization Settings Failure">>;
export declare const login: import("@ngrx/store").ActionCreator<"[Auth] Login", (props: {
    payload: any;
}) => {
    payload: any;
} & import("@ngrx/store").Action<"[Auth] Login">>;
export declare const loginSuccess: import("@ngrx/store").ActionCreator<"[Auth] Login Success", (props: {
    auth: any;
}) => {
    auth: any;
} & import("@ngrx/store").Action<"[Auth] Login Success">>;
export declare const loginFailure: import("@ngrx/store").ActionCreator<"[Auth] Login Failure", (props: {
    error: any;
}) => {
    error: any;
} & import("@ngrx/store").Action<"[Auth] Login Failure">>;
export declare const logout: import("@ngrx/store").ActionCreator<"[Auth] Logout", () => import("@ngrx/store").Action<"[Auth] Logout">>;
export declare const verifyOtp: import("@ngrx/store").ActionCreator<"[Auth] Verify Otp", (props: {
    payload: any;
}) => {
    payload: any;
} & import("@ngrx/store").Action<"[Auth] Verify Otp">>;
export declare const resendOtp: import("@ngrx/store").ActionCreator<"[Auth] Resend Otp", (props: {
    payload: any;
}) => {
    payload: any;
} & import("@ngrx/store").Action<"[Auth] Resend Otp">>;
export declare const resendOtpSuccess: import("@ngrx/store").ActionCreator<"[Auth] Resend Otp Success", () => import("@ngrx/store").Action<"[Auth] Resend Otp Success">>;
export declare const resendOtpFailure: import("@ngrx/store").ActionCreator<"[Auth] Resend Otp Failure", (props: {
    error: any;
}) => {
    error: any;
} & import("@ngrx/store").Action<"[Auth] Resend Otp Failure">>;
export declare const resetPassword: import("@ngrx/store").ActionCreator<"[Auth] Reset Password", (props: {
    payload: any;
}) => {
    payload: any;
} & import("@ngrx/store").Action<"[Auth] Reset Password">>;
export declare const resetPasswordSuccess: import("@ngrx/store").ActionCreator<"[Auth] Reset Password Success", (props: {
    message: any;
}) => {
    message: any;
} & import("@ngrx/store").Action<"[Auth] Reset Password Success">>;
export declare const resetPasswordFailure: import("@ngrx/store").ActionCreator<"[Auth] Reset Password Failure", (props: {
    error: any;
}) => {
    error: any;
} & import("@ngrx/store").Action<"[Auth] Reset Password Failure">>;
export declare const setLoginData: import("@ngrx/store").ActionCreator<"[Auth] Set Login Data", (props: {
    email: string;
    password: string;
}) => {
    email: string;
    password: string;
} & import("@ngrx/store").Action<"[Auth] Set Login Data">>;
export declare const clearLoginData: import("@ngrx/store").ActionCreator<"[Auth] Clear Login Data", () => import("@ngrx/store").Action<"[Auth] Clear Login Data">>;
export declare const updateUserProfile: import("@ngrx/store").ActionCreator<"[User] Update User Profile", (props: {
    user: User;
}) => {
    user: User;
} & import("@ngrx/store").Action<"[User] Update User Profile">>;
export declare const uploadUserProfilePhoto: import("@ngrx/store").ActionCreator<"[User] Upload User Profile Photo", (props: {
    payload: any;
}) => {
    payload: any;
} & import("@ngrx/store").Action<"[User] Upload User Profile Photo">>;
