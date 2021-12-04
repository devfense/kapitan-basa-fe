import { Button as MuiButton } from "@material-ui/core";
import styled from "styled-components";

const ActionButton = styled(MuiButton)<{ types?: 'edit' | 'delete' | 'approve' | 'reject'}>`
    &.MuiButton-root {
        height: 30px;
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme, types }) => {
            switch(types) {
                case 'edit':
                    return theme.actionButton.edit.normal.TEXT_COLOR;
                case 'delete': 
                    return theme.actionButton.delete.normal.TEXT_COLOR;
                case 'approve':
                    return theme.actionButton.approve.normal.TEXT_COLOR;
                case 'reject':
                    return theme.actionButton.reject.normal.TEXT_COLOR;
                default:
                    return theme.actionButton.edit.normal.TEXT_COLOR;
            }
        }};
        background-color: ${({ theme, types }) => {
            switch(types) {
                case 'edit':
                    return theme.actionButton.edit.normal.BG_COLOR;
                case 'delete': 
                    return theme.actionButton.delete.normal.BG_COLOR;
                case 'approve':
                    return theme.actionButton.approve.normal.BG_COLOR;
                case 'reject':
                    return theme.actionButton.reject.normal.BG_COLOR;
                default:
                    return theme.actionButton.edit.normal.BG_COLOR;
            }
        }};
        border-radius: 5px;
        margin: 15px 0px;
        &:hover {
            background-color: ${({ theme, types }) => {
                switch(types) {
                    case 'edit':
                        return theme.actionButton.edit.hover?.BG_COLOR;
                    case 'delete': 
                        return theme.actionButton.delete.hover?.BG_COLOR;
                    case 'approve':
                        return theme.actionButton.approve.hover?.BG_COLOR;
                    case 'reject':
                        return theme.actionButton.reject.hover?.BG_COLOR;
                    default:
                        return theme.actionButton.edit.hover?.BG_COLOR;
                }
            }};
        }
    }
`
export default ActionButton;