
import { Actions, AuthTypes, AuthUser } from './types'

export const authLogin = (data: AuthUser): AuthTypes => ({
    payload: data,
    type: Actions.AUTH_LOGIN_START
});