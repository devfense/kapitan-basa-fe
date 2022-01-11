import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';

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

const quizzes = [
	{
		questionId: 'q1',
		question:
			'What is the moral lesson of the story neds nem,sdi, umoerie saesdne. Mata ne ototo desu yo animore san sonku kare wa joudan desu. Hajime ta ka ni yo amiyanai desuka?',
		choices: ['Blengblong', 'LeniLugaw', 'Packyut', 'IskongTrapo'],
	},
	{
		questionId: 'q2',
		question:
			'What is the moral lesson of the story neds nem,sdi, umoerie saesdne. Mata ne ototo desu yo animore san sonku kare wa joudan desu. Hajime ta ka ni yo amiyanai desuka?',
		choices: ['Blengblong', 'LeniLugaw', 'Packyut', 'IskongTrapo'],
	},
	{
		questionId: 'q3',
		question:
			'What is the moral lesson of the story neds nem,sdi, umoerie saesdne. Mata ne ototo desu yo animore san sonku kare wa joudan desu. Hajime ta ka ni yo amiyanai desuka?',
		choices: ['Blengblong', 'LeniLugaw', 'Packyut', 'IskongTrapo'],
	},
	{
		questionId: 'q4',
		question:
			'What is the moral lesson of the story neds nem,sdi, umoerie saesdne. Mata ne ototo desu yo animore san sonku kare wa joudan desu. Hajime ta ka ni yo amiyanai desuka?',
		choices: ['Blengblong', 'LeniLugaw', 'Packyut', 'IskongTrapo'],
	},
	{
		questionId: 'q5',
		question:
			'What is the moral lesson of the story neds nem,sdi, umoerie saesdne. Mata ne ototo desu yo animore san sonku kare wa joudan desu. Hajime ta ka ni yo amiyanai desuka?',
		choices: ['Blengblong', 'LeniLugaw', 'Packyut', 'IskongTrapo'],
	},
];

const choiceLetter = ['a', 'b', 'c', 'd'];

const QuizForm: FunctionComponent = () => {
	return (
		<Container>
			<form>
				{quizzes.map((q, indx) => {
					return (
						<QuestionContainer key={indx}>
							<p>{`${indx + 1}. ${q.question}`}</p>
							<ChoicesContainer>
								{q.choices.map((choice, i) => {
									const letter = choiceLetter[i];
									return (
										<Choice key={i}>
											<input type="radio" name={q.questionId} />
											<label className="label">{`${letter}. ${choice}`}</label>
										</Choice>
									);
								})}
							</ChoicesContainer>
						</QuestionContainer>
					);
				})}
			</form>
			<Button>Submit</Button>
		</Container>
	);
};

export default QuizForm;
