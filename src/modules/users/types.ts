import { Student } from '../student/types';
import { Action } from '../../types/Redux';

export enum Actions {
	USER_STORE_INFO = '@user/USER_STORE_INFO',
	GET_USERS_START = '@user/GET_USERS_START',
	GET_USERS_FULFILLED = '@user/GET_USERS_FULFILLED',
	GET_USERS_REJECTED = '@user/GET_USERS_REJECTED',
	DELETE_USER_START = '@user/DELETE_USER_START',
	DELETE_USER_FULFILLED = '@user/DELETE_USER_FULFILLED',
	DELETE_USER_REJECTED = '@user/DELETE_USER_REJECTED',
	APPROVE_USER_START = '@user/APPROVE_USER_START',
	APPROVE_USER_FULFILLED = '@user/APPROVE_USER_FULFILLED',
	APPROVE_USER_REJECTED = '@user/APPROVE_USER_REJECTED',
	REJECT_USER_START = '@user/REJECT_USER_START',
	REJECT_USER_FULFILLED = '@user/REJECT_USER_FULFILLED',
	REJECT_USER_REJECTED = '@user/REJECT_USER_REJECTED',
}

export enum AccountStatus {
	PENDING = 'PENDING',
	ACTIVE = 'ACTIVE',
	REJECTED = 'REJECTED',
}

export interface UserState {
	userInfo: AllUser;
}

export type TAccountType = 'STUDENT' | 'TEACHER' | 'ADMIN';

export interface User {
	id: number;
	firstName: string;
	middleName?: string;
	lastName: string;
	username: string;
	suffix?: string;
	emailAddress: string;
	status?: AccountStatus;
	isAuthenticated?: boolean;
	accountType?: TAccountType;
}

type WithLoadingList<T> = {
	isLoading: boolean;
	isLoadingApprove: boolean;
	isLoadingReject: boolean;
	list: T;
};

export interface UserState {
	users: WithLoadingList<AllUser[]>;
}

export interface AllUser extends User, Student {}

export type UserStoreInfo = Action<typeof Actions.USER_STORE_INFO, AllUser>;

export type GetUsersRequest = Action<typeof Actions.GET_USERS_START>;
export type GetUsersAction = Action<typeof Actions.GET_USERS_FULFILLED, AllUser[]>;
export type GetUsersError = Action<typeof Actions.GET_USERS_REJECTED>;

export type DeleteUserRequest = Action<typeof Actions.DELETE_USER_START, number>;
export type DeleteUserAction = Action<typeof Actions.DELETE_USER_FULFILLED>;
export type DeleteUserError = Action<typeof Actions.DELETE_USER_REJECTED>;

export type ApproveUserRequest = Action<typeof Actions.APPROVE_USER_START, string>;
export type ApproveUserAction = Action<typeof Actions.APPROVE_USER_FULFILLED, string>;
export type ApproveUserError = Action<typeof Actions.APPROVE_USER_REJECTED>;

export type RejectUserRequest = Action<typeof Actions.REJECT_USER_START, string>;
export type RejectUserAction = Action<typeof Actions.REJECT_USER_FULFILLED, string>;
export type RejectUserError = Action<typeof Actions.REJECT_USER_REJECTED>;

export type UserTypes =
	| UserStoreInfo
	| GetUsersRequest
	| GetUsersAction
	| GetUsersError
	| DeleteUserRequest
	| DeleteUserAction
	| DeleteUserError
	| ApproveUserRequest
	| ApproveUserAction
	| ApproveUserError
	| RejectUserRequest
	| RejectUserAction
	| RejectUserError;
