import { Action } from '../../types/Redux';
import { User } from '../users/types';
import { ApiResponseDetails } from '../../helpers/api';

export enum Actions {
    AUTH_LOGIN_START = '@auth/AUTH_LOGIN_START',
    AUTH_LOGIN_FULLFILLED = '@auth/AUTH_LOGIN_FULLFILLED',
    AUTH_LOGIN_ERROR = '@auth/AUTH_LOGIN_ERROR',
    AUTH_RESET_RESPONSE = '@auth/AUTH_RESET_RESPONSE',


}

export interface AuthUser {
    username: string;
    password: string;
}

export interface AuthState {
    apiResponse: ApiResponseDetails
}


export type AuthLoginStart = Action<typeof Actions.AUTH_LOGIN_START, AuthUser>;
type AuthLoginFullfilled = Action<typeof Actions.AUTH_LOGIN_FULLFILLED, ApiResponseDetails>;
type AuthResetResponse = Action<typeof Actions.AUTH_RESET_RESPONSE>;
type AuthLoginError = Action<typeof Actions.AUTH_LOGIN_ERROR, ApiResponseDetails>;


export type AuthTypes = AuthLoginStart | AuthLoginFullfilled | AuthLoginError | AuthResetResponse;