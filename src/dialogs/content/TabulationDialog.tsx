import React, { FunctionComponent, ReactNode, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import DataGrid from '../../components/DataGrid';
import { DialogContainer } from '../../components/Dialog';
import * as gameLevelActions from '../../modules/game-levels/actions';
import { GameLevel } from '../../modules/game-levels/types';
import { RootState } from '../../store';

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
		color: #25396F;
	}
`;

const InformationContainer = styled.div`
	background-color: #f2f7ff;
	height: 155px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
	display: flex;
	align-items: end;
	padding: 0px 30px;
	margin-bottom: 30px;
`;

const StudentInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`;

const Information = styled.div`
	width: 50%;
	margin-bottom: 36px;
	display: flex;
`;

const InfoBox = styled.div`
	width: 70%;
	color: #25396F;
	font-size: 1rem;
	font-weight: 500;
	> label {
		margin-left: 8px;
		font-weight: 600;
		color: #25396F;
	}
`;

interface TitleProps {
	title: string;
}

const TitleHeader: FunctionComponent<TitleProps> = ({ title }) => {
	return (
		<TitleContainer>
			<h2>{title}</h2>
		</TitleContainer>
	);
};

interface StudentInfoProps {
	children: ReactNode;
}

const StudentInformation: FunctionComponent<StudentInfoProps> = ({ children }) => {
	return <InformationContainer>{children}</InformationContainer>;
};

interface InfoProps {
	title: string;
	fullname: string;
	studentID: string;
	grade: string;
	section: string;
}

type Props = InfoProps & ReduxProps;

const TabulationDialog: FunctionComponent<Props> = ({
	title,
	fullname,
	studentID,
	grade,
	section,
	levels,
	getGameLevels,
}) => {

	useEffect(() => {
		getGameLevels({ studentID });
	}, [])

	const columns = [
		'Level',
		'Title',
		'Score',
		'Summary',
		'Remarks',
	];

	const summaryResults = levels.list.map((res) => {
		return {
			gameLevelId: res.gameLevelId,
			title: res.gameLevelData.levelTitle,
			levelScore: res.levelScore,
			levelScoreSummary: res.levelScoreSummary,
			levelRemarks: res.levelRemarks,
		}	
	})

	return (
		<StyledDialogContentContainer title={<TitleHeader title={title} />}>
			<StudentInformation>
				<StudentInfoContainer>
					<Information>
						<InfoBox>
							Fullname: <label>{fullname}</label>
						</InfoBox>
					</Information>
					<Information>
						<InfoBox>
							Student ID: <label>{studentID}</label>
						</InfoBox>
					</Information>
					<Information>
						<InfoBox>
							Grade: <label>{grade}</label>
						</InfoBox>
					</Information>
					<Information>
						<InfoBox>
							Section: <label>{section}</label>
						</InfoBox>
					</Information>
				</StudentInfoContainer>
			</StudentInformation>

			<DataGrid<Omit<GameLevel, 'gameLevelData' | 'locked' | 'levelCleared'> & { title: string }> data={summaryResults} columns={columns} />
		</StyledDialogContentContainer>
	);
};


const mapStateToProps = (state: RootState) => ({
	levels: state.gamelevel.levels,
});

const mapDispatchToProps = {
	getGameLevels: gameLevelActions.getGameLevels,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(TabulationDialog);
