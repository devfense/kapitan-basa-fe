import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Boxes from '../assets/media/banner/BannerImages';
import Button from '../components/Button';
import TextField from '../components/TextField';
import BrandName from '../components/Brand';
import AvatarLogo from '../components/AvatarLogo/index'
import { useLocaleContext } from '../providers/localization';

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

    @media screen and (max-width: 960px) {
        display: none;
    }
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

const BoxImage = styled.img`
    width: 25%;
    height: 336px;
    object-fit: cover;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    padding: 7% 0;
    background-color: ${({ theme }) => theme.app.sidebar.normal.BG_COLOR};
    @media screen and (max-width: 960px) {
        width: 100%;
        margin: 7% auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 1024px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 7% 0px;
    }
`;

const BannerRow = styled.div`
    display: flex;
`;

const TextBox = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const TitleBox = styled.div`
    height: 51px;
    display: flex;
    align-items: center;
    padding: 0px 30px;
    margin-bottom: 40px;
`;

const LineBox = styled.div`
    height: 40px;
    width: 100%;
    max-width: 75%;
    margin: 15px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Line = styled.div`
    height: 3px;
    width: 100%;
    background-color: ${({theme}) => theme.app.sidebar.normal.SECONDARY_TEXT_COLOR};
    @media screen and (max-width: 960px) {
            width: 100%;
    }
`;

const Label = styled.span`
    color: ${({ theme }) => theme.app.sidebar.normal.TEXT_COLOR};
    background-color: ${({ theme}) => theme.app.sidebar.normal.BG_COLOR};
    padding: 0px 5px;
    font-size: 0.9rem;
    font-weight: 700;
    position: absolute;
    text-transform: uppercase;
`;

const StyledTextField = styled(TextField)`
    &.MuiTextField-root > div {
        width: auto;
        @media screen and (max-width: 960px) {
            width: 100%;
        }
    }
`;

const StyledButton = styled(Button)`
    width: 75%;
    &.MuiButtonBase-root {
        margin-top: 1.2rem;
    }
`;

const Landing: FunctionComponent = () => {
    const strings = useLocaleContext();

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
                <AvatarLogo />
                <TitleBox>
                    <BrandName medium='large'>Kapitan <span>Basa</span></BrandName>
                </TitleBox>
                <TextBox>
                    <StyledTextField 
                        type="username" 
                        placeholder="Username"
                    />
                </TextBox>
                <TextBox>
                    <StyledTextField 
                        type="password" 
                        placeholder="Password"
                    />
                </TextBox>
                <StyledButton>{strings.login}</StyledButton>
                <LineBox>
                    <Line />
                    <Label>{strings.regLabel}</Label>
                </LineBox>
                <StyledButton shade='outlined'>{strings.asStudent}</StyledButton>
            </LoginContainer>
        </Container>
    )
};

export default Landing;