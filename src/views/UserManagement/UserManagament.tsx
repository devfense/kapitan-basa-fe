import React from 'react'
import { Container } from '../../globalStyles'
import styled from 'styled-components'

const LabelContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
`

const PageLabel = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.app.content.normal.TEXT_COLOR};
`

const UserManagament = () => {
    return (
        <Container>
            <LabelContainer>
                <PageLabel>User Management</PageLabel>
            </LabelContainer>
        </Container>
    )
}

export default UserManagament;
