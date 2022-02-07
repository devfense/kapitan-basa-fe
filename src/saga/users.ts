import type { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api, Response } from '../helpers/api';
import { Actions, ApproveUserRequest, RejectUserRequest, DeleteUserRequest, User } from '../modules/users/types';

export function* getUsers(): SagaIterator {
	try {
		const { data }: Response<{ content: User[] }> = yield call(api, {
			url: '/users/get-all',
			method: 'get',
		});

		yield put({ type: Actions.GET_USERS_FULFILLED, payload: data.content });
	} catch (error) {
		yield put({ type: Actions.GET_USERS_REJECTED, payload: undefined });
	}
}

export function* deleteUser(action: DeleteUserRequest): SagaIterator {
	const id = action.payload;
	try {
		yield call(api, {
			url: `/student/delete-record/${id}`,
			method: 'delete',
		});

		// yield put({ type: Actions.GET_USERS_START });
		yield put({ type: Actions.DELETE_USER_FULFILLED });
	} catch (error) {
		yield put({type: Actions.DELETE_USER_REJECTED, payload: undefined });
	}
}

export function* approveUser(action: ApproveUserRequest): SagaIterator {
	try {
		yield call(api, {
			url: '/users/process-approve-reject',
			method: 'put',
			data: {
				action: 'APPROVED',
				username: action.payload,
			},
		});

		yield put({ type: Actions.APPROVE_USER_FULFILLED, payload: action.payload });
	} catch (error) {
		yield put({ type: Actions.APPROVE_USER_REJECTED, payload: undefined });
	}
}

export function* rejectUser(action: RejectUserRequest): SagaIterator {
	try {
		yield call(api, {
			url: '/users/process-approve-reject',
			method: 'put',
			data: {
				action: 'REJECTED',
				username: action.payload,
			},
		});

		yield put({ type: Actions.REJECT_USER_FULFILLED, payload: action.payload });
	} catch (error) {
		yield put({ type: Actions.REJECT_USER_REJECTED, payload: undefined });
	}
}

export function* userWatchers(): SagaIterator {
	yield all([
		takeLatest(Actions.GET_USERS_START, getUsers),
		takeLatest(Actions.DELETE_USER_START, deleteUser),
		takeLatest(Actions.APPROVE_USER_START, approveUser),
		takeLatest(Actions.REJECT_USER_START, rejectUser),
		takeLatest(Actions.DELETE_USER_FULFILLED, getUsers),
	]);
}
