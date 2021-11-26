import { DataHeader, DataItem } from "../types";

const columns: DataHeader[] = [
    {
        header: 'Username',
    },
    {
        header: 'Fullname',
    },
    {
        header: 'Grade',
    },
    {
        header: 'Section',
    },
    {
        header: 'Date Created',
    },
    {
        header: 'Status',
    },
    {
        header: 'Action',
    }
];

export default columns;

export const data: DataItem[] = [
    {
        dataItem: 'decavez1777'
    },
    {
        dataItem: 'Juan Dela Cruz'
    },
    {
        dataItem: '10'
    },
    {
        dataItem: 'Our Lady of Peace'
    },
    {
        dataItem: '09/25/2021'
    },
]