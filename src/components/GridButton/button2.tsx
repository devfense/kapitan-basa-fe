import { Button as MuiButton } from "@material-ui/core";
import styled from "styled-components";

const Button2 = styled(MuiButton)<{ types?: 'edit' | 'delete'}>`
    &.MuiButton-root {
        height: 30px;
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.button.filled.normal.TEXT_COLOR};
        background-color: ${({ theme, types }) => types === 'edit' ? theme.button.filled.normal.BG_COLOR : theme.button.filled.error?.BG_COLOR};
        border-radius: 5px;
        margin: 15px 0px;
        &:hover {
            background-color:  ${({ theme, types }) => types === 'edit' ? theme.button.filled.hover?.BG_COLOR : theme.button.filled.error?.SECONDARY_BG_COLOR};
        }
    }
`
export default Button2;