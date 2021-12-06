import React, { FunctionComponent } from 'react'
import { DialogContentText as MuiDialogContentText } from '@material-ui/core';
import styled from 'styled-components';

const ContentText = styled(MuiDialogContentText)`
    max-height: 350px;
    padding: 25px 15px;
`

interface Props {
  content: string;
}

const Story: FunctionComponent<Props> = (props: Props) => {
    const { content } = props;
    return (
        <ContentText  tabIndex={-1}>
          { content }
        </ContentText>
    )
}

export default Story;
