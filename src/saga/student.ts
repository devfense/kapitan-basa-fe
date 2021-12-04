import type { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api, Response, NOCACHE } from '../helpers/api';
import { Actions } from '../modules/student/types';
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

export function* studentWatchers(): SagaIterator {
    yield all([
        takeLatest(Actions.GET_STUDENT_LIST_START, getStudentList)
    ])
}