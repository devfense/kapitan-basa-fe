import update from 'immutability-helper';
import { Actions, GameLevelTypes, GameLavelState } from './types';

const mockResponse = {
	id: 0,
	studentID: '',
	gameLevelId: 0,
	levelScore: 0,
	levelScoreSummary: '',
	levelRemarks: '',
	levelCleared: false,
}

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
	},
	quizResult: {
		isLoading: false,
		result: mockResponse
	}, 
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
		case Actions.SUBMIT_QUIZ_START: {
			return update(state, {
				quizResult: {
					isLoading: { $set: true },
				}
			})
		}
		case Actions.SUBMIT_QUIZ_FULFILLED: {
			if (action.payload.levelRemarks === 'PASSED') {
				const gameLevelId = action.payload.gameLevelId;
				const indx = state.levels.list.findIndex(({gameLevelId: gId}) => gId === gameLevelId);
				return update(state, {
					quizResult: {
						isLoading: { $set: false },
						result: {
							$set: { ...action.payload }
						}
					},
					levels: {
						isLoading: { $set: false },
						list: {
							[indx]: { $merge: { levelCleared: true } }
						}
					}
				})
			} else {
				return update(state, {
					quizResult: {
						isLoading: { $set: false },
						result: {
							$set: { ...action.payload }
						}
					}
				})
			}
		}
		default: {
			return { ...state };
		}
	}
};
