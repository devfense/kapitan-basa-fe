import type { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api, Response } from '../helpers/api';
import { Actions, GameLevel, GetGameLevelsRequest } from '../modules/game-levels/types';

export function* getGameLevels(action: GetGameLevelsRequest): SagaIterator {
	const { limit, page } = action.payload;
	try {
		const { data }: Response<{ totalRecords: number, content: GameLevel[] }> = yield call(api, {
			url: `/game-levels/student-levels/123123123123?limit=${limit}?page=${page}`,
			method: 'get',
		});
		
		yield put({ type: Actions.GET_GAME_LEVELS_FULFILLED, payload: { count: data.totalRecords, list: data.content } });
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	} catch (error: any) {
		yield put({ type: Actions.GET_GAME_LEVELS_REJECTED, payload: error.response.data });
	}
}

export function* gameLevelWatchers(): SagaIterator {
	yield all([takeLatest(Actions.GET_GAME_LEVELS_START, getGameLevels)]);
}
