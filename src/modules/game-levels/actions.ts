import { Actions, GameLevelTypes, TGetGameLevelsData, TGetStoryData, TGetQuizData, TSubmitQuizAnswer } from './types';

export const getGameLevels = (data: TGetGameLevelsData): GameLevelTypes => ({
	type: Actions.GET_GAME_LEVELS_START,
	payload: data,
});

export const getStory = (data: TGetStoryData): GameLevelTypes => ({
	type: Actions.GET_STORY_START,
	payload: data
});

export const getQuiz = (data: TGetQuizData): GameLevelTypes => ({
	type: Actions.GET_QUIZ_START,
	payload: data
});

// New Action
export const submitQuiz = (data: TSubmitQuizAnswer): GameLevelTypes => ({
	type: Actions.SUBMIT_QUIZ_START,
	payload: data
});