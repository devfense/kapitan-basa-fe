import styled from 'styled-components';
import React, { useState, useEffect, FunctionComponent } from 'react';
import Cookies from 'js-cookie';
import { mockUser } from './modules/users/reducers';
import * as userActions from './modules/users/actions';
import { useSelector, connect, ConnectedProps } from 'react-redux';
import { RootState } from './store';
import { useNavigate } from 'react-router';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './layouts/Navigation/Sidebar';
import TopHeader from './layouts/Navigation/TopHeader';
import Dashboard from './views/Dashboard/Dashboard';
import Game from './views/Game/Game';
import TabulationAndResult from './views/TabulationAndResult/TabulationAndResult';
import UserManagament from './views/UserManagement/UserManagament';
import { COOKIE } from './constants/variables';
import { AccountTypes } from './constants/types';
import { STUDENT_ACL, ADMIN_ACL } from './constants/MenuItem/MenuItem';



const Container = styled.div`
    display: flex;
`;

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #F2F7FF;
    margin-top: 51px;
`;


type Props = ReduxProps;

const MainContent: FunctionComponent<Props> = (props: Props) => {

	const { userInfo } = useSelector((state: RootState) => state.users);
	const { storeUserInfo } = props;
	const location = useLocation();

	const [toggle, setToggle ] = useState(false);

	const redirect = useNavigate();

	useEffect(() => {
		validateUserAuth();
	}, []);


	useEffect(() => {
		controlUserACL();
	});


	const validateUserAuth = () => {
		if(Cookies.get(COOKIE.SETTINGS.NAME)){
			storeUserInfo(JSON.parse(Cookies.get(COOKIE.SETTINGS.NAME) || '') || mockUser);
		} else {
			redirect('/');
		}  
	};

	const controlUserACL = () => {
		if(userInfo.accountType === AccountTypes.STUDENT){
			!STUDENT_ACL.find((item) => item.route === location.pathname) && location.pathname !== '/' && redirect('/dashboard');
		} else {
			!ADMIN_ACL.find((item) => item.route === location.pathname)  && location.pathname !== '/' && redirect('/dashboard');
		}
	};

	const handleClick = () => {
		setToggle(!toggle);
	};

	return (
		<React.Fragment>
			{
				userInfo.isAuthenticated ?
					<Container>       
						<Sidebar toggle={toggle} handleClick={() => handleClick()}/>
						<TopHeader handleClick={() => handleClick()}/>
						<MainContainer>
							<Routes>
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/game" element={<Game />} />
								<Route path="/results" element={<TabulationAndResult />} />
								<Route path="/user-management" element={<UserManagament />} />
							</Routes>
						</MainContainer>
					</Container> : null 
			}
		</React.Fragment>
	);
};

const mapDispatchToProps = {
	storeUserInfo: userActions.storeUserInfo
};


const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(MainContent);

