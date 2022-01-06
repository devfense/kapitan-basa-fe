import React from 'react';
import styled from 'styled-components';
import { DialogContainer } from '../../components/Dialog';
import RegistrationForm from '../../layouts/forms/users/RegistrationForm';

const StyledDialogContainer = styled(DialogContainer)`
    width: 517px;
`
interface RegStudentProps {
    handleClose: () => void
}

const RegisterStudent = ({handleClose}: RegStudentProps) => {
    return (
        <StyledDialogContainer title={'Register as Student'}>
            <RegistrationForm submitText={'Register'} handleClose={handleClose}/>
        </StyledDialogContainer>
    )
}

export default RegisterStudent;