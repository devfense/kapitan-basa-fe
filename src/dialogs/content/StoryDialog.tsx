import React, { FunctionComponent, useEffect } from 'react';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../components/Button';
import { DialogContainer } from '../../components/Dialog';
import Story from '../../layouts/story/Story';
import { useDialog } from '../../providers/dialog';
import { RootState } from '../../store';
import * as gameLevelActions from '../../modules/game-levels/actions';
import QuizDialog from './QuizDialog';

interface StoryProps {
	storyId?: number;
	level: number;
	title: string;
	content?: string;
	onClose?: () => void;
}

const StyledDialogContentContainer = styled(DialogContainer)`
	width: 1093px;
	@media screen and (max-width: 1093px) {
		width: 100%;
	}
	overflow: hidden;
	.MuiDialogContent-root {
		overflow: hidden;
		> button {
			margin: 0 auto;
			margin-top: 28px;
			display: block;
		}
	}
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 0;
	> span {
		color: ${({ theme }) => theme.dialog.header.normal.SECONDARY_TEXT_COLOR};
		font-size: 14px;
		font-weight: 600;
	}
	> h2 {
		margin-top: 11px;
		margin-bottom: 0;
		font-size: 22px;
		font-weight: 700;
	}
`;

interface TitleProps {
	level?: number;
	title: string;
}

const TitleHeader: FunctionComponent<TitleProps> = ({ level, title }) => {
	return (
		<TitleContainer>
			<span>Level {level}</span>
			<h2>{title}</h2>
		</TitleContainer>
	);
};

type Props = StoryProps & ReduxProps;

const StoryDialog: FunctionComponent<Props> = ({ storyId, level, title, getStory, onClose }) => {
	const [openDialog, closeDialog] = useDialog();
	const { currentStory } = useSelector((state: RootState) => ({
		currentStory: state.gamelevel.currentStory
	}));
	
	useEffect(() => {
		if (storyId) getStory({ id: storyId });
	}, []);

	const handleDoneRead = () => {
		if (typeof onClose === 'function') onClose();
		setTimeout(() => 
			openDialog({
				children: <QuizDialog storyId={storyId} level={level} title={title} onClose={closeDialog}/>,
			}), 1000);
	};
	
	return (
		<StyledDialogContentContainer title={<TitleHeader level={level} title={title} />}>
			{ currentStory.item?.storyContent && <Story content={currentStory.item.storyContent} /> }
			<Button onClick={handleDoneRead}>Done Reading</Button>
		</StyledDialogContentContainer>
	);
};

const mapDispatchToProps = {
	getStory: gameLevelActions.getStory,
};

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(StoryDialog);