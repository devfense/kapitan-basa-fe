import update from 'immutability-helper';
import { Actions, UserTypes, UserState, AccountStatus } from './types';
// import { ApiResponseDetails } from '../../helpers/api';

export const mockUser = {
	id: 0,
	firstName: '',
	middleName: '',
	lastName: '',
	grade: '',
	section: '',
	username: '',
	emailAddress: '',
	isAuthenticated: false,
};

const initialState: UserState = {
	userInfo: mockUser,
	users: {
		isLoading: false,
		isLoadingApprove: false,
		isLoadingReject: false,
		list: [],
	},
};

export const users = (state = initialState, action: UserTypes): UserState => {
	switch (action.type) {
	case Actions.USER_STORE_INFO: {
		return {
			...state,
			userInfo: action.payload,
		};
	}
	case Actions.GET_USERS_START: {
		return update(state, {
			users: {
				isLoading: { $set: true },
			},
		});
	}
	case Actions.GET_USERS_FULFILLED: {
		return update(state, {
			users: {
				isLoading: { $set: false },
				list: { $set: [...action.payload] },
			},
		});
	}
	case Actions.GET_USERS_REJECTED: {
		return update(state, {
			users: {
				isLoading: { $set: false },
			},
		});
	}
	case Actions.DELETE_USER_START: {
		return update(state, {
			users: {
				isLoading: { $set: true }
			}
		});
	}
	case Actions.DELETE_USER_FULFILLED: {
		return update(state, {
			users: {
				isLoading: { $set: false }
			}
		});
	}
	case Actions.DELETE_USER_REJECTED: {
		return update(state, {
			users: {
				isLoading: { $set: false }
			}
		});
	}
	case Actions.APPROVE_USER_START: {
		return update(state, {
			users: {
				isLoadingApprove: { $set: true }
			}
		});
	}
	case Actions.APPROVE_USER_FULFILLED: {
		const indx = state.users.list.findIndex((u) => u.username === action.payload);
		const list = [...state.users.list];
		if (indx !== -1) {
			list[indx] = {
				...list[indx],
				status: AccountStatus.ACTIVE,
			};
			return update(state, {
				users: {
					isLoadingApprove: { $set: false },
					list: {
						$set: [...list],
					},
				},
			});
		}
		return {
			...state,
		};
	}
	case Actions.REJECT_USER_START: {
		return update(state, {
			users: {
				isLoadingReject: { $set: true }
			}
		});
	}
	case Actions.REJECT_USER_FULFILLED: {
		const indx = state.users.list.findIndex((u) => u.username === action.payload);
		const list = [...state.users.list];
		if (indx !== -1) {
			list[indx] = {
				...list[indx],
				status: AccountStatus.REJECTED,
			};
			return update(state, {
				users: {
					isLoadingReject: { $set: false },
					list: {
						$set: [...list],
					},
				},
			});
		}
		return {
			...state,
		};
	}
	default: {
		return { ...state };
	}
	}
};
