import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import AlertType from '../../assets/media/Alert/Alert';
import Button from '../../components/Button/index';
import { RootState } from '../../store';

interface ResultProps {
    onClose: () => void;
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

const ButtonClose = styled(Button)<{ btn?: string }>`
    &.MuiButton-root {
        border-radius: 25px;
        height: 52px;
        min-width: 150px;
        font-size: 1.1rem;
        background-color: ${({theme, btn}) => btn === 'PASSED' ? theme.button.filled.normal.BG_COLOR : theme.button.filled.error?.BG_COLOR};
        border-color: ${({theme, btn}) => btn === 'PASSED' ? theme.button.filled.normal.BG_COLOR : theme.button.filled.error?.BG_COLOR};
        &:hover {
            background-color: ${({theme, btn}) => btn === 'PASSED' ? theme.button.filled.normal.BG_COLOR : theme.button.filled.hover?.SECONDARY_BG_COLOR};
            border-color: ${({theme, btn}) => btn === 'PASSED' ? theme.button.filled.normal.BG_COLOR : theme.button.filled.hover?.SECONDARY_BG_COLOR};
        }
    }
`;

type Props = ResultProps & ReduxProps;

const ResultsDialog: FunctionComponent<Props> = (props: Props) => {

    const { onClose, quizResult } = props;

    return (
        <ResultContainer>
            <Score>Score: {quizResult.result?.levelScoreSummary}</Score>
            <BoxImage src={quizResult.result?.levelRemarks === 'PASSED' ? AlertType.Success : AlertType.Failed} />
            <Message>You have {quizResult.result?.levelRemarks} the exam.</Message>
            <ButtonClose btn={quizResult.result?.levelRemarks} onClick={onClose}>{quizResult.result?.levelRemarks === 'PASSED' ? 'Awesome' : 'Try Again'}</ButtonClose>
        </ResultContainer>
    );
};

const mapStateToProps = (state: RootState) => ({
	quizResult: state.gamelevel.quizResult,
});

const connector = connect(mapStateToProps, {});

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(ResultsDialog);
