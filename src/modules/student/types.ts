import { Action } from '../../types/Redux';
import { User } from '../users/types';
import { ApiResponseDetails } from '../../helpers/api';

export enum Actions {
	GET_STUDENT_LIST_START = '@student/GET_STUDENT_LIST_START',
	GET_STUDENT_LIST_FULFILLED = '@student/GET_STUDENT_LIST_FULFILLED',
	GET_STUDENT_LIST_REJECTED = '@student/GET_STUDENT_LIST_REJECTED',
	REGISTER_STUDENT_START = '@student/REGISTER_STUDENT_START',
	REGISTER_STUDENT_FULFILLED = '@student/REGISTER_STUDENT_FULFILLED',
	REGISTER_STUDENT_REJECTED = '@student/REGISTER_STUDENT_REJECTED',
}

export interface Student extends User {
	studentID?: string;
	section: string;
	grade: string;
}

export interface StudentUser extends Student {
	username: string;
	password: string;
}

export interface StudentState {
	studentList: Student[];
	apiResponse: ApiResponseDetails;
}

export type GetStudentListRequest = Action<typeof Actions.GET_STUDENT_LIST_START>;
type GetStudentListAction = Action<typeof Actions.GET_STUDENT_LIST_FULFILLED, Student[]>;
type GetStudentListError = Action<typeof Actions.GET_STUDENT_LIST_REJECTED>;

export type RegisterStudentRequest = Action<typeof Actions.REGISTER_STUDENT_START, StudentUser>;
type RegisterStudentAction = Action<typeof Actions.REGISTER_STUDENT_FULFILLED, ApiResponseDetails>;
type RegisterStudentError = Action<typeof Actions.REGISTER_STUDENT_REJECTED, ApiResponseDetails>;

export type StudentTypes =
	| GetStudentListRequest
	| GetStudentListAction
	| GetStudentListError
	| RegisterStudentRequest
	| RegisterStudentAction
	| RegisterStudentError;
