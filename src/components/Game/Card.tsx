import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import Button from '../Button';

interface Props {
    gameId?: string;
    level: number;
    title: string;
    description: string;
    thumbnail?: string;
    isCleared?: boolean;
    onStart?: () => void;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 22%;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: ${({theme}) => theme.card.primary.normal.BG_COLOR};
    padding: 15px;
    border-radius: 10px;
    > p {
        margin: 0;
        margin-bottom: 10px;
        font-size: 12px;
    }
    > .level {
        color: #7C8DB5;
        text-align: right;
        font-weight: 700;
    }
    > .title {
        color: #25396F;
    }
    > .desc {
        color: #7C8DB5;
        height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
`;

const ThumbnailPlaceholder = styled.div`
    width: 100%;
    height: 104px;
    background: ${({theme}) => theme.card.secondary.normal.BG_COLOR};
    margin-bottom: 20px;
    border-radius: 10px;
`;

const GameLevelButton = styled(Button)<{ isCleared?: boolean}>`
    &.MuiButton-root {
        margin-top: 10px;
        border-radius: 24px;
        ${({isCleared, theme}) => isCleared && `
            background-color: ${theme.actionButton.cleared.normal.BG_COLOR};
            border-color: ${theme.actionButton.cleared.normal.BORDER_COLOR};
        `}
        color: #FFFFFF !important;
    }
`;

const Card: FunctionComponent<Props> = (props: Props) => {
    const { level, title, description, thumbnail, isCleared, onStart } = props;

    const handleStart = () => {
        if(typeof onStart === 'function') onStart();
    }

    return (
        <Container>
            {thumbnail ? thumbnail : <ThumbnailPlaceholder />}
            <p className={'level'}>Level <span>{level}</span></p>
            <p className={'title'}>{title}</p>
            <p className={'desc'}>{description}</p>
            <GameLevelButton isCleared={isCleared} disabled={isCleared} onClick={handleStart}>{isCleared ? 'Cleared' : 'Start'}</GameLevelButton>
        </Container>
    )
}

export default Card;