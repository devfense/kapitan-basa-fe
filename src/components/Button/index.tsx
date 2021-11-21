import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import styled from 'styled-components';

const Button = styled(MuiButton)<{ shade?: 'filled' | 'outlined' }>`
    &.MuiButton-root {
        height: 55px;
        font-size: 0.9rem;
        font-weight: 700;
        min-width: 100px;
        color: ${({theme, shade}) => shade === 'outlined' ? theme.button.outlined.normal.TEXT_COLOR : theme.button.filled.normal.TEXT_COLOR};
        background-color: ${({theme, shade}) => shade === 'outlined' ? theme.button.outlined.normal.BG_COLOR : theme.button.filled.normal.BG_COLOR};
        border: 2px solid ${({theme, shade}) => shade === 'outlined' ? theme.button.outlined.normal.BORDER_COLOR : theme.button.filled.normal.BORDER_COLOR};
        border-radius: .5rem;
        &:hover {
            cursor: pointer;
            background-color: ${({theme, shade}) => shade === 'outlined' ? theme.button.outlined.hover?.BG_COLOR : theme.button.filled.hover?.BG_COLOR};
            color: ${({theme, shade}) => shade === 'outlined' ? theme.button.outlined.hover?.TEXT_COLOR : theme.button.filled.hover?.TEXT_COLOR};
            transition: all 0.2s ease-in-out;
        }
    }
`;

export default Button;