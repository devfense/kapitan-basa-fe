import React, { FunctionComponent } from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styled from 'styled-components';

const AvatarUser = styled(Avatar)`
	width: 40px;
	height: 40px;
	border-radius: 100%;
	/* background-color: #f86969; */
	border: 3px solid ${({ theme }) => theme.app.header.normal.SECONDARY_BG_COLOR};
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 960px) {
		display: block;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
`;

const Initial = styled.span`
	color: #FFF;
	font-size: 1.2rem;
	font-weight: 500;
	font-family: Arial, Helvetica, sans-serif;
	-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

type ProfileProps = {
	handleProfileClick: () => void;
};

const AvatarProfile: FunctionComponent<ProfileProps> = (props: ProfileProps) => {

	// const color = ['69dbf8', 'f8b569', 'f86969'];

	// const random = Math.floor(Math.random() * color.length);

	// const selectedColor = color[random];

	function stringToColor(string: string) {
		let hash = 0;
		let i;
	  
		/* eslint-disable no-bitwise */
		for (i = 0; i < string.length; i++) {
		  hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}
	  
		let color = '#';
	  
		for (i = 0; i < 3; i++) {
		  const value = (hash >> (i * 8)) & 0xff;
		  color += `00${value.toString(16)}`.substr(-2);
		}
		/* eslint-enable no-bitwise */
	  
		return color;
	}

	function stringAvatar(name: string) {
		console.log(name);
		return {
		  style: {
			backgroundColor: stringToColor(name),
		  },
		  children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
		};
	}

	const { userInfo } =  useSelector((state: RootState) => state.users);

	return (
		<>
			<AvatarUser {...stringAvatar(`${userInfo.firstName} ${userInfo.lastName}`)} onClick={props.handleProfileClick}>
				<Initial>{userInfo.firstName[0]}{userInfo.lastName[0]}</Initial>
			</AvatarUser>
		</>
	);
};

export default AvatarProfile;
