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
};

export interface AllUser extends User, Student {};