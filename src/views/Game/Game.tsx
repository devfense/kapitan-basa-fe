import React from 'react'
import { Container } from '../../globalStyles'
import { useLocaleContext } from '../../providers/localization';
import SearchBar from '../../components/SearchBar/index';
import styled from 'styled-components'

const LabelContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
        margin-bottom: 15px;
    }
`;

const PageLabel = styled.span<{size?: 'subheader' | 'header'}>`
    font-size: ${({ size }) => size === 'subheader' ? '1.1rem' : '1.2rem'};
    font-weight: 600;
    color: ${({ theme }) => theme.app.content.normal.TEXT_COLOR};

    @media screen and (max-width: 1024px) {
       font-size: ${({ size }) => size === 'subheader' ? '0.9rem' : '1rem'};
    }
`;

const Game = () => {

    const strings = useLocaleContext();

    return (
        <Container>
            <LabelContainer>
                <PageLabel>{ strings.gameLevel }</PageLabel>
            </LabelContainer>
            <SearchBar />
        </Container>
    )
}

export default Game;
