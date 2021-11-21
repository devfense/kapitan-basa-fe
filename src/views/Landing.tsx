import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Boxes from '../assets/media/banner/BannerImages';

const Container = styled.div`
    display: flex;
`;

const HeroBannerContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    /* placeholders */
    height: 100vh; 
    background: ${({ theme }) => theme.app.nav.normal.BG_COLOR};
    overflow-y: hidden;
`;

const BoxImage = styled.img`
    width: 25%;
    height: 300px;
`

const LoginContainer = styled.div`
    display: flex;
    width: 25%;
    background-color: ${({ theme }) => theme.app.sidebar.normal.BG_COLOR};
`;

const BannerRow = styled.div`
    display: flex;
`;

const Landing: FunctionComponent = () => {
    return(
        <Container>
            <HeroBannerContainer>
                <BannerRow>
                    <BoxImage src={Boxes.Box1}/>
                    <BoxImage src={Boxes.Box2}/>
                    <BoxImage src={Boxes.Box3}/>
                    <BoxImage src={Boxes.Box4}/>
                </BannerRow>
                <BannerRow>
                    <BoxImage src={Boxes.Box5}/>
                    <BoxImage src={Boxes.Box6}/>
                    <BoxImage src={Boxes.Box7}/>
                    <BoxImage src={Boxes.Box8}/>
                </BannerRow>
                <BannerRow>
                    <BoxImage src={Boxes.Box9}/>
                    <BoxImage src={Boxes.Box10}/>
                    <BoxImage src={Boxes.Box11}/>
                    <BoxImage src={Boxes.Box12}/>
                </BannerRow>
                <BannerRow>
                    <BoxImage src={Boxes.Box13}/>
                    <BoxImage src={Boxes.Box14}/>
                    <BoxImage src={Boxes.Box15}/>
                    <BoxImage src={Boxes.Box16}/>
                </BannerRow>
            </HeroBannerContainer>
            <LoginContainer>

            </LoginContainer>
        </Container>
    )
};

export default Landing;