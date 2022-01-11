import React from 'react';
import styled from 'styled-components';
import { DialogContainer } from '../../components/Dialog';
import UserForm from '../../layouts/forms/users/UserForm';

const StyledDialogContainer = styled(DialogContainer)`
    width: 517px;
`;

const EditUser = () => {
	return (
		<StyledDialogContainer title={'Edit User'}> 
			<UserForm submitText={'Update'}/>
		</StyledDialogContainer>
	);
};

export default EditUser;