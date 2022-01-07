import type { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api, Response, ApiResponseDetails } from '../helpers/api';
import { Actions, AuthLoginStart } from '../modules/auth/types';



export function* authLogin(action: AuthLoginStart): SagaIterator {
    try {
        const { data }: Response<{ data: ApiResponseDetails}> = yield call(api, {
            url: '/users/auth',
            data: action.payload,
            method: 'post'
        });
    
        yield put({ type: Actions.AUTH_LOGIN_FULLFILLED, payload: data });
    } catch (error: any) {

        yield put({ type: Actions.AUTH_LOGIN_ERROR, payload: error.response.data });
        
    }
}

export function* authWatchers(): SagaIterator {
    yield all([
        takeLatest(Actions.AUTH_LOGIN_START, authLogin),
    ])
}