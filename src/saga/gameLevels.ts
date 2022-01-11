import type { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api, Response } from '../helpers/api';
import { Actions, GameLevel, GetGameLevelsRequest } from '../modules/game-levels/types';

export function* getGameLevels(action: GetGameLevelsRequest): SagaIterator {
    const { limit } = action.payload;
    try {
        const { data }: Response<{ content: GameLevel[] }> = yield call(api, {
            url: `/game-levels/get-all?limit=${limit}`,
            method: 'get'
        });
        console.log(data);
        yield put({ type: Actions.GET_GAME_LEVELS_FULFILLED, payload: data.content });
    } catch (error: any) {
        yield put({ type: Actions.GET_GAME_LEVELS_REJECTED, payload: error.response.data });
    }
}

export function* gameLevelWatchers(): SagaIterator {
    yield all([
        takeLatest(Actions.GET_GAME_LEVELS_START, getGameLevels),
    ])
}