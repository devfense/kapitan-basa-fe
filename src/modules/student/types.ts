import { Action } from "../../types/Redux";
import { User } from "../users/types";

export enum Actions {
    GET_STUDENT_LIST_START = '@student/GET_STUDENT_LIST_START',
    GET_STUDENT_LIST_FULFILLED = '@student/GET_STUDENT_LIST_FULFILLED',
    GET_STUDENT_LIST_REJECTED = '@student/GET_STUDENT_LIST_REJECTED'
}

export interface Student extends User {
    section: string;
    grade: number;
}

export interface StudentState {
    studentList: Student[];
}

export type GetStudentListRequest = Action<typeof Actions.GET_STUDENT_LIST_START>;
type GetStudentListAction = Action<typeof Actions.GET_STUDENT_LIST_FULFILLED, Student[]>;
type GetStudentListError = Action<typeof Actions.GET_STUDENT_LIST_REJECTED>;

export type StudentTypes = GetStudentListRequest | GetStudentListAction | GetStudentListError;