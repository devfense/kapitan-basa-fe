import {
	DialogContent as MuiDialogContent,
	DialogTitle as MuiDialogTitle,
	IconButton,
	Typography,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const StyledMuiDialogTitle = styled(MuiDialogTitle)`
	margin: 0;
	max-height: 117px;
	overflow-y: hidden;
	&:hover {
		overflow-y: auto;
	}
	margin: 0;
	margin-bottom: 15px;
	white-space: pre-wrap;
	white-space: -moz-pre-wrap;
	white-space: -pre-wrap;
	white-space: -o-pre-wrap;
	word-wrap: break-word;
	> h6 {
		font-size: 24px;
		font-family: OpenSans-SemiBold;
		color: ${({ theme }) => theme.dialog.header.normal.TEXT_COLOR};
	}
`;

const Container = styled.div`
	width: 100%;
	overflow: auto;
	background-color: ${({ theme }) => theme.dialog.body.normal.BG_COLOR};
	.MuiDialogContent-root {
		padding: 0px 20px 20px;
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

export interface DialogTitleProps {
	children: ReactNode;
	title: ReactNode;
	onClose?: () => void;
}

const DialogTitle = (props: DialogTitleProps) => {
	const { children, title, onClose, ...other } = props;
	return (
		<StyledMuiDialogTitle disableTypography {...other}>
			<Typography variant="h6" style={{ fontSize: '1.2rem' }} title={typeof title === 'string' ? title : undefined}>
				{children}
			</Typography>
			{onClose ? (
				<StyledIconButton aria-label="close" onClick={onClose}>
					<CloseIcon />
				</StyledIconButton>
			) : null}
		</StyledMuiDialogTitle>
	);
};

interface DialogContainerProps {
	title: ReactNode;
	children: ReactNode;
	onClose?: () => void;
}

export const DialogContainer: FunctionComponent<DialogContainerProps> = ({
	title,
	children,
	onClose,
	...others
}) => {
	return (
		<Container {...others}>
			<DialogTitle onClose={onClose} title={title}>
				{title}
			</DialogTitle>
			<MuiDialogContent>{children}</MuiDialogContent>
		</Container>
	);
};
