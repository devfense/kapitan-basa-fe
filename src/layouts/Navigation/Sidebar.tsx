import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 20%;
    background-color: ${({theme}) => theme.app.sidebar.normal.BG_COLOR};
    height: 100vh;
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    > a {
        margin-bottom: 10px;
        text-decoration: none;
    }
`;

const Sidebar = () => {
    return (
        <Container>
            <NavContainer>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/game'>Game Levels</Link>
            </NavContainer>
        </Container>
    )
};

export default Sidebar;