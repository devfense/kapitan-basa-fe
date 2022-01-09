import { Student } from "../student/types";
import { Action } from "../../types/Redux";


export enum Actions {
    USER_STORE_INFO = '@user/USER_STORE_INFO',
}

export enum AccountStatus {
    PENDING = 'PENDING',
    ACTIVE = 'ACTIVE',
    REJECTED = 'REJECTED'
}

export interface UserState {
    userInfo: AllUser
}
export interface User {
    firstName: string;
    middleName?: string;
    lastName: string;
    suffix?: string;
    emailAddress: string;
    status?: AccountStatus;
    isAuthenticated?: boolean;
    accountType?: string;
};

export interface AllUser extends User, Student {};

export type UserStoreInfo = Action<typeof Actions.USER_STORE_INFO, AllUser>;


export type UserTypes = UserStoreInfo ;