import React from 'react'
import { Container } from '../../globalStyles'
import styled from 'styled-components'
import { useLocaleContext } from '../../providers/localization';
import DataGrid from '../../components/DataGrid/index'

const LabelContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
`;

const PageLabel = styled.span<{size?: 'subheader' | 'header'}>`
    font-size: ${({ size }) => size === 'subheader' ? '1.1rem' : '1.2rem'};
    font-weight: 600;
    color: ${({ theme }) => theme.app.content.normal.TEXT_COLOR};
`;

const UserListContainer = styled.div`
    height: 85%;
    background-color: ${({ theme }) => theme.app.content.normal.SECONDARY_BG_COLOR};
    border-radius: 13px;
    padding: 25px 30px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

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
                <DataGrid />
            </UserListContainer>
        </Container>
    )
}

export default UserManagament;