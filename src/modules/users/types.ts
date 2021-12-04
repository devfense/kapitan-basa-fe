import { Student } from "../student/types";


export enum AccountStatus {
    PENDING = 'pending',
    ACTIVE = 'active',
    REJECTED = 'rejected'
}

export interface User {
    firstName: string;
    middleName?: string;
    suffix?: string;
    lastName: string;
    emailAdd: string;
    accountStatus: AccountStatus;
};

export interface AllUser extends User, Student {};