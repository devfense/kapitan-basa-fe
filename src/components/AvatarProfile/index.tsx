import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styled from 'styled-components';

const ColorRandom = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 100%;
	background-color: #f86969;
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

	const color = ['69dbf8', 'f8b569', 'f86969'];

	const random = Math.floor(Math.random() * color.length);

	const selectedColor = color[random];

	const { userInfo } =  useSelector((state: RootState) => state.users);

	return (
		<>
			<ColorRandom style={{backgroundColor: `#${selectedColor}`}} onClick={props.handleProfileClick}>
				<Initial>{userInfo.firstName[0]}{userInfo.lastName[0]}</Initial>
			</ColorRandom>
		</>
	);
};

export default AvatarProfile;
