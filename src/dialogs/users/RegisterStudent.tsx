import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { DialogContainer } from '../../components/Dialog';
import RegistrationForm from '../../layouts/forms/users/RegistrationForm';

const StyledDialogContainer = styled(DialogContainer)`
	width: 517px;

	@media screen and (min-width: 320px) and (max-width: 420px) {
		width: 100%;
	}
`;

const RegisterStudent: FunctionComponent = () => {
	return (
		<StyledDialogContainer title={'Register as Student'}>
			<RegistrationForm submitText={'Register'} />
		</StyledDialogContainer>
	);
};

export default RegisterStudent;
