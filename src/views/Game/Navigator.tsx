import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

interface Props {
    itemCount: number;
    limit: number;
    onChange: (page: number) => void;
}

const Container = styled.div`
    display: flex;
    align-items: center;
    > span {
        &.next, &.prev {
            display: flex;
            margin: 0 10px;
            cursor: pointer;
        }
    }
    > button.page {
        width: 30px;
        height: 30px;
        text-align: center;
        border: none;
        border-radius: 50%;
        font-size: 14px;
        margin-right: 10px;
        background-color: ${({theme}) => theme.navigator.page.normal.BG_COLOR};
        color: ${({theme}) => theme.navigator.page.normal.TEXT_COLOR};
        cursor: pointer;
        &:disabled {
            color: ${({theme}) => theme.navigator.page.disabled?.TEXT_COLOR};
            cursor: auto;
        }
    }
`;

const Navigator: FunctionComponent<Props> = ({
    itemCount,
    limit,
    onChange,
}) => {
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        setMaxPage(Number((itemCount / limit) + (itemCount % limit > 0 && itemCount / limit > 1 ? 1 : 0)));
    }, [limit, itemCount]);

    const onNavigate = (type: 'prev' | 'next') => () => {
        let thePage = page;
        if (type === 'next' && page < maxPage) thePage += 1;
        if (type === 'prev' && page > 1) thePage -= 1;
        setPage(thePage);
        onChange(thePage);
    };

    const onPageClick = (p: number) => () => {
        setPage(p);
        onChange(p);
    };

    return (
        <Container>
            <span className='prev' onClick={onNavigate('prev')}><ArrowBackIos /></span>
            <button className='page'>{page}</button>
            <button className='page' onClick={onPageClick(page+1)} disabled={page + 1 > maxPage}>{page + 1}</button>
            <button className='page' onClick={onPageClick(page+2)} disabled={page + 2 > maxPage}>{page + 2}</button>
            <button className='page' onClick={onPageClick(page+3)} disabled={page + 3 > maxPage}>{page + 3}</button>
            <button className='page' onClick={onPageClick(page+4)} disabled={page + 4 > maxPage}>{page + 4}</button>
            <span className='next' onClick={onNavigate('next')}><ArrowForwardIos /></span>
        </Container>
    );
};

export default Navigator;
