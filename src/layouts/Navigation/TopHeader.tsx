import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components';
import UserProfile from '../../components/AvatarProfile/index'

const Container = styled.div` 
    height: 55px;
    width: 83vw;
    background-color: ${({ theme }) => theme.app.header.normal.BG_COLOR};
    position: fixed;
    left: 15.2%;
    display: flex;
    align-items: center;
    padding: 0px 20px;

    @media screen and (max-width: 960px) {
        width: 100vw;
        left: 0;
        display: flex;
        align-items: center;
    }
`;

const SubContainer = styled.div`
    width: 90vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const MobileIcon = styled.div`
    display: none;
    color: #FFF;

    @media screen and (max-width: 960px) {
        display: block;
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
    background-color: #FFF;
    position: absolute;
    top: 52px;
    right: 30px;
    z-index: 10;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: all 0.6s ease-in-out;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.6rem;
    margin-bottom: .4rem;
    cursor: pointer;
`
const Placeholder = styled.span`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.app.nav.normal.TERTIARY_TEXT_COLOR};
`

const TextLabel = styled.span`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.app.nav.normal.SECONDARY_TEXT_COLOR};
`

const TopHeader = () => {
    const [popover, setPopOver] = useState(false);

    const handleClick = () => setPopOver(!popover);
    return (
        <Container>
            <SubContainer>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <ProfileBtn onClick={handleClick}>
                    <UserProfile />
                </ProfileBtn>
                { 
                    popover ?  
                        <ProfileContainer>
                            <TextBox> 
                                <Placeholder>Username:</Placeholder>
                                <TextLabel>Juan Dela Cruz</TextLabel>
                            </TextBox>
                            <TextBox> 
                                <Placeholder>Student ID:</Placeholder>
                                <TextLabel>87-240398</TextLabel>
                            </TextBox>
                            <TextBox> 
                                <Placeholder>Grade and Section:</Placeholder>
                                <TextLabel>10 / Our Lady of Peace</TextLabel>
                            </TextBox>
                            <TextBox> 
                                <Placeholder>Email Address:</Placeholder>
                                <TextLabel>juandelacruz@gmail.com</TextLabel>
                            </TextBox>
                        </ProfileContainer> 
                    : null 
                }
            </SubContainer>
        </Container>
    )
}

export default TopHeader;