import { AccountStatus } from "../users/types";
import { Actions, StudentTypes, StudentState } from "./types";

const mockUser = { lastName: '', firstName: '', middleName: '', section: 'Kamagong', grade: 10, emailAdd: '', accountStatus: AccountStatus.ACTIVE};

const initialState: StudentState = {
    studentList: [
        mockUser
    ]
}

export const student = (state = initialState, action: StudentTypes): StudentState => {
    switch(action.type) {
        case Actions.GET_STUDENT_LIST_START: {
            return {
                ...state,
            }
        }
        case Actions.GET_STUDENT_LIST_FULFILLED: {
            return {
                ...state,
                studentList: action.payload
            }
        }
        default: {
            return { ...state };
        }
    }
}