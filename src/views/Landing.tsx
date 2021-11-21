import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import banner from '../Images/assets/banner.svg' 

const Container = styled.div`
    display: flex;
`;

const HeroBannerContainer = styled.div`
    display: flex;
    width: 100%;
    /* placeholders */
    height: 100vh; 
    background: ${({ theme }) => theme.app.nav.normal.BG_COLOR};
`;

const BannerSVG = styled.img`
    width: 100%;
    background-image: url(${banner});
    background-repeat: no-repeat;
    object-fit: contain;
`

const LoginContainer = styled.div`
    display: flex;
    width: 25%;
    background-color: ${({ theme }) => theme.app.sidebar.normal.BG_COLOR};
`;

const Landing: FunctionComponent = () => {
    return(
        <Container>
            <HeroBannerContainer>
                <BannerSVG />
            </HeroBannerContainer>
            <LoginContainer>

            </LoginContainer>
        </Container>
    )
};

export default Landing;