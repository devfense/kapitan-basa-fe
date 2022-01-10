import update from 'immutability-helper';
import { Actions, GameLevelTypes, GameLavelState } from "./types";

const initialState: GameLavelState = {
    levels: {
        isLoading: false,
        list: [],
    }
}

export const gamelevel = (state = initialState, action: GameLevelTypes): GameLavelState => {
    switch(action.type) {
        case Actions.GET_GAME_LEVELS_START: {
            return update(state, {
                levels: {
                    isLoading: {
                        $set: true
                    }
                }
            })
        }
        case Actions.GET_GAME_LEVELS_FULFILLED: {
            return update(state, {
                levels: {
                    isLoading: {
                        $set: false
                    },
                    list: {
                        $set: [...action.payload]
                    }
                }
            });
        }
        case Actions.GET_GAME_LEVELS_REJECTED: {
            return update(state, {
                levels: {
                    isLoading: {
                        $set: false
                    }
                }
            })
        }
        default: {
            return { ...state };
        }
    }
}