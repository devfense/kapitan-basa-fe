import { TextField as MuiTextField } from '@material-ui/core';
import styled from 'styled-components';

const TextField = styled(MuiTextField)`
    &.MuiTextField-root > div {
        height: 50px;
        width: 288px;
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({theme}) => theme.textField.text.normal.TEXT_COLOR};
        background-color: ${({theme}) => theme.textField.text.normal.BG_COLOR};
        border: 2px solid ${({theme}) => theme.textField.text.normal.BORDER_COLOR};
        border-radius: .5rem;
        outline: none;
        padding: 1rem;
        z-index: 1;

        &::placeholder {
            color: ${({theme}) => theme.textField.placeholder.normal.TEXT_COLOR};
        }

        &:hover {
            border: 2px solid ${({theme}) => theme.textField.text.hover?.BORDER_COLOR};
            transition: all 0.3s ease-in-out;
        }

        &:after, &:before {
            display: none;
        }
       
    }
  
`;

export const LabeledTextField = styled(MuiTextField) `
     &.MuiTextField-root {
        background-color: ${({theme}) => theme.textField.text.normal.BG_COLOR};
        width: 100%;
        padding: 5px 10px;
        box-sizing: border-box;
        border-radius: 10px;
        margin-bottom: 10px;
        > div {
            height: 25px;
            width: 100%;
            font-size: 0.9rem;
            font-weight: 500;
            color: ${({ theme }) => theme.app.content.normal.TEXT_COLOR};
            outline: none;
            z-index: 2;
            &:after, &:before {
                display: none;
            }
            @media screen and (max-width: 420px) {
                height: 23px;
                font-size: 0.8rem;
            }
        &:after, &:before {
            display: none;
        }
        }
        > label {
            margin-left: 10px;
            margin-top: 5px;
            z-index: 1;
            color: ${({theme}) => theme.textField.text.normal.TEXT_COLOR};
            transform: translate(0, 1.5px) scale(0.75);
            > .MuiInputLabel-asterisk {
                color: red;
            }
        }
     }
`;

export default TextField;