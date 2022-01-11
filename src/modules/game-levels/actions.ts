import { Actions, GameLevelTypes, TGetGameLevelsData } from './types';

export const getGameLevels = (data: TGetGameLevelsData): GameLevelTypes => ({
	type: Actions.GET_GAME_LEVELS_START,
	payload: data,
});