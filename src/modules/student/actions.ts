
import { Actions, StudentTypes, StudentUser } from './types'

export const registerStudent = (data: StudentUser): StudentTypes => ({
    payload: data,
    type: Actions.REGISTER_STUDENT_START
});