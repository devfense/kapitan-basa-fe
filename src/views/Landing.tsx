import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Boxes from '../assets/media/banner/BannerImages';
import Button from '../components/Button';
import TextField from '../components/TextField';
import BoyReading from '../assets/media/reading/Reading';
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
    padding: 60px 0px;
    background-color: ${({ theme }) => theme.app.sidebar.normal.BG_COLOR};
`;

const BannerRow = styled.div`
    display: flex;
`;

const AvatarBox = styled.div`
    height: 140px;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.5rem;
    margin-bottom: 0.5rem;
`

const Avatar = styled.div`
    height: 140px;
    width: 140px;
    border-radius: 100%;
    background-color: #ebf3ff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AvatarImg = styled.img`
    width: 85%;
`

const Title = styled.span`
    color: #435EBE;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    > span {
        color: #41BBDD;
    }
`

const TextBox = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`

const TextFieldd = styled.input`
    height: 15px;
    width: 87%;
    font-size: 0.9rem;
    font-weight: 500;
    color: #435EBE;
    background-color: #ebf3ff;
    border: 2px solid #ebf3ff;
    border-radius: .5rem;
    outline: none;
    padding: 1rem;
    z-index: 1;

    &::placeholder {
        color: #b8d3ff;
    }

    &:hover {
        border: 2px solid #dde9fc;
        transition: all 0.3s ease-in-out;
    }
`;

const StyledTextField = styled(TextField)`
    margin-top: 71px;
    &.MuiTextField-root > div {
        width: 288px;
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
                <AvatarBox>
                    <Avatar>
                        <AvatarImg src={BoyReading.Reading}/>
                    </Avatar>
                </AvatarBox>
                
                <Title>Kapitan <span>Basa</span></Title>

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
                <StyledButton shade='outlined'>{strings.asStudent}</StyledButton>
            </LoginContainer>
        </Container>
    )
};

export default Landing;