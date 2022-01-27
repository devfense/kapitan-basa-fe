import { Actions, UserTypes, AllUser } from './types';

export const storeUserInfo = (data: AllUser): UserTypes => ({
	payload: data,
	type: Actions.USER_STORE_INFO,
});

export const getUserList = (): UserTypes => ({
	payload: undefined,
	type: Actions.GET_USERS_START,
});

export const deleteStudentUser = (id: number): UserTypes => ({
	payload: id,
	type: Actions.DELETE_USER_START,
});

export const approveUser = (id: string): UserTypes => ({
	payload: id,
	type: Actions.APPROVE_USER_START,
});

export const rejectUser = (id: string): UserTypes => ({
	payload: id,
	type: Actions.REJECT_USER_START,
});
