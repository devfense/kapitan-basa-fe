import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const registrationValidation = Yup.object().shape({
    grade: Yup.number().required('Grade is required')
        .min(7, 'Min of Grade 7')
        .max(12, 'Max of Grade 12 only')
        .typeError('Should be a number'),
    section: Yup.string().required('Section is required')
        .max(20, 'Max of 20 characters only'),
    suffix: Yup.string().notRequired()          
        .max(4, 'Max of 20 characters only')
        .matches(/Jr|Sr|III|IV|V|VI|VII|VIII|IX|X|^$/, 'Only supported Suffixes are: Jr, Sr, III, IV, V, VI, VII, VIII, IX, X'),
    studentID: Yup.string().max(15, 'Max of 15 characters only'),
    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match')
            
});

export const regValidationOption = { resolver: yupResolver(registrationValidation) };