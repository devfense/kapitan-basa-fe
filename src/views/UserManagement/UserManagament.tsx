import React from 'react';
import { Container } from '../../globalStyles';
import styled from 'styled-components';
import { useLocaleContext } from '../../providers/localization';
import ModalCard from '../../components/Modal/index';
import TextField from '../../components/TextField/modalTextField'

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

    @media screen and (max-width: 1024px) {
        padding: 15px 15px;
    }
`;

const TextFieldContainer = styled.div`
    display: flex;
`;

const GradeTextfieldBox = styled.div`
    width: 30%;
    margin-right: 3%;
`;

const SectionTextfieldBox = styled.div`
    width: 40%;
    margin-right: 3%;
`;

const StudentIDTextfieldBox = styled.div`
    width: 40%;
`;

const ModalTextField = styled(TextField) `
    &.MuiTextField-root > div {
        width: auto;
    }
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
            </UserListContainer>
            <ModalCard modalTitle="Edit User">
                <ModalTextField label="First Name"/>
                <ModalTextField label="Middle Name"/>
                <ModalTextField label="Last Name"/>
                <ModalTextField label="Email Address"/>
                <TextFieldContainer>
                    <GradeTextfieldBox>
                        <ModalTextField label="Grade"/>
                    </GradeTextfieldBox>
                    <SectionTextfieldBox>
                        <ModalTextField label="Section"/>
                    </SectionTextfieldBox>
                    <StudentIDTextfieldBox>
                        <ModalTextField label="Student ID"/>
                    </StudentIDTextfieldBox>
                </TextFieldContainer>
            </ModalCard>
        </Container>
    )
}

export default UserManagament;