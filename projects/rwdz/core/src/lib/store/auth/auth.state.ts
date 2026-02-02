import { Organization, TokenAuth, User } from './auth.interface';

export interface TokenAuthState {
  auth: TokenAuth | undefined | null;
  authInitialized: boolean;
  user: User | undefined;
  userInitialized: boolean;
  organization: Organization | undefined;
  organizationInitialized: boolean;
  // Login
  loggingIn: boolean;
  loginError: any;
  // Logout
  loggingOut: boolean;
}

export interface LoginDataState {
  loginData: { email: string; password: string } | null;
}

export const initialTokenAuthState: TokenAuthState = {
  auth: undefined,
  authInitialized: false,
  user: {},
  userInitialized: false,
  organization: {},
  organizationInitialized: false,
  loggingIn: false,
  loggingOut: false,
  loginError: undefined,
};

export const initialLoginDataState: LoginDataState = {
  loginData: null,
};
