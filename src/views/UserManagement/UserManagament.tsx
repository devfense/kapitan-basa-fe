import React from 'react'
import { Container } from '../../globalStyles'
import styled from 'styled-components'
import { useLocaleContext } from '../../providers/localization';
import DataGrid from '../../components/DataGrid/index'
import { AccountStatus, AllUser } from '../../modules/users/types';

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

const mockUser: AllUser = { lastName: 'Dela Cruz', firstName: 'Juan', middleName: 'A', section: 'Kamagong', grade: 10, emailAdd: 'jdc@jdc.com', accountStatus: AccountStatus.ACTIVE};
/*TODO: Integrate Userlist API */

const UserManagament = () => {
    const strings = useLocaleContext();
    return (
        <Container>
            <LabelContainer>
                <PageLabel>{ strings.userMgmt }</PageLabel>
            </LabelContainer>
            <UserListContainer>
                <LabelContainer>
                    <PageLabel size='subheader'>{ strings.accUser }</PageLabel>
                </LabelContainer>
                <DataGrid<AllUser> data={[mockUser]} columns={['Last Name', 'First Name', 'MiddleName', 'Section', 'Grade', 'Email Address', 'Account Status']}/>
            </UserListContainer>
        </Container>
    )
}

export default UserManagament;