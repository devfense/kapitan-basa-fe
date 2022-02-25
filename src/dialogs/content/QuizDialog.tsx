import React, { FunctionComponent, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { DialogContainer } from '../../components/Dialog';
import * as gameLevelActions from '../../modules/game-levels/actions';
import QuizForm from '../../layouts/forms/story/QuizForm';
import { RootState } from '../../store';
import LoadingOverlay from '../../components/Progress/LoadingOverlay';
import { TAnswers } from '../../modules/game-levels/types';

interface QuizProps {
	gameLevelId: number;
	studentID?: string;
	level: number;
	title: string;
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
		min-height: 500px;
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
	level: number;
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

type Props = ReduxProps & QuizProps;

const QuizDialog: FunctionComponent<Props> = ({ gameLevelId, level, title, getQuiz, submitQuiz, onClose, studentID, currentQuiz }) => {

	useEffect(() => {
			if (gameLevelId) getQuiz({ id: gameLevelId });
	}, []);

	const handleSubmit = (answer: TAnswers) => {
		if (typeof onClose === 'function') onClose();
		console.log({ studentID: studentID ?? '', gamelevelId: gameLevelId, answers: answer });
		submitQuiz({ studentID: studentID ?? '', gameLevelID: gameLevelId, answers: answer });
	}

	const quizzes = currentQuiz.list.map((q) => ({
		id: q.id,
		question: q.questionContent,
		choices: q.choices.sort((a, b) => a.choiceLetter < b.choiceLetter ? -1 : a.choiceLetter > b.choiceLetter ? 1 : 0 ).map((c) => (c.choiceDescription)),
	}));

	return (
		<StyledDialogContentContainer title={<TitleHeader level={level} title={title} />}>
			{currentQuiz.isLoading && <LoadingOverlay />}
			{!currentQuiz.isLoading && <QuizForm quizzes={quizzes} handleQuizSubmit={handleSubmit} gameLevelId={gameLevelId} />}
		</StyledDialogContentContainer>
	);
};

const mapStateToProps = (state: RootState) => ({
	currentQuiz: state.gamelevel.currentQuiz,
	studentID: state.users.userInfo.studentID,
	quizResult: state.gamelevel.quizResult
});

const mapDispatchToProps = {
	getQuiz: gameLevelActions.getQuiz,
	submitQuiz: gameLevelActions.submitQuiz
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(QuizDialog);
