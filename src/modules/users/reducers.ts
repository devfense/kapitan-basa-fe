import { AccountStatus } from "../users/types";
import { Actions, UserTypes, UserState, AllUser } from "./types";
// import { ApiResponseDetails } from '../../helpers/api';


export const mockUser = {
    firstName: "",
    lastName: "",
    grade: "",
    section: "",
    username: "",
    emailAddress: "",
    isAuthenticated: false
}

const initialState: UserState = {
    userInfo: mockUser 
}

export const users = (state = initialState, action: UserTypes): UserState => {
    switch(action.type) {
        case Actions.USER_STORE_INFO: {
            return {
                ...state,
                userInfo: action.payload
            }
        }
        default: {
            return { ...state };
        }
    }
}