import React, { ReactNode } from 'react'
import { Container } from '../../globalStyles'
import styled from 'styled-components'
import { useLocaleContext } from '../../providers/localization';
import DataGrid from '../../components/DataGrid/index'
import { AccountStatus, AllUser } from '../../modules/users/types';
import ActionButton from '../../components/ActionButtons';
import { useDialog } from '../../providers/dialog';
import EditUser from '../../dialogs/users/EditUser';

const LabelContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
        margin-bottom: 15px;
    }
`;

const PageLabel = styled.span<{size?: 'subheader' | 'header'}>`
    font-size: ${({ size }) => size === 'subheader' ? '1.1rem' : '1.2rem'};
    font-weight: 600;
    color: ${({ theme }) => theme.app.content.normal.TEXT_COLOR};

    @media screen and (max-width: 1024px) {
       font-size: ${({ size }) => size === 'subheader' ? '0.9rem' : '1rem'};
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

    @media screen and (max-width: 1024px) {
        padding: 15px 15px;
    }
`;

const mockUsers: AllUser[] = [
    { 
        studentID: '010101',
        lastName: 'Dela Cruz',
        firstName: 'Juan', 
        middleName: 'A.', 
        section: 'Kamagong', 
        grade: 10,
        emailAddress: 'jdc@jdc.com', 
        accountStatus: AccountStatus.ACTIVE
    },
    { 
        studentID: '020202',
        lastName: 'Cabusao', 
        firstName: 'Mark', 
        middleName: 'A.', 
        section: 'Ipil-Ipil', 
        grade: 10, 
        emailAddress: 'cm@cmd.com', 
        accountStatus: AccountStatus.ACTIVE
    },
    { 
        lastName: 'Viernes', 
        firstName: 'Jephunneh', 
        middleName: 'B.', 
        section: 'Narra', 
        grade: 10, 
        emailAddress: 'jephv4@cmd.com', 
        accountStatus: AccountStatus.ACTIVE
    },
];
/*TODO: Integrate Userlist API */

type TableAllUsers = AllUser & { approve: ReactNode, actions: ReactNode };

const UserManagament = () => {
    const strings = useLocaleContext();
    const [openDialog] = useDialog();
    const users = mockUsers.map((users) => {
        const handleEdit = () => {
            openDialog({
                children: <EditUser />,
            })
        }

        return {
            ...users,
            approve: <><ActionButton types={'approve'}>Approve</ActionButton> <ActionButton types={'reject'}>Reject</ActionButton></>,
            actions: <><ActionButton types={'edit'} onClick={handleEdit}>{strings.edit}</ActionButton> <ActionButton types={'delete'}>{strings.delete}</ActionButton></>
        }
    }).map((u) => {
        delete u.studentID;
        return {
            ...u
        }
    });
    
    const columns = ['Last Name', 'First Name', 'MiddleName', 'Section', 'Grade', 'Email Address', 'Account Status', 'Approve/Reject', 'Actions'];
    return (
        <Container>
            <LabelContainer>
                <PageLabel>{ strings.userMgmt }</PageLabel>
            </LabelContainer>
            <UserListContainer>
                <LabelContainer>
                    <PageLabel size='subheader'>{ strings.accUser }</PageLabel>
                </LabelContainer>
                <DataGrid<TableAllUsers> data={users} columns={columns}/>
            </UserListContainer>
        </Container>
    )
}

export default UserManagament;