import { Button as MuiButton } from '@material-ui/core';
import styled from 'styled-components';

const Button = styled(MuiButton)`
    &.MuiButton-root {
        height: 30px;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 100px;
        color: ${({ theme }) => theme.button.filled.normal.TEXT_COLOR};
        background-color: #42ba96;
        border-radius: 5px;
        margin: 15px 0px;
        &:hover {
            background-color: #54c0a0;
        }
    }
`;
export default Button;