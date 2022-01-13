import { Action } from '../../types/Redux';

export enum Actions {
	GET_GAME_LEVELS_START = '@game-levels/GET_GAME_LEVELS_START',
	GET_GAME_LEVELS_FULFILLED = '@game-levels/GET_GAME_LEVELS_FULFILLED',
	GET_GAME_LEVELS_REJECTED = '@game-levels/GET_GAME_LEVELS_REJECTED',
}

export type Choices = 'A' | 'B' | 'C' | 'D';

export type Choice = {
	id: number;
	choiceLetter: Choices;
	choiceDescription: string;
};

export type Quiz = {
	id: number;
	questionContent: string;
	questionCorrectAnswer: Choices;
	choices: Choice[];
};

export type Story = {
	id: number;
	storyContent: string;
	quiz: Quiz[];
};

export type GameLevelView = {
	id: number;
	levelName: string;
	levelTitle: string;
	levelDescription: string;
	levelBgImgUrl: string;
};

export type GameLevel = {
	gameLevelId: number;
	levelScore: number | null;
	levelScoreSummary: number | null;
	levelRemarks: string | null;
	levelCleared: boolean;
	locked: boolean;
	gameLevelData: GameLevelView;
};

export type WithLoadingList<T> = {
	isLoading: boolean;
	count?: number;
	list: T;
};

export type TGetGameLevelsData = {
	studentID: string;
	limit: number;
	page?: number;
};

export interface GameLavelState {
	levels: WithLoadingList<GameLevel[]>;
}

export type GetGameLevelsRequest = Action<typeof Actions.GET_GAME_LEVELS_START, TGetGameLevelsData>;
type GetGameLevelsAction = Action<typeof Actions.GET_GAME_LEVELS_FULFILLED, { count?: number; list: GameLevel[] }>;
type GetGameLevelsError = Action<typeof Actions.GET_GAME_LEVELS_REJECTED>;

export type GameLevelTypes = GetGameLevelsRequest | GetGameLevelsAction | GetGameLevelsError;
