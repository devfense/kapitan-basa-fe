import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Boxes from '../assets/media/banner/BannerImages';
import BoyReading from '../assets/media/reading/Reading';

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

const TextField = styled.input`
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
`

const Label = styled.label`
    font-size: 1rem;
    font-weight: 600;
    color: #435EBE;
    margin-bottom: .7rem;
`

const LoginBtn = styled.button`
    height: 55px;
    width: 75%;
    font-size: 0.9rem;
    font-weight: 700;
    color: #FFFFFF;
    background-color: #3787FF;
    border-radius: .5rem;
    border: none;
    outline: none;
    padding: 1rem;
    z-index: 1;
    margin-top: 1.6rem;
    cursor: pointer;

    &:hover {
        cursor: pointer;
        background-color: #4b93ff;
        transition: all 0.2s ease-in-out;
    }
`

const RegisterBtn = styled.button`
    height: 55px;
    width: 75%;
    font-size: 0.9rem;
    font-weight: 700;
    color: #6b8af8;
    background-color: #FFF;
    border: 2px solid #6b8af8;
    border-radius: .5rem;
    outline: none;
    padding: 1rem;
    z-index: 1;
    margin-top: 1.2rem;
    cursor: pointer;

    &:hover {
        cursor: pointer;
        color: #FFF;
        background-color: #6b8af8;
        transition: all 0.2s ease-in-out;
    }
`

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
                <AvatarBox>
                    <Avatar>
                        <AvatarImg src={BoyReading.Reading}/>
                    </Avatar>
                </AvatarBox>
                
                <Title>Kapitan <span>Basa</span></Title>

                <TextBox>
                    <Label>Username</Label> 
                    <TextField 
                        type="username" 
                        placeholder="Username"
                    />
                </TextBox>

                <TextBox>
                    <Label>Password</Label> 
                    <TextField 
                        type="password" 
                        placeholder="Password"
                    />
                </TextBox>

                <LoginBtn>Login</LoginBtn>
                <RegisterBtn>Register as Student</RegisterBtn>
            </LoginContainer>
        </Container>
    )
};

export default Landing;