import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000004f;
    z-index: 1;
    border-radius: 20px;
`;

// for customization
const StyledCircularProgress = styled(CircularProgress)``;

const LoadingOverlay: FunctionComponent = () => {
    return (
        <Container>
            <StyledCircularProgress />
        </Container>
    );
};

export default LoadingOverlay;