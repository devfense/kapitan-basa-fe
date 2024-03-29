import React, { FunctionComponent, ReactNode, useEffect } from 'react';
import { Container } from '../../globalStyles';
import styled from 'styled-components';
import { useLocaleContext } from '../../providers/localization';
import DataGrid, { TableData, TableRow } from '../../components/DataGrid/index';
import { AllUser } from '../../modules/users/types';
import ActionButton from '../../components/ActionButtons';
import { useDialog } from '../../providers/dialog';
import EditUser from '../../dialogs/users/EditUser';
import { RootState } from '../../store';
import * as userActions from '../../modules/users/actions';
import { connect, ConnectedProps } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

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
	max-height: 80vh;
	background-color: ${({ theme }) => theme.app.content.normal.SECONDARY_BG_COLOR};
	border-radius: 13px;
	padding: 10px 25px;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
	overflow-y: auto;

	@media screen and (max-width: 1024px) {
		padding: 15px 15px;
	}
`;

type TableAllUsers = AllUser & { approve: ReactNode; actions: ReactNode };

type Props = ReduxProps;

const UserManagament: FunctionComponent<Props> = ({
	userList,
	getUserList,
	approveUser,
	rejectUser,
	deleteStudentUser,
}) => {
	const strings = useLocaleContext();
	const [openDialog] = useDialog();
	const [selectedUsername, setSelectedUsername] = React.useState('');

	useEffect(() => {
		getUserList();
	}, []);

	const users = userList.list
		.map((user) => {
			const handleEdit = () => {
				openDialog({
					children: <EditUser />,
				});
			};

			const handleApprove = (id: string) => () => {
				approveUser(id);
				setSelectedUsername(id);
			};

			const handleReject = (id: string) => () => {
				rejectUser(id);
				setSelectedUsername(id);
			};

			const handleDelete = (id: number) => () => {
				deleteStudentUser(id);
			};

			return {
				...user,
				approve: (
					<>
						<ActionButton types={'approve'} disabled={userList.isLoadingApprove && selectedUsername === user.username} onClick={handleApprove(user.username)}>
							{ userList.isLoadingApprove && selectedUsername === user.username ? <CircularProgress size={20} style={{ color: '#FFF' }} /> : 'Approve' }
						</ActionButton>
						<ActionButton types={'reject'} disabled={userList.isLoadingReject && selectedUsername === user.username} onClick={handleReject(user.username)}>
							{ userList.isLoadingReject && selectedUsername === user.username ? <CircularProgress size={20} style={{ color: '#FFF' }} /> : 'Rejected' }
						</ActionButton>
					</>
				),
				actions: (
					<>
						<ActionButton types={'edit'} onClick={handleEdit}>
							{strings.edit}
						</ActionButton>{' '}
						<ActionButton types={'delete'} onClick={handleDelete(user.id)}>
							{strings.delete}
						</ActionButton>
					</>
				),
			};
		})
		.map((u) => {
			delete u.studentID;
			return {
				...u,
			};
		});

	const columns = {
		lastName: 'Last Name',
		firstName: 'First Name',
		middleName: 'MiddleName',
		section: 'Section',
		grade: 'Grade',
		emailAddress: 'Email Address',
		status: 'Account Status',
		approve: 'Approve/Reject',
		actions: 'Actions',
	};

	return (
		<Container>
			<LabelContainer>
				<PageLabel>{strings.userMgmt}</PageLabel>
			</LabelContainer>
			<UserListContainer>
				<LabelContainer>
					<PageLabel size="subheader">{strings.accUser}</PageLabel>
				</LabelContainer>
				<DataGrid<TableAllUsers>
					columns={Object.keys(columns).map((c) => columns[c as keyof typeof columns])}>
					{users.map((user, index) => {
						return (
							<TableRow key={index}>
								{Object.keys(columns).map((col, i) => {
									return (
										<TableData key={i}>{user[col as keyof AllUser]}</TableData>
									);
								})}
							</TableRow>
						);
					})}
				</DataGrid>
			</UserListContainer>
		</Container>
	);
};

const mapStateToProps = (state: RootState) => ({
	userList: state.users.users,
});

const mapDispatchToProps = {
	getUserList: userActions.getUserList,
	approveUser: userActions.approveUser,
	rejectUser: userActions.rejectUser,
	deleteStudentUser: userActions.deleteStudentUser
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(UserManagament);
