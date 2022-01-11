import React, { FunctionComponent } from 'react';
import { Avatar as MuiAvatar } from '@material-ui/core';
import Profile from '../../assets/media/profile/Profile';
import styled from 'styled-components';

const Avatar = styled(MuiAvatar)`
    width: 20px;
    color: #FFF;
    border: 3px solid ${({ theme }) => theme.app.header.normal.SECONDARY_BG_COLOR};

    @media screen and (max-width: 960px) {
        display: block;
        width: 20px;
        cursor: pointer;
    }
`;

type ProfileProps = {
    handleProfileClick: () => void;
}

const AvatarProfile: FunctionComponent<ProfileProps> = (props: ProfileProps) => {
	return (
		<div>
			<Avatar alt="Dylan Lee" src={Profile.Dylan}  onClick={props.handleProfileClick}/>
		</div>
	);
};

export default AvatarProfile;
