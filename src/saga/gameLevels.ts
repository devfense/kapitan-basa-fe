import type { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api, Response } from '../helpers/api';
import { Actions, GameLevel, GetGameLevelsRequest, GetQuizRequest, GetStoryRequest, SubmitQuizRequest, ResultResponse } from '../modules/game-levels/types';

export function* getGameLevels(action: GetGameLevelsRequest): SagaIterator {
	const { studentID, limit, page } = action.payload;
	try {
		const { data }: Response<{ totalRecords: number, content: GameLevel[] }> = yield call(api, {
			url: `/game-levels/student-levels/${studentID}?limit=${limit}?page=${page}`,
			method: 'get',
		});
		
		yield put({ type: Actions.GET_GAME_LEVELS_FULFILLED, payload: { count: data.totalRecords, list: data.content } });
	} catch (error) {
		yield put({ type: Actions.GET_GAME_LEVELS_REJECTED, payload: undefined });
	}
}

export function* getStory(action: GetStoryRequest): SagaIterator {
	const { id } = action.payload;

	try {
		const { data }= yield call(api, {
			url: `/game-levels/get-story/${id}`,
			method: 'get',
		});
		console.log(data);
		yield put({ type: Actions.GET_STORY_FULFILLED, payload: { id, storyContent: data.content.stories[0].storyContent } });
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	} catch (e: any) {
		yield put({ type: Actions.GET_STORY_START, payload: e.response.data });
	}
}

export function* getQuiz(action: GetQuizRequest): SagaIterator {
	const { id } = action.payload;

	try {
		const { data } = yield call(api, {
			url: `/game-levels/get-question/${id}`,
			method: 'get',
		});
		
		yield put({ type: Actions.GET_QUIZ_FULFILLED, payload: data.content[0].questions });
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	} catch (e: any) {
		yield put({ type: Actions.GET_QUIZ_REJECTED, payload: e.response.data });
	}
}
// New Request to API
export function* submitQuiz(action: SubmitQuizRequest): SagaIterator {
	const { onSuccess } = action.payload;
	try {
		const { data }: Response<{ content: ResultResponse }> = yield call(api, {
			url: '/game-levels/submit-quiz-answer',
			data: action.payload,
			method: 'post'
		});
		yield put({ type: Actions.SUBMIT_QUIZ_FULFILLED, payload: data.content });
		if (typeof onSuccess === 'function') {
			onSuccess();
		}
	} catch (error) {
		yield put({ type: Actions.SUBMIT_QUIZ_REJECTED, payload: undefined });
	}
}

export function* gameLevelWatchers(): SagaIterator {
	yield all([takeLatest(Actions.GET_GAME_LEVELS_START, getGameLevels)]);
	yield all([takeLatest(Actions.GET_STORY_START, getStory)]);
	yield all([takeLatest(Actions.GET_QUIZ_START, getQuiz)]);
	yield all([takeLatest(Actions.SUBMIT_QUIZ_START, submitQuiz)]);
}
