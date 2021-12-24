import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components';

interface Props {
  content: ReactNode;
}

const ContentText = styled.pre`
    max-height: 550px;
    margin-top: -20px;
    overflow: hidden;
    overflow-y: scroll;
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word; 
`

const Story: FunctionComponent<Props> = ({content}) => {
    return (
        <ContentText>
          {content}
        </ContentText>
    )
} 

export default Story;
