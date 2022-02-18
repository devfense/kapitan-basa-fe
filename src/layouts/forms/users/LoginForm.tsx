import React, { FunctionComponent, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../../store';
import * as authActions from '../../../modules/auth/actions';
import * as userActions from '../../../modules/users/actions';
import { mockUser } from '../../../modules/users/reducers';
import styled from 'styled-components';
import BrandName from '../../../components/Brand';
import AvatarLogo from '../../../components/AvatarLogo';
import TextField from '../../../components/TextField';
import { useLocaleContext } from '../../../providers/localization';
import Button from '../../../components/Button';
import { useDialog } from '../../../providers/dialog';
import Alert from '../../../components/Alert/index';
import { ALERT, COOKIE } from '../../../constants/variables';
import { sanitizeServerMessage } from '../../../helpers/globalHelpers';

import RegisterStudent from '../../../dialogs/users/RegisterStudent';

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 25%;
	padding: 7% 0;
	background-color: ${({ theme }) => theme.app.sidebar.normal.BG_COLOR};
	@media screen and (max-width: 960px) {
		width: 100%;
		margin: 7% auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: auto !important;
	}
	@media screen and (max-width: 1366px) {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 7% 0px;
		padding: auto;
	}
`;

const TextBox = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
`;

const TitleBox = styled.div`
	height: 51px;
	display: flex;
	align-items: center;
	padding: 0px 30px;
	margin-bottom: 40px;
`;

const LineBox = styled.div`
	height: 40px;
	width: 100%;
	max-width: 75%;
	margin: 15px 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Line = styled.div`
	height: 3px;
	width: 100%;
	background-color: ${({ theme }) => theme.app.sidebar.normal.SECONDARY_TEXT_COLOR};
	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

const Label = styled.span`
	color: ${({ theme }) => theme.app.sidebar.normal.TEXT_COLOR};
	background-color: ${({ theme }) => theme.app.sidebar.normal.BG_COLOR};
	padding: 0px 5px;
	font-size: 0.9rem;
	font-weight: 700;
	font-family: QuickSand-Bold;
	position: absolute;
	text-transform: uppercase;
`;

const StyledTextField = styled(TextField)`
	&.MuiTextField-root > div {
		width: auto;
		@media screen and (max-width: 960px) {
			width: 100%;
		}
	}
`;

const StyledButton = styled(Button)`
	width: 75%;
	&:disabled {
		color: #FFF !important;
	}
	&.MuiButtonBase-root {
		margin-top: 1.2rem;
	}
`;

type Props = ReduxProps;

const LoginForm: FunctionComponent<Props> = (props: Props) => {
	const { authLogin, storeUserInfo, authResetResponse } = props;
	const { apiResponse } = useSelector((state: RootState) => state.auth);

	const strings = useLocaleContext();
	const [openDialog] = useDialog();
	const [openAlert] = useDialog();

	const [loginFields, setLoginFields] = useState({ username: '', password: '' });
	const [isLoggingIn, setIsLoggingIn] = useState(false);

	const redirect = useNavigate();

	useEffect(() => {
		return () => {
			authResetResponse();
		};
	}, []);

	useEffect(() => {
		handleLoginResponse();
	}, [apiResponse]);

	const handleStudentReg = () => {
		openDialog({
			children: <RegisterStudent />,
		});
	};

	const handleLoginResponse = () => {
		const { success, message, statusCode, content } = apiResponse;

		if (statusCode && statusCode > 0) {
			if (success) {
				//STORE CONTENT IN COOKIES AND STORE TO REDUX
				content.isAuthenticated = true;
				storeUserInfo(content || mockUser);
				Cookies.set(COOKIE.SETTINGS.NAME, JSON.stringify(content), {
					expires: COOKIE.SETTINGS.EXP,
					domain: COOKIE.SETTINGS.DOMAIN,
					path: '',
				});
				redirect('/dashboard');
			} else {
				setIsLoggingIn(false);
				openAlert({
					children: (
						<Alert
							type="Error"
							title={
								statusCode === 404
									? ALERT.GENERAL_TITLE.LOGIN_FAILED
									: ALERT.GENERAL_TITLE.ERROR
							}
							message={sanitizeServerMessage(message)}
						/>
					),
				});
			}
		}
	};

	const handleLogin = () => {
		setIsLoggingIn(true);
		authLogin(loginFields);
	};

	return (
		<LoginContainer>
			<AvatarLogo />
			<TitleBox>
				<BrandName fontSize='large'/>
			</TitleBox>
			<TextBox>
				<StyledTextField
					type="username"
					placeholder="Username"
					onChange={(event) =>
						setLoginFields((prev) => ({ ...prev, username: event.target.value }))
					}
				/>
			</TextBox>
			<TextBox>
				<StyledTextField
					type="password"
					placeholder="Password"
					onChange={(event) =>
						setLoginFields((prev) => ({ ...prev, password: event.target.value }))
					}
				/>
			</TextBox>
			<StyledButton disabled={isLoggingIn} shade="filled" onClick={handleLogin}>
				{isLoggingIn ? strings.logingIn + '...' : strings.login}
			</StyledButton>
			<LineBox>
				<Line />
				<Label>{strings.regLabel}</Label>
			</LineBox>
			<StyledButton shade="outlined" onClick={handleStudentReg}>
				{strings.asStudent}
			</StyledButton>
		</LoginContainer>
	);
};

const mapDispatchToProps = {
	authLogin: authActions.authLogin,
	storeUserInfo: userActions.storeUserInfo,
	authResetResponse: authActions.authResetResponse,
};

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(LoginForm);
