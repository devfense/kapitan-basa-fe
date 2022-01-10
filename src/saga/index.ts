import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { authWatchers } from './auth';
import { studentWatchers } from './student';
import { gameLevelWatchers } from './gameLevels';


export function* rootSaga(): SagaIterator {
    yield all([
        fork(studentWatchers),
        fork(authWatchers),
        fork(gameLevelWatchers)
    ]);
}