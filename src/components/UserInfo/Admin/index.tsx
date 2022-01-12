import React, { FunctionComponent } from 'react';
import { useLocaleContext } from '../../../providers/localization';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import styled from 'styled-components';


const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	line-height: 1.4rem;
	margin-bottom: 0.4rem;
	cursor: pointer;
`;
const Placeholder = styled.span`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.profile.placeholder.normal.TEXT_COLOR};

	@media screen and (max-width: 420px) {
		font-size: 0.8rem;
	}
`;

const TextLabel = styled.span`
	font-size: 0.9rem;
	font-weight: 600;
	color: ${({ theme }) => theme.profile.label.normal.TEXT_COLOR};

	@media screen and (max-width: 420px) {
		font-size: 0.9rem;
	}
`;

const index: FunctionComponent = () => {

	const strings = useLocaleContext();

	const { userInfo } = useSelector((state: RootState) => state.users);

	return (
		<div>	
			<TextBox>
				<Placeholder>{strings.userName}</Placeholder>
				<TextLabel>{userInfo.middleName === null ? `${userInfo.firstName} ${userInfo.lastName}` : `${userInfo.firstName} ${userInfo.middleName} ${userInfo.lastName}`}</TextLabel>
			</TextBox>
			<TextBox>
				<Placeholder>{strings.emailAddress}</Placeholder>
				<TextLabel>{userInfo.emailAddress}</TextLabel>
			</TextBox>
		</div>
	);
};

export default index;
