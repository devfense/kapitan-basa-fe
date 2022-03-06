import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { useLocaleContext } from '../../providers/localization';
import SearchBar from '../../components/SearchBar';
import DataGrid from '../../components/DataGrid';
import { AllUser } from '../../modules/users/types';
import ActionButton from '../../components/ActionButtons';
import { useDialog } from '../../providers/dialog';
import TabulationDialog from '../../dialogs/content/TabulationDialog';
import * as userActions from '../../modules/users/actions';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import LoadingOverlay from '../../components/Progress/LoadingOverlay';

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

const TabulationAndResult: FunctionComponent<Props> = ({ userList, getUserList }) => {
	const strings = useLocaleContext();

	const [openDialog] = useDialog();

	useEffect(() => {
		getUserList();
	}, [])

	const users = userList.list.map((users) => {
		const handleView = () => {
			openDialog({
				children: (
					<TabulationDialog
						title="Tabulation/Result"
						fullname={`${users.firstName} ${users.middleName} ${users.lastName}`}
						studentID={`${users.studentID}`}
						grade={`${users.grade}`}
						section={`${users.section}`}
					/>
				),
			});
		};
		return {
			id: users.id,
			studentID: users.studentID,
			lastName: users.lastName,
			firstName: users.firstName,
			middleName: users.middleName,
			grade: users.grade,
			section: users.section,
			username: users.username,
			emailAddress: users.emailAddress,
			view: (
				<>
					<ActionButton onClick={handleView}>View</ActionButton>
				</>
			),
		};
	});

	const columns = [
		'#',
		'Student ID',
		'Last Name',
		'First Name',
		'MiddleName',
		'Grade',
		'Section',
		'Username',
		'Email Address',
		'Action',
	];
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
				{ userList.isLoading && <LoadingOverlay /> }
				<DataGrid<TableAllUserStudent> data={users} columns={columns} />
			</UserListContainer>
		</Container>
	);
};

const mapDispatchStateToProps = ((state: RootState) => ({
	userList: state.users.users,
}));

const mapDispatchToProps = {
	getUserList: userActions.getUserList,
};

const connector = connect(mapDispatchStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(TabulationAndResult);
