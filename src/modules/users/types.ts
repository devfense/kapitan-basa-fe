import { Student } from "../student/types";


export enum AccountStatus {
    PENDING = 'PENDING',
    ACTIVE = 'ACTIVE',
    REJECTED = 'REJECTED'
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