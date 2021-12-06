import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components';

interface Props {
  content: ReactNode;
}

const ContentText = styled.pre`
    max-height: 350px;
    margin-top: -20px;
    overflow: hidden;
    overflow-y: scroll;
`

const Story: FunctionComponent<Props> = ({content}) => {
    return (
        <ContentText>
          {content}
        </ContentText>
    )
}

export default Story;
