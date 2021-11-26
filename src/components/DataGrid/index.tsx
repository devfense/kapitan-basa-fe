import React from 'react'
import styled from 'styled-components'
import columns from '../../constants/UserItem/UserItem';
import { data } from '../../constants/UserItem/UserItem';
import Button from '../GridButton/button'
import Button2 from '../GridButton/button2'
import { FaEdit, FaTrash } from 'react-icons/fa';

const ContentTable = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 1480px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const TableHeader = styled.thead`
    background-color: ${({ theme }) => theme.app.content.normal.BG_COLOR};
   
`;

const TableRow = styled.tr`
    color: ${({ theme }) => theme.app.content.normal.SECONDARY_TEXT_COLOR};
    text-align: left;
    &:nth-of-type(even) {
        background-color: ${({ theme }) => theme.app.content.normal.BG_COLOR};
    };
    &:last-of-type {
        border-bottom: 2px solid ${({ theme }) => theme.app.content.normal.BG_COLOR};
    }
    border-bottom: 1px solid  ${({ theme }) => theme.app.content.normal.BG_COLOR};
`;

const TableHead = styled.th`
    padding: 12px 15px;
    &:nth-child(6) {
      text-align: center;
    }
    &:last-child {
        text-align: center;
    }
`;

const TableBody = styled.tbody`
    font-weight: 500;
`;

const TableData = styled.td`
    color: ${({ theme }) => theme.app.content.normal.SECONDARY_TEXT_COLOR};
    padding: 0px 15px;
    font-size: 1em;
    &:nth-child(6) {
        text-align: center;
    }
    &:last-child {
        text-align: center;
    }

`;

const ApprovalBTN = styled(Button)`
    font-size: 0.9em;
    
`;

const Buttontwo = styled(Button2)`

`;

const index = () => {
    return (
        <ContentTable>
            <TableHeader>
                <TableRow>
                    {
                        columns.map((column, index) => {
                            return(
                                <TableHead key={index}>{ column.header }</TableHead>
                            )
                        })
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    {
                        data.map((item, index) => {
                            return(
                                <TableData key={index}>{ item.dataItem }</TableData>
                            )
                        })
                    }
                    <TableData>
                        <ApprovalBTN variant='contained'>Accept</ApprovalBTN>
                    </TableData>
                    <TableData width="200px">
                        <Buttontwo types='edit' variant='contained'><FaEdit /></Buttontwo>
                        <Buttontwo types='delete' variant='contained'><FaTrash /></Buttontwo>
                    </TableData>
                </TableRow>
            </TableBody>
        </ContentTable>
    )
};
export default index
