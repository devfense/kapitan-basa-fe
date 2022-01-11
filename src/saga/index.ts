import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { authWatchers } from './auth';
import { studentWatchers } from './student';
import { gameLevelWatchers } from './gameLevels';
import { userWatchers } from './users';


export function* rootSaga(): SagaIterator {
    yield all([
        fork(studentWatchers),
        fork(authWatchers),
        fork(gameLevelWatchers),
        fork(userWatchers)
    ]);
}