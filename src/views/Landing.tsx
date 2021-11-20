import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const HeroBannerContainer = styled.div`
    display: flex;
    width: 90%;
    /* placeholders */
    height: 1500px; 
    background: ${({ theme }) => theme.app.nav.normal.BG_COLOR};
`;

const LoginContainer = styled.div`
    display: flex;
    width: 25%;
    background-color: ${({ theme }) => theme.app.sidebar.normal.BG_COLOR};
`;

const Landing: FunctionComponent = () => {
    return(
        <Container>
            <HeroBannerContainer>
            </HeroBannerContainer>
            <LoginContainer>

            </LoginContainer>
        </Container>
    )
};

export default Landing;