import { Actions, AuthTypes, AuthUser } from './types';

export const authLogin = (data: AuthUser): AuthTypes => ({
	payload: data,
	type: Actions.AUTH_LOGIN_START,
});

export const authResetResponse = (): AuthTypes => ({
	payload: undefined,
	type: Actions.AUTH_RESET_RESPONSE,
});
