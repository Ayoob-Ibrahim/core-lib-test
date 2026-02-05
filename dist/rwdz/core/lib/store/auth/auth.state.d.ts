import { Organization, TokenAuth, User } from './auth.interface';
export interface TokenAuthState {
    auth: TokenAuth | undefined | null;
    authInitialized: boolean;
    user: User | undefined;
    userInitialized: boolean;
    organization: Organization | undefined;
    organizationInitialized: boolean;
    loggingIn: boolean;
    loginError: any;
    loggingOut: boolean;
}
export interface LoginDataState {
    loginData: {
        email: string;
        password: string;
    } | null;
}
export declare const initialTokenAuthState: TokenAuthState;
export declare const initialLoginDataState: LoginDataState;
