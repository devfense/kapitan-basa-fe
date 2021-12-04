import React, { ReactNode } from 'react'
import { Container } from '../../globalStyles'
import styled from 'styled-components'
import { useLocaleContext } from '../../providers/localization';
import DataGrid from '../../components/DataGrid/index'
import { AccountStatus, AllUser } from '../../modules/users/types';
import ActionButton from '../../components/ActionButtons';

const LabelContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
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
    padding: 25px 30px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

    @media screen and (max-width: 1024px) {
        padding: 15px 15px;
    }
`;

const mockUsers: AllUser[] = [
    { 
        lastName: 'Dela Cruz', 
        firstName: 'Juan', 
        middleName: 'A', 
        section: 'Kamagong', 
        grade: 10, 
        emailAdd: 'jdc@jdc.com', 
        accountStatus: AccountStatus.ACTIVE
    },
    { 
        lastName: 'Cabusao', 
        firstName: 'Mark', 
        middleName: 'A', 
        section: 'Ipil-Ipil', 
        grade: 10, 
        emailAdd: 'cm@cmd.com', 
        accountStatus: AccountStatus.ACTIVE
    },
];
/*TODO: Integrate Userlist API */

type TableAllUsers = AllUser & { approve: ReactNode, actions: ReactNode };

const UserManagament = () => {
    const strings = useLocaleContext();
    const users = mockUsers.map((users) => {
        return {
            ...users,
            approve: <><ActionButton types={'approve'}>Approve</ActionButton> <ActionButton types={'reject'}>Reject</ActionButton></>,
            actions: <><ActionButton types={'edit'}>{strings.edit}</ActionButton> <ActionButton types={'delete'}>{strings.delete}</ActionButton></>
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