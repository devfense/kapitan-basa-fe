import type { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api, Response } from '../helpers/api';
import { Actions, ApproveUserRequest, User } from '../modules/users/types';

export function* getUsers(): SagaIterator {
	try {
		const { data }: Response<{ content: User[] }> = yield call(api, {
			url: '/users/get-all',
			method: 'get'
		});
    
		yield put({ type: Actions.GET_USERS_FULFILLED, payload: data.content });
	} catch (error: any) {
		yield put({ type: Actions.GET_USERS_REJECTED, payload: undefined });
        
	}
}

export function* approveUser(action: ApproveUserRequest): SagaIterator {
	try {
		yield call(api, {
			url: '/users/process-approve-reject',
			method: 'put',
			data: {
				action: 'APPROVED',
				username: action.payload
			}
		});
    
		yield put({ type: Actions.APPROVE_USER_FULFILLED, payload: action.payload });
	} catch (error: any) {
		yield put({ type: Actions.APPROVE_USER_REJECTED, payload: undefined });
        
	}
}

export function* rejectUser(action: ApproveUserRequest): SagaIterator {
	try {
		yield call(api, {
			url: '/users/process-approve-reject',
			method: 'put',
			data: {
				action: 'REJECTED',
				username: action.payload
			}
		});
    
		yield put({ type: Actions.REJECT_USER_FULFILLED, payload: action.payload });
	} catch (error: any) {
		yield put({ type: Actions.REJECT_USER_REJECTED, payload: undefined });
        
	}
}

export function* userWatchers(): SagaIterator {
	yield all([
		takeLatest(Actions.GET_USERS_START, getUsers),
		takeLatest(Actions.APPROVE_USER_START, approveUser),
		takeLatest(Actions.REJECT_USER_START, rejectUser),
	]);
}