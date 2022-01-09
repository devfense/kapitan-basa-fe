import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { useDialog } from '../../providers/dialog';
import StoryDialog from '../../dialogs/content/StoryDialog';

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
    width: 21.7%;
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: ${({theme}) => theme.card.primary.normal.BG_COLOR};
    padding: 15px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

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
        font-weight: 700;
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
    @media screen and (min-width: 2000px) {
        max-width: 372px;
    }
    @media screen and (min-width: 1444px) and (max-width: 1700px) {
        width: 21%;
        margin-right: 1%;
    }
    @media screen and (min-width: 805px) and (max-width: 1366px) {
        width: 20%;
        margin-right: 1%;
    }
    @media screen and (max-width: 800px) {
        width: 44%;
        margin-right: 1%;
    }
    @media screen and (max-width: 630px) {
        width: 100%;
        margin-right: 0;
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
        ${({isCleared, theme}) => isCleared ? `
            background-color: ${theme.actionButton.cleared.normal.BG_COLOR};
            border-color: ${theme.actionButton.cleared.normal.BORDER_COLOR};
        ` : `
            background-color: ${theme.actionButton.start.normal.BG_COLOR};
            border-color: ${theme.actionButton.start.normal.BORDER_COLOR};
            &:hover {
                background-color: ${theme.actionButton.start.hover?.BG_COLOR};
                border-color: ${theme.actionButton.start.hover?.BORDER_COLOR};
            }
        `}
        color: #FFFFFF !important;
    }
`;

const Card: FunctionComponent<Props> = (props: Props) => {
    const { level, title, description, thumbnail, isCleared, onStart } = props;

    const [openDialog] = useDialog();

    const handleStart = () => {
        if(typeof onStart === 'function') onStart();
        openDialog({
            children: <StoryDialog level={level} title={title} />
        })
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