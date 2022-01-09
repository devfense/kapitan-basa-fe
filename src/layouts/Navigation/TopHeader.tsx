import React, { useState, useEffect } from 'react';
import { IoMenuSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import { COOKIE } from '../../constants/variables'
import styled from 'styled-components';
import UserProfile from '../../components/AvatarProfile/index';
import { useLocaleContext } from '../../providers/localization';
import Button from '../../components/Button/index';

const Container = styled.div` 
    height: 55px;
    width: 85vw;
    background-color: ${({ theme }) => theme.app.header.normal.BG_COLOR};
    position: fixed;
    left: 15.2%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    @media screen and (max-width: 960px) {
        width: 100%;
        left: 0;
        display: flex;
        align-items: center;
        padding: 0;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        left: 0;
        display: flex;
        align-items: center;
        padding: 0;
    }
`;

const SubContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 15px;
    
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const MobileIcon = styled.div`
    display: none;
    color: ${({ theme }) => theme.icon.primary.normal.TEXT_COLOR};

    @media screen and (max-width: 960px) {
        display: flex;
        font-size: 1.8rem;
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        display: flex;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

const ProfileBtn = styled.div`
    cursor: pointer;
    transition: all 0.6s ease-in-out;
`;

const ProfileContainer = styled.div`
    height: auto;
    width: auto;
    background-color: ${({ theme }) => theme.profile.background.normal.BG_COLOR};
    position: absolute;
    top: 52px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: all 0.6s ease-in-out;

    @media screen and (max-width: 768px) {
        position: absolute;
        top: 52px;
        right: 20px;
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.4rem;
    margin-bottom: .4rem;
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

const LogoutButton = styled(Button)`
    &.MuiButton-root {
        height: 37px;
        width: 100%;
        margin-top: 10px;
        border-radius: 8px;
        border-color: ${({ theme }) => theme.button.outlined.error?.BORDER_COLOR};
        color: ${({ theme }) => theme.button.outlined.error?.SECONDARY_TEXT_COLOR};
        &:hover {
            background-color: ${({ theme }) => theme.button.outlined.error?.BG_COLOR};
        }
    }
`;

type ButtonProps = {
    handleClick: () => void
}

const TopHeader = (props: ButtonProps) => {

    const redirect = useNavigate()

    const strings = useLocaleContext();

    const [popover, setPopOver] = useState(false);

    const handleProfileClick = () => setPopOver(!popover);

    
    const handleLogout = () => {
        Cookies.remove(COOKIE.SETTINGS.NAME, { path: '/', domain: COOKIE.SETTINGS.DOMAIN })
        window.open('/', '_self')
    }

    return (
        <React.Fragment>
                <Container>
                    <SubContainer>
                        <MobileIcon>
                            <IoMenuSharp onClick={props.handleClick} />
                        </MobileIcon>
                        <ProfileBtn>
                            <UserProfile handleProfileClick={handleProfileClick} />
                        </ProfileBtn>
                    </SubContainer>
                        { 
                            popover &&  
                                <ProfileContainer>
                                    <TextBox> 
                                        <Placeholder>{ strings.userName }</Placeholder>
                                        <TextLabel>Juan Dela Cruz</TextLabel>
                                    </TextBox>
                                    <TextBox> 
                                        <Placeholder>{ strings.studID }</Placeholder>
                                        <TextLabel>87-240398</TextLabel>
                                    </TextBox>
                                    <TextBox> 
                                        <Placeholder>{ strings.gradeSection }</Placeholder>
                                        <TextLabel>10 / Our Lady of Peace</TextLabel>
                                    </TextBox>
                                    <TextBox> 
                                        <Placeholder>{ strings.emailAddress }</Placeholder>
                                        <TextLabel>juandelacruz@gmail.com</TextLabel>
                                    </TextBox>
                                    <LogoutButton onClick={handleLogout} shade="outlined">Logout</LogoutButton>
                                </ProfileContainer> 
                        }

                </Container>
        </React.Fragment>
    )
}

export default TopHeader;