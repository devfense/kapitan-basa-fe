import { Actions, AuthTypes, AuthState } from './types';

const mockResponse = { message: '', success: false, statusCode: 0 };

const initialState: AuthState = {
	apiResponse: mockResponse,
};

export const auth = (state = initialState, action: AuthTypes): AuthState => {
	switch (action.type) {
	case Actions.AUTH_LOGIN_FULLFILLED: {
		return {
			...state,
			apiResponse: action.payload,
		};
	}
	case Actions.AUTH_LOGIN_ERROR: {
		return {
			...state,
			apiResponse: action.payload,
		};
	}
	case Actions.AUTH_RESET_RESPONSE: {
		return {
			...state,
			apiResponse: mockResponse,
		};
	}
	default: {
		return { ...state };
	}
	}
};
