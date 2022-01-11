import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { DialogContainer } from '../../components/Dialog';

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

const InformationContainer = styled.div`
	background-color: #f2f7ff;
	height: 155px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
	display: flex;
	align-items: end;
	padding: 0px 30px;
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
	color: #7c8db5;
	font-size: 1rem;
	font-weight: 500;
	> label {
		margin-left: 8px;
		font-weight: 600;
		color: #6e81ae;
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

interface Props {
	title: string;
	fullname: string;
	studentID: string;
	grade: string;
	section: string;
}

const TabulationDialog: FunctionComponent<Props> = ({
	title,
	fullname,
	studentID,
	grade,
	section,
}) => {
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
		</StyledDialogContentContainer>
	);
};

export default TabulationDialog;
