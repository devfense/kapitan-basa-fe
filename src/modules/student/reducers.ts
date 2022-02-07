import { AccountStatus } from '../users/types';
import { Actions, StudentTypes, StudentState } from './types';
// import { ApiResponseDetails } from '../../helpers/api';

const mockUser = {
	id: 0,
	studentID: '',
	lastName: '',
	username: '',
	firstName: '',
	middleName: '',
	section: '',
	grade: '',
	emailAddress: '',
	accountStatus: AccountStatus.ACTIVE,
};
const mockResponse = {
	message: '',
	success: false,
	statusCode: 0,
};
const initialState: StudentState = {
	studentList: [mockUser],
	apiResponse: mockResponse,
};

export const student = (state = initialState, action: StudentTypes): StudentState => {
	switch (action.type) {
	case Actions.GET_STUDENT_LIST_START: {
		return {
			...state,
		};
	}
	case Actions.GET_STUDENT_LIST_FULFILLED: {
		return {
			...state,
			studentList: action.payload,
		};
	}
	case Actions.REGISTER_STUDENT_FULFILLED: {
		return {
			...state,
			apiResponse: action.payload,
		};
	}
	case Actions.REGISTER_STUDENT_REJECTED: {
		return {
			...state,
			apiResponse: action.payload,
		};
	}
	default: {
		return { ...state };
	}
	}
};
