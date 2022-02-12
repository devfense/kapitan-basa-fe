import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../../../components/Button';
import ResultsDialog from '../../../dialogs/content/ResultsDialog';
import { TAnswers } from '../../../modules/game-levels/types';
import { useDialog } from '../../../providers/dialog';

interface Props {
	quizzes: Array<{id: number; question: string; choices: string[]}>;
	onSubmit?: (answers: TAnswers) => void;
}

const Container = styled.div`
	> form {
		min-height: 500px;
		max-height: 600px;
		overflow-y: auto;
		margin-bottom: 20px;
	}
	> button {
		display: block;
		margin: 0 auto;
	}
`;

const QuestionContainer = styled.div`
	display: flex;
	flex-direction: column;
	> p {
		font-weight: 600;
		font-size: 14px;
		height: 60px;
		margin-bottom: 20px;
	}
`;

const ChoicesContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const Choice = styled.div`
	width: 50%;
	margin-bottom: 27px;
	> label {
		margin-left: 5px;
	}
`;

const choiceLetter = ['a', 'b', 'c', 'd'];

const QuizForm: FunctionComponent<Props> = ({ quizzes, onSubmit }) => {

	const [openDialog, closeDialog] = useDialog();
	const {
		register,
		handleSubmit,
	} = useForm<TAnswers>();

	const handleDoneQuiz = (data: TAnswers) => {
		console.log(data);
		openDialog({
			children: <ResultsDialog closeDialog={closeDialog} score="0" message="You have failed the exam!" result={false}/>,
		});
	};

	return (
		<Container>
			<form onSubmit={handleSubmit(handleDoneQuiz)}>
				{quizzes.map((q, indx) => {
					return (
						<QuestionContainer key={indx}>
							<p>{`${indx + 1}. ${q.question}`}</p>
							<ChoicesContainer>
								{q.choices.map((choice, i) => {
									const letter = choiceLetter[i];
									return (
										<Choice key={i}>
											<input type="radio" {...register(`${q.id}.answerLetter`)} value={letter.toLocaleUpperCase()}/>
											<label className="label">{`${letter}. ${choice}`}</label>
										</Choice>
									);
								})}
							</ChoicesContainer>
						</QuestionContainer>
					);
				})}
				<Button type={'submit'}>Submit</Button>
			</form>
		</Container>
	);
};

export default QuizForm;
