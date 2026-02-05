import { LoginDataState, TokenAuthState } from './auth.state';
export declare const selectTokenAuthState: import("@ngrx/store").MemoizedSelector<object, TokenAuthState, import("@ngrx/store").DefaultProjectorFn<TokenAuthState>>;
export declare const selectAuthState: import("@ngrx/store").MemoizedSelector<object, LoginDataState, import("@ngrx/store").DefaultProjectorFn<LoginDataState>>;
export declare const selectIsUserLoggedIn: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: TokenAuthState) => boolean>;
export declare const selectAuth: import("@ngrx/store").MemoizedSelector<object, import("./auth.interface").TokenAuth, (s1: TokenAuthState) => import("./auth.interface").TokenAuth>;
export declare const selectAuthToken: import("@ngrx/store").MemoizedSelector<object, string, (s1: TokenAuthState) => string>;
export declare const selectAuthInitialized: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: TokenAuthState) => boolean>;
export declare const selectUser: import("@ngrx/store").MemoizedSelector<object, import("./auth.interface").User, (s1: TokenAuthState) => import("./auth.interface").User>;
export declare const selectUserInfoInitialized: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: TokenAuthState) => boolean>;
export declare const selectUserOrganization: import("@ngrx/store").MemoizedSelector<object, import("./auth.interface").Organization, (s1: TokenAuthState) => import("./auth.interface").Organization>;
export declare const selectUserOrganizationInitialized: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: TokenAuthState) => boolean>;
export declare const selectLogin: import("@ngrx/store").MemoizedSelector<object, import("./auth.interface").TokenAuth, (s1: TokenAuthState) => import("./auth.interface").TokenAuth>;
export declare const selectLoggingIn: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: TokenAuthState) => boolean>;
export declare const selectLoginSuccess: import("@ngrx/store").MemoizedSelector<object, import("./auth.interface").TokenAuth, (s1: TokenAuthState) => import("./auth.interface").TokenAuth>;
export declare const selectLoginData: import("@ngrx/store").MemoizedSelector<object, {
    email: string;
    password: string;
}, (s1: LoginDataState) => {
    email: string;
    password: string;
}>;
export declare const selectLoginError: import("@ngrx/store").MemoizedSelector<object, any, (s1: TokenAuthState) => any>;
export declare const selectLoggingOut: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: TokenAuthState) => boolean>;
