import { Button as MuiButton } from '@material-ui/core';
import styled from 'styled-components';

const Button = styled(MuiButton)<{ shade?: 'filled' | 'outlined' | 'submit' }>`
    &.MuiButton-root {
        height: 45px;
        font-size: 0.9rem;
        font-weight: 700;
        min-width: 100px;
        color: ${({theme, shade}) => shade === 'outlined' ? theme.button.outlined.normal.TEXT_COLOR : theme.button.filled.normal.TEXT_COLOR};
        background-color: ${({theme, shade}) => {
            switch(shade) {
                case 'filled':
                    return theme.button.filled.normal.BG_COLOR;
                case 'outlined':
                    return theme.button.outlined.normal.BG_COLOR;
                case 'submit':
                    return theme.button.filled.normal.SECONDARY_BG_COLOR;
                default: 
                    break;
            }
        }};
        border: 2px solid ${({theme, shade}) => {
            switch(shade) {
                case 'filled':
                    return theme.button.filled.normal.BG_COLOR;
                case 'outlined':
                    return theme.button.outlined.normal.BORDER_COLOR;
                case 'submit':
                    return theme.button.filled.hover?.SECONDARY_BG_COLOR;
                default: 
                    break;
            }
        }};
        border-radius: .5rem;
        &:hover {
            cursor: pointer;
            background-color: ${({theme, shade}) => {
                switch(shade) {
                    case 'filled':
                        return theme.button.filled.normal.BG_COLOR;
                    case 'outlined':
                        return theme.button.outlined.hover?.BG_COLOR;
                    case 'submit':
                        return theme.button.filled.hover?.SECONDARY_BG_COLOR;
                    default: 
                        break;
                }
            }};
            color: ${({theme, shade}) => shade === 'outlined' ? theme.button.outlined.hover?.TEXT_COLOR : theme.button.filled.hover?.TEXT_COLOR};
            transition: all 0.2s ease-in-out;
        }
        > span {
            font-family: 'QuickSand-Bold', sans-serif;
            text-transform: none;
        }

        /* shade === 'outlined' ? theme.button.outlined.normal.BG_COLOR : theme.button.filled.normal.BG_COLOR} */
    }
`;

export default Button;