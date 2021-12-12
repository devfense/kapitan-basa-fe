import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import Button from '../../components/Button';
import { DialogContainer } from '../../components/Dialog';
import QuizForm from '../../layouts/forms/story/QuizForm';
import Story from '../../layouts/story/Story';

interface Props {
    storyId?: string;
    level: number;
    title: string;
}

const StyledDialogContentContainer = styled(DialogContainer)`
    width: 1093px;
    @media screen and (max-width: 1093px) {
        width: 100%;
    }
    overflow: hidden;
    .MuiDialogContent-root {
        overflow: hidden;
        > button {
            margin: 0 auto;
            margin-top: 28px;
            display: block;
        }
    }
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    > span {
        color: ${({theme}) => theme.dialog.header.normal.SECONDARY_TEXT_COLOR};
        font-size: 14px;
        font-weight: 600;
    }
    > h2 {
        margin-top: 11px;
        margin-bottom: 0;
        font-size: 22px;
        font-weight: 700;
    }
`;

interface TitleProps {
    level: number;
    title: string;
}

const TitleHeader: FunctionComponent<TitleProps> = ({ level, title }) => {
    return (
        <TitleContainer>
            <span>Level {level}</span>
            <h2>{title}</h2>
        </TitleContainer>
    )
};

const QuizDialog: FunctionComponent<Props> = ({ storyId, level, title }) => {
    return (
        <StyledDialogContentContainer title={<TitleHeader level={level} title={title} />}>
            <QuizForm />
        </StyledDialogContentContainer>
    )
}

export default QuizDialog;
