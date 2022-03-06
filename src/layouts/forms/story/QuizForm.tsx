import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { TAnswers } from '../../../modules/game-levels/types';

interface QuizProps {
	quizzes: Array<{id: number; question: string; choices: string[]}>;
	handleQuizSubmit?: (answers: TAnswers) => void;
	gameLevelId: number;
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

type Props = QuizProps;

const QuizForm: FunctionComponent<Props> = (props: Props) => {
	const { quizzes, handleQuizSubmit, gameLevelId } = props;
	const {
		register,
		handleSubmit,
	} = useForm<{
		answers: TAnswers
	}>();

	const handleDoneQuiz = (data: { answers: TAnswers }) => {
		if (handleQuizSubmit) {
			handleQuizSubmit(data.answers.map(x => {
				return {
					questionID:Number(x.questionID),
					storyID:Number(x.storyID),
					answerLetter: x.answerLetter
				};
			}));
		}
	};

	return (
		<Container>
			<form onSubmit={handleSubmit(handleDoneQuiz)}>
				{quizzes.map((q, indx) => {
					return (
						<QuestionContainer key={indx}>
							<p>{`${indx + 1}. ${q.question}`}</p>
							<input type="hidden" {...register(`answers.${indx}.questionID`)} value={q.id}></input>
							<input type="hidden" {...register(`answers.${indx}.storyID`)} value={gameLevelId}></input>
							<ChoicesContainer>
								{q.choices.map((choice, i) => {
									const letter = choiceLetter[i];
									return (
										<Choice key={i}>
											<input type="radio" {...register(`answers.${indx}.answerLetter`)} value={letter.toLocaleUpperCase()}/>
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
