import { Action } from '../../types/Redux';

export enum Actions {
	GET_GAME_LEVELS_START = '@game-levels/GET_GAME_LEVELS_START',
	GET_GAME_LEVELS_FULFILLED = '@game-levels/GET_GAME_LEVELS_FULFILLED',
	GET_GAME_LEVELS_REJECTED = '@game-levels/GET_GAME_LEVELS_REJECTED',
	GET_STORY_START = '@game-levels/GET_STORY_START',
	GET_STORY_FULFILLED = '@game-levels/GET_STORY_FULFILLED',
	GET_STORY_REJECTED = '@game-levels/GET_STORY_REJECTED',
	GET_QUIZ_START = '@game-levels/GET_QUIZ_START',
	GET_QUIZ_FULFILLED = '@game-levels/GET_QUIZ_FULFILLED',
	GET_QUIZ_REJECTED = '@game-levels/GET_QUIZ_REJECTED'
}

export type Choices = 'A' | 'B' | 'C' | 'D';

export type Choice = {
	id: number;
	choiceLetter: Choices;
	choiceDescription: string;
};

export type TGetQuizData = {
	id: number;
}

export type Quiz = {
	id: number;
	questionContent: string;
	choices: Choice[];
};

export type TGetStoryData = {
	id: number;
}

export type Story = {
	id: number;
	levelName?: string;
	storyContent: string;
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
	list: T[];
};

export type WithLoadingItem<T> = {
	isLoading: boolean;
	item: T | null;
};

export type TGetGameLevelsData = {
	studentID: string;
	limit: number;
	page?: number;
};

export type TAnswers = { storyID: number; questionId: number; answerLetter: string }[];

export interface GameLavelState {
	levels: WithLoadingList<GameLevel>;
	currentStory: WithLoadingItem<Story>;
	currentQuiz: WithLoadingList<Quiz>;
}

export type GetGameLevelsRequest = Action<typeof Actions.GET_GAME_LEVELS_START, TGetGameLevelsData>;
type GetGameLevelsAction = Action<typeof Actions.GET_GAME_LEVELS_FULFILLED, { count?: number; list: GameLevel[] }>;
type GetGameLevelsError = Action<typeof Actions.GET_GAME_LEVELS_REJECTED>;

export type GetStoryRequest = Action<typeof Actions.GET_STORY_START, TGetStoryData>;
type GetStoryAction = Action<typeof Actions.GET_STORY_FULFILLED, Story>;
type GetStoryError = Action<typeof Actions.GET_STORY_REJECTED>;

export type GetQuizRequest = Action<typeof Actions.GET_QUIZ_START, TGetQuizData>;
type GetQuizAction = Action<typeof Actions.GET_QUIZ_FULFILLED, Quiz[]>;
type GetQuizError = Action<typeof Actions.GET_QUIZ_REJECTED>;

export type GameLevelTypes = 
	| GetGameLevelsRequest 
	| GetGameLevelsAction 
	| GetGameLevelsError 
	| GetStoryRequest 
	| GetStoryAction 
	| GetStoryError 
	| GetQuizRequest 
	| GetQuizAction 
	| GetQuizError;
