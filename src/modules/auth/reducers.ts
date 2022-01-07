import { AccountStatus } from "../users/types";
import { Actions, AuthTypes, AuthState } from "./types";
import { ApiResponseDetails } from '../../helpers/api';


const mockResponse = { message: "", success: false, statusCode: 0 }

const initialState: AuthState = {
    apiResponse: mockResponse
}

export const auth = (state = initialState, action: AuthTypes): AuthState => {
    switch(action.type) {
        case Actions.AUTH_LOGIN_FULLFILLED: {
            return {
                ...state,
                apiResponse: action.payload
            }
        }
        default: {
            return { ...state };
        }
    }
}