import React from 'react'
import { TextField as MuiTextField } from "@material-ui/core";
import styled from "styled-components";

const TextFieldBox = styled.div`
    padding: 5px 10px 5px;
    color: ${({theme}) => theme.textField.text.normal.TEXT_COLOR};
    background-color: ${({theme}) => theme.textField.text.normal.BG_COLOR};
    border: 2px solid ${({theme}) => theme.textField.text.normal.BORDER_COLOR};
    border-radius: 16px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const Label = styled.span`
    font-size: 0.70rem;
    font-weight: 600;

    @media screen and (max-width: 420px) {
        font-size: 0.65rem;
    }
`;

const TextField = styled(MuiTextField) `
     &.MuiTextField-root > div {
        height: 25px;
        width: 100%;
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.app.content.normal.TEXT_COLOR};
        background-color: ${({theme}) => theme.textField.text.normal.BG_COLOR};
        border: 2px solid ${({theme}) => theme.textField.text.normal.BORDER_COLOR};
        outline: none;
        z-index: 1;

        &:after, &:before {
            display: none;
        }

        @media screen and (max-width: 420px) {
            height: 23px;
            font-size: 0.8rem;
        }
    }
`;

type TextFieldProps = {
    label: string;
};

const index = (props: TextFieldProps) => {
    return (
        <TextFieldBox>
            <Label>{ props.label }</Label>
            <TextField />
        </TextFieldBox>
    )
}

export default index;