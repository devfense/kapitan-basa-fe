import React from 'react';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { useLocaleContext } from '../../providers/localization';
import SearchBar from '../../components/SearchBar/index';
import DataGrid from '../../components/DataGrid/index';
import { AllUser } from '../../modules/users/types';
import ActionButton from '../../components/ActionButtons';
import { useDialog } from '../../providers/dialog';
import TabulationDialog from '../../dialogs/content/TabulationDialog';

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
    margin-top: 30px;

    @media screen and (max-width: 1024px) {
        padding: 15px 15px;
    }
`;

const mockUsers: AllUser[] = [
    { 
        username: 'Juan', 
        studentID: '010101',
        lastName: 'Dela Cruz',
        firstName: 'Juan', 
        middleName: 'A.', 
        section: 'Kamagong', 
        grade: '10',
        emailAddress: 'jdc@jdc.com', 
    },
    { 
        username: 'Juan', 
        studentID: '020202',
        lastName: 'Cabusao', 
        firstName: 'Mark', 
        middleName: 'A.', 
        section: 'Ipil-Ipil', 
        grade: '10', 
        emailAddress: 'cm@cmd.com', 
    },
    { 
        username: 'Juan', 
        studentID: '030303',
        lastName: 'Viernes', 
        firstName: 'Jephunneh', 
        middleName: 'B.', 
        section: 'Narra', 
        grade: '10', 
        emailAddress: 'jephv4@cmd.com', 
    },
];

type TableAllUserStudent = AllUser

const TabulationAndResult = () => {

    const strings = useLocaleContext();

    const [openDialog] = useDialog();

    const users = mockUsers.map((users) => {
        const handleView = () => {
            openDialog({
                children: <TabulationDialog 
                            title="Tabulation/Result" 
                            fullname={`${users.firstName} ${users.middleName} ${users.lastName}`} 
                            studentID={`${users.studentID}`} 
                            grade={`${users.grade}`} 
                            section={`${users.section}`}
                          /> 
            })
        }
        return {
            ...users,
            view: <><ActionButton onClick={handleView}>View</ActionButton></>
        }
    })

    const columns = ['Student ID', 'Last Name', 'First Name', 'MiddleName', 'Section', 'Grade', 'Email Address', 'Action'];
    return (
        <Container>
            <LabelContainer>
                <PageLabel>{ strings.tabResults }</PageLabel>
            </LabelContainer>
            <SearchBar />
            <UserListContainer>
                <LabelContainer>
                    <PageLabel size='subheader'>{ strings.listStud }</PageLabel>
                </LabelContainer>
                <DataGrid<TableAllUserStudent>  data={users} columns={columns} />
            </UserListContainer>
        </Container>
    )
}

export default TabulationAndResult
