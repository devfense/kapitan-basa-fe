import type { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api, Response, NOCACHE, ApiResponseDetails } from '../helpers/api';
import { Actions, RegisterStudentRequest } from '../modules/student/types';
import { Student } from '../modules/student/types';
import type {
	GetStudentListRequest
} from '../modules/student/types';

export function* getStudentList(action: GetStudentListRequest): SagaIterator {
	try {
		const { data }: Response<{ data: Student[]}> = yield call(api, {
			url: `/student/list/${action.payload}`,
			headers: NOCACHE,
		});

		yield put({
			payload: { nearProductList: data.data },
			type: Actions.GET_STUDENT_LIST_FULFILLED
		});
	} catch(error) {
		yield put({ type: Actions.GET_STUDENT_LIST_REJECTED });
	}
}

export function* registerStudent(action: RegisterStudentRequest): SagaIterator {
	try {
		const { data }: Response<{ data: ApiResponseDetails}> = yield call(api, {
			url: '/student/register',
			data: action.payload,
			method: 'post'
		});
    
		yield put({ type: Actions.REGISTER_STUDENT_FULFILLED, payload: data });
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	} catch (error: any) {
		yield put({ type: Actions.REGISTER_STUDENT_REJECTED, payload: error.response.data });
        
	}
}

export function* studentWatchers(): SagaIterator {
	yield all([
		takeLatest(Actions.GET_STUDENT_LIST_START, getStudentList),
		takeLatest(Actions.REGISTER_STUDENT_START, registerStudent),
	]);
}