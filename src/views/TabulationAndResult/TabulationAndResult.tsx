import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { useLocaleContext } from '../../providers/localization';
import SearchBar from '../../components/SearchBar/index';
import DataGrid, { TableRow, TableData } from '../../components/DataGrid/index';
import { AllUser } from '../../modules/users/types';
import ActionButton from '../../components/ActionButtons';
import { useDialog } from '../../providers/dialog';
import TabulationDialog from '../../dialogs/content/TabulationDialog';
import { RootState } from '../../store';
import { connect, ConnectedProps } from 'react-redux';
import * as userActions from '../../modules/users/actions';

const LabelContainer = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	@media screen and (max-width: 1024px) {
		margin-bottom: 15px;
	}
`;

const PageLabel = styled.span<{ size?: 'subheader' | 'header' }>`
	font-size: ${({ size }) => (size === 'subheader' ? '1.1rem' : '1.2rem')};
	font-weight: 600;
	color: ${({ theme }) => theme.app.content.normal.TEXT_COLOR};

	@media screen and (max-width: 1024px) {
		font-size: ${({ size }) => (size === 'subheader' ? '0.9rem' : '1rem')};
	}
`;

const UserListContainer = styled.div`
	height: auto;
	max-height: 85%;
	background-color: ${({ theme }) => theme.app.content.normal.SECONDARY_BG_COLOR};
	border-radius: 13px;
	padding: 10px 25px;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
	overflow-y: auto;
	margin-top: 30px;

	@media screen and (max-width: 1024px) {
		padding: 15px 15px;
	}
`;

type TableAllUserStudent = AllUser;

type Props = ReduxProps;

const TabulationAndResult: FunctionComponent<Props> = ({ users, getUserList }) => {
	const strings = useLocaleContext();

	const [openDialog] = useDialog();

	useEffect(() => {
		getUserList();
	}, [])

	const userStudent = users.list.map((user) => {

		const handleView = () => {
			openDialog({
				children: (
					<TabulationDialog
						title="Tabulation/Result"
						fullname={user.middleName === null ? `${user.firstName} ${user.lastName}` : `${user.firstName} ${user.middleName} ${user.lastName}`}
						studentID={`${user.studentID}`}
						grade={`${user.grade}`}
						section={`${user.section}`}
					/>
				),
			});
		};

		return {
			...user,
			actions: (
				<>
					<ActionButton onClick={handleView}>View</ActionButton>
				</>
			),
		};
	});

	const columns = {
		studentID: 'Student ID',
		lastName: 'Last Name',
		firstName: 'First Name',
		middleName: 'MiddleName',
		section: 'Section',
		grade: 'Grade',
		emailAddress: 'Email Address',
		actions: 'Action',
	};
	return (
		<Container>
			<LabelContainer>
				<PageLabel>{strings.tabResults}</PageLabel>
			</LabelContainer>
			<SearchBar />
			<UserListContainer>
				<LabelContainer>
					<PageLabel size="subheader">{strings.listStud}</PageLabel>
				</LabelContainer>
				<DataGrid<TableAllUserStudent> columns={Object.keys(columns).map((c) => columns[c as keyof typeof columns])}>
					{userStudent.map((user, index) => {
						return (
							<TableRow key={index}>
								<TableData>{user.studentID}</TableData>
								<TableData>{user.lastName}</TableData>
								<TableData>{user.firstName}</TableData>
								<TableData>{user.middleName}</TableData>
								<TableData>{user.section}</TableData>
								<TableData>{user.grade}</TableData>
								<TableData>{user.emailAddress}</TableData>
								<TableData>{user.actions}</TableData>
							</TableRow>
						)
					})}
				</DataGrid>
			</UserListContainer>
		</Container>
	);
};

const mapStateToProps = (state: RootState) => ({
	users: state.users.users,
});

const mapDispatchToProps = {
	getUserList: userActions.getUserList,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(TabulationAndResult);

	
