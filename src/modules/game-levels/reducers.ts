import update from 'immutability-helper';
import { Actions, GameLevelTypes, GameLavelState } from './types';

const initialState: GameLavelState = {
	levels: {
		isLoading: false,
		list: [],
	},
	currentStory: {
		isLoading: false,
		item: null
	},
	currentQuiz: {
		isLoading: false,
		list: [],
	}
};

export const gamelevel = (state = initialState, action: GameLevelTypes): GameLavelState => {
	switch (action.type) {
	case Actions.GET_GAME_LEVELS_START: {
		return update(state, {
			levels: {
				isLoading: {
					$set: true,
				},
			},
		});
	}
	case Actions.GET_GAME_LEVELS_FULFILLED: {
		return update(state, {
			levels: {
				isLoading: {
					$set: false,
				},
				count: {
					$set: action.payload.count
				},
				list: {
					$set: [...action.payload.list],
				},
			},
		});
	}
	case Actions.GET_GAME_LEVELS_REJECTED: {
		return update(state, {
			levels: {
				isLoading: {
					$set: false,
				},
			},
		});
	}
	case Actions.GET_STORY_START: {
		return update(state, {
			currentStory: {
				isLoading: { $set: true }
			}
		});
	}
	case Actions.GET_STORY_FULFILLED: {
		return update(state, {
			currentStory: {
				isLoading: { $set: false },
				item: { $set: { ...action.payload }}
			}
		});
	}
	case Actions.GET_QUIZ_START: {
		return update(state, {
			currentQuiz: {
				isLoading: { $set: true }
			}
		});
	}
	case Actions.GET_QUIZ_FULFILLED: {
		return update(state, {
			currentQuiz: {
				isLoading: { $set: false },
				list: { $set: [ ...action.payload ]}
			}
		});
	}
	default: {
		return { ...state };
	}
	}
};
