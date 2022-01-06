import React from 'react';
import styled from 'styled-components';
import BrandName from '../../../components/Brand';
import AvatarLogo from '../../../components/AvatarLogo';
import TextField from '../../../components/TextField';
import { useLocaleContext } from '../../../providers/localization';
import Button from '../../../components/Button';
import { useDialog } from '../../../providers/dialog';
import RegisterStudent from '../../../dialogs/users/RegisterStudent';

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
        padding: auto !important;
    }
    @media screen and (max-width: 1366px) {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 7% 0px;
        padding: auto;
    }
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
    font-family: QuickSand-Bold;
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

const LoginForm = () => {
    const strings = useLocaleContext();
    const [openDialog, closeDialog] = useDialog();


    const handleStudentReg = () => {
        openDialog({
            children: <RegisterStudent handleClose={closeDialog}/>
        })
    }

    return (
        <LoginContainer>
            <AvatarLogo />
            <TitleBox>
                <BrandName />
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
            <StyledButton shade='filled'>{strings.login}</StyledButton>
            <LineBox>
                <Line />
                <Label>{strings.regLabel}</Label>
            </LineBox>
            <StyledButton shade='outlined' onClick={handleStudentReg}>{strings.asStudent}</StyledButton>
        </LoginContainer>
    )
};

export default LoginForm;