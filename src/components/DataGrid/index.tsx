import React, { ReactNode } from 'react';
import { TableContainer as MuiTableContainer} from '@material-ui/core';
import { Table as MuiTable} from '@material-ui/core';
import { TableHead as MuiTableHead } from '@material-ui/core';
import { TableRow as MuiTableRow } from '@material-ui/core';
import { TableCell as MuiTableCell } from '@material-ui/core';
import { TableBody as MuiTableBody } from '@material-ui/core';
import styled from 'styled-components';

interface Props<T> {
    data?: T[];
    columns?: ReactNode[];
    header?: ReactNode;
    children?: ReactNode;
}

export const ContentTable = styled(MuiTableContainer)`
    border-collapse: collapse;
    margin: 0 0 20px;
    font-size: 0.9em;
    min-width: 100%;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    /* box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; */
`;

const MainTable = styled(MuiTable)`
    
`;

export const TableHeader = styled(MuiTableHead)`
    background-color: ${({ theme }) => theme.app.content.normal.BG_COLOR};
   
`;

export const TableRow = styled(MuiTableRow)`
    color: ${({ theme }) => theme.app.content.normal.SECONDARY_TEXT_COLOR};
    text-align: left;
    /* &:nth-of-type(even) {
        background-color: ${({ theme }) => theme.app.content.normal.BG_COLOR};
    }; */
    &:last-of-type {
        border-bottom: 2px solid ${({ theme }) => theme.app.content.normal.BG_COLOR};
    }
    border-bottom: 1px solid  ${({ theme }) => theme.app.content.normal.BG_COLOR};
`;

export const TableHead = styled(MuiTableCell)`
    padding: 12px 15px;
    &:nth-child(5) {
      text-align: center;
    }
    &:nth-child(6) {
      text-align: center;
    }
    &:nth-child(7) {
      text-align: center;
    }
    &:nth-child(8) {
      text-align: center;
    }
    &:last-child {
        text-align: center;
    }
`;

export const TableBody = styled(MuiTableBody)`
    font-weight: 400;
`;

export const TableData = styled(MuiTableCell)`
    color: ${({ theme }) => theme.app.content.normal.SECONDARY_TEXT_COLOR};
    padding: 0px 15px;
    font-size: 1em;
    &:nth-child(5) {
      text-align: center;
    }
    &:nth-child(6) {
        text-align: center;
    }
    &:nth-child(7) {
      text-align: center;
    }
    &:nth-child(8) {
      text-align: center;
    }
    &:last-child {
        text-align: center;
    }

`;

function Table<T> (props: Props<T>): JSX.Element {
	const { data, columns, header, children } = props;
	const displayKeys = data && data.length > 0 ? Object.keys(data[0]) as Array<keyof T> : [];
	console.log(header);
	return (
		<ContentTable>
			<MainTable>
				<TableHeader>
					<TableRow>
						{   columns !== undefined ? 
							columns.map((column, index) => {
								return(
									<TableHead key={index}>{ column }</TableHead>
								);
							}) : header
						}
					</TableRow>
				</TableHeader>
				<TableBody>
					{   data ?              
						data.map((item, index) => {
							return (
								<TableRow>
									{displayKeys.map((key, indx) => {
										return(
											<TableData key={`${index}${indx}`}>{ item[key] }</TableData>
										);
									})}
								</TableRow>
							);
						}) : children
					}
				</TableBody>
			</MainTable>
		</ContentTable>
	);
}
export default Table;

