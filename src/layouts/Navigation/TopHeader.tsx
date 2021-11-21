import React from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa'
import styled from 'styled-components';

const Container = styled.div` 
    height: 51px;
    width: 83vw;
    background-color: ${({ theme }) => theme.app.nav.normal.BG_COLOR};
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
`
const MobileIcon = styled.div`
    display: none;
    color: #FFF;

    @media screen and (max-width: 960px) {
        display: block;
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const UserIcon = styled.div`
    font-size: 30px;
    color: #FFF;

    @media screen and (max-width: 960px) {
        display: block;
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const TopHeader = () => {
    return (
        <Container>
            <SubContainer>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <UserIcon>
                    <FaUserCircle/>
                </UserIcon>
            </SubContainer>
        </Container>
    )
}

export default TopHeader;