import { 
	DialogContent as MuiDialogContent, 
	DialogTitle as MuiDialogTitle,
	IconButton, 
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { DialogActions as MuiDialogActions } from '@material-ui/core';
import Button from '../../components/Button/index';
import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

  
const StyledMuiDialogTitle = styled(MuiDialogTitle)`
    margin: 0;
    max-height: 117px;
    overflow-y: hidden;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    &:hover {
      overflow-y: auto;
    }
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    > h6 {
      font-size: 16px;
      font-family: OpenSans-SemiBold;
      color: ${({ theme }) => theme.dialog.header.normal.TEXT_COLOR};
    }
`;

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.dialog.body.normal.BG_COLOR};
    .MuiDialogContent-root {
      padding: 0px 40px 20px;
    }
    > p {
      cursor: pointer;
      padding: 5px;
      border: 1px solid;
      width: 65px;
      text-align: center;
      border-radius: 5px;
      margin-left: 10px;
      margin-bottom: 20px;
    }
`;

const StyledIconButton = styled(IconButton)`
    position: absolute !important;
    right: 8px;
    top: 8px;
    color: ${({ theme }) => theme.dialog.body.normal.TEXT_COLOR} !important;
`;

const DialogTitle = styled(MuiDialogTitle)`
    color: ${({ theme }) => theme.card.secondary.normal.TEXT_COLOR};
`;

const StyledDialogContentActions = styled(MuiDialogActions)`
    &.MuiDialogActions-root {
      padding: 30px;
      display: flex;
      justify-content: center;
    }
`;

const Badge = styled.div`
    background-color: red;
    border-radius: 30px;
    height: 30px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    background: #FFF;
    animation: blinkingBackground 9s linear infinite; 

    > span {
      color: #FFF;
      font-weight: 700;
      font-size: 0.9rem;
    }

    @keyframes blinkingBackground{
      0%		{ background-color: ${({ theme }) => theme.app.brand.normal.BG_COLOR}; }
      25%		{ background-color: ${({ theme }) => theme.app.brand.normal.SECONDARY_BG_COLOR}; }
      50%		{ background-color: ${({ theme }) => theme.app.brand.normal.BG_COLOR}; }
      75%		{ background-color: ${({ theme }) => theme.app.brand.normal.SECONDARY_BG_COLOR}; }
      100%	{ background-color: ${({ theme }) => theme.app.brand.normal.BG_COLOR}; }
    }

`;

export interface DialogLevelProps {
    children: ReactNode;
    level: ReactNode;
    title: ReactNode;
    onClose?: () => void;
}

const DialogHeaders = (props: DialogLevelProps) => {
	const { children, title, level, onClose, ...other } = props;
	return (
		<StyledMuiDialogTitle disableTypography {...other}>
			<DialogTitle title={typeof level === 'string' ? level : undefined}>
				{children}
			</DialogTitle>
			{onClose ? (
				<StyledIconButton aria-label="close" onClick={onClose}>
					<CloseIcon />
				</StyledIconButton>
			) : null}
		</StyledMuiDialogTitle>
	);
};

export interface DialogActionProps {
  children: ReactNode;
}

const DialogActionButton = (props: DialogActionProps) => {
	const { children, ...other } = props;
	return (
		<StyledDialogContentActions {...other}>
			<Button shade='filled'>
				{ children }
			</Button>
		</StyledDialogContentActions>
	);
};

interface DialogContainerProps {
    level?: ReactNode;
    title?: ReactNode;
    submitText?: ReactNode;
    children: ReactNode;
    onClose?: () => void;
}

export const DialogContentContainer: FunctionComponent<DialogContainerProps> = ({ level, title, submitText, children, onClose, ...others }) => {
	return (
		<Container {...others}>
			<DialogHeaders onClose={onClose} level={level} title={title}>
				<Badge><span>{level}</span></Badge> {title}
			</DialogHeaders>
			<MuiDialogContent>{children}</MuiDialogContent>
			<DialogActionButton>{submitText}</DialogActionButton>
		</Container>
	);
};
