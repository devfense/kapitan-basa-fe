import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import AlertType from '../../assets/media/Alert/Alert';
import Button from '../../components/Button/index';
interface ResultProps {
    closeDialog: () => void;
    score: string;
    message: string;
    result?: string;
}

const ResultContainer = styled.div`
	width: 1053px;
    padding: 73px 20px;
    background-color: #FFF;
	overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: 1093px) {
		width: 100%;
	}
`;

const Score = styled.span`
    color: #25396F;
    font-size: 3rem;
    font-weight: 900;
    margin: 35px 0px;
`;

const BoxImage = styled.img`
	width: 15%;
	height: 15%;
	object-fit: cover;
	padding: 35px 0px 35px;
    margin: 30px 0px;

	@media screen and (max-width: 375px) {
		margin-right: 15px;
		margin-left: 12px;
	}
	@media screen and (max-width: 360px) {
		margin-right: 25px;
		margin-left: 12px;
	}
`;

const Message = styled.span`
    color: #25396F;
    font-size: 2.5rem;
    font-weight: 900;
    margin: 35px 0px 70px;
`;

const ButtonClose = styled(Button)<{ BTN?: string }>`
    &.MuiButton-root {
        border-radius: 25px;
        height: 52px;
        min-width: 150px;
        font-size: 1.1rem;
        background-color: ${({theme, BTN}) => BTN === 'PASSED' ? theme.button.filled.normal.BG_COLOR : theme.button.filled.error?.BG_COLOR};
        border-color: ${({theme, BTN}) => BTN === 'PASSED' ? theme.button.filled.normal.BG_COLOR : theme.button.filled.error?.BG_COLOR};
        &:hover {
            background-color: ${({theme, BTN}) => BTN === 'PASSED' ? theme.button.filled.normal.BG_COLOR : theme.button.filled.hover?.SECONDARY_BG_COLOR};
            border-color: ${({theme, BTN}) => BTN === 'PASSED' ? theme.button.filled.normal.BG_COLOR : theme.button.filled.hover?.SECONDARY_BG_COLOR};
        }
    }
`;

type Props = ResultProps;

const ResultsDialog: FunctionComponent<Props> = (props: Props) => {

    const { closeDialog, score, message, result } = props;

    return (
        <ResultContainer>
            <Score>{score}</Score>
            <BoxImage src={result === 'PASSED' ? AlertType.Success : AlertType.Failed} />
            <Message>{message}</Message>
            <ButtonClose BTN={result} onClick={closeDialog}>{result === 'PASSED' ? 'Awesome' : 'Try Again'}</ButtonClose>
        </ResultContainer>
    );
};

export default ResultsDialog;
