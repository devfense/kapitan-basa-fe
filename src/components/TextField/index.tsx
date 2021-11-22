import { TextField as MuiTextField } from '@material-ui/core';
import styled from 'styled-components';

const TextField = styled(MuiTextField)`
    &.MuiTextField-root > div {
        height: 50px;
        width: 270px;
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

export default TextField;