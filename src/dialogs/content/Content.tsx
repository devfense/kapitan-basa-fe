import React from 'react'
import styled from 'styled-components';
import { DialogContentContainer } from '../../components/Dialog/dialog';
import Story from '../../layouts/forms/content/story';

const StyledDialogContentContainer = styled(DialogContentContainer)`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const Content = () => {
    return (
        <StyledDialogContentContainer level={'Level 1'} title={'The Passion of Christ'} submitText={'Done Reading'}>
            <Story />
        </StyledDialogContentContainer>
    )
}

export default Content;
