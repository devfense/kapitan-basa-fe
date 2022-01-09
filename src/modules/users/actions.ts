
import { Actions, UserTypes, AllUser } from './types'

export const storeUserInfo = (data: AllUser): UserTypes => ({
    payload: data,
    type: Actions.USER_STORE_INFO
});