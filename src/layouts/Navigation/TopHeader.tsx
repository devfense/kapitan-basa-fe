import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go'
import styled from 'styled-components';
import UserProfile from '../../components/AvatarProfile/index'
import { useLocaleContext } from '../../providers/localization';

const Container = styled.div` 
    height: 55px;
    width: 84vw;
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
`;
const MobileIcon = styled.div`
    display: none;
    color: ${({ theme }) => theme.icon.primary.normal.TEXT_COLOR};

    @media screen and (max-width: 960px) {
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
    line-height: 1.6rem;
    margin-bottom: .4rem;
    cursor: pointer;
`;
const Placeholder = styled.span`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.profile.placeholder.normal.TEXT_COLOR};

    @media screen and (max-width: 420px) {
        font-size: 0.8rem;
    }
`;

const TextLabel = styled.span`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.profile.label.normal.TEXT_COLOR};

    @media screen and (max-width: 420px) {
        font-size: 0.9rem;
    }
`;

type ButtonProps = {
    handleClick: () => void
}

const TopHeader = (props: ButtonProps) => {
    const strings = useLocaleContext();

    const [popover, setPopOver] = useState(false);

    const handleProfileClick = () => setPopOver(!popover);
    return (
        <Container>
            <SubContainer>
                <MobileIcon onClick={props.handleClick}>
                    <GoThreeBars />
                </MobileIcon>
                <ProfileBtn onClick={handleProfileClick}>
                    <UserProfile />
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
                        </ProfileContainer> 
                }
            
        </Container>
    )
}

export default TopHeader;