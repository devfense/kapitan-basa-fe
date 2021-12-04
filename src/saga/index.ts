import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { studentWatchers } from './student';

export function* rootSaga(): SagaIterator {
    yield all([
        fork(studentWatchers)
    ]);
}