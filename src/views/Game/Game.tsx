import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Game/Card';
import { Container } from '../../globalStyles'
import { useLocaleContext } from '../../providers/localization';
import SearchBar from '../../components/SearchBar/index';

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

const LevelsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

const gamelevels = [
    {
        level: 1,
        isCleared: true,
        title: 'ABNKKBSANPLKO',
        description: 'Aba nakakabasa na pala ako Lorem Ipsum Dolor sit amet consectetitur omet si kamalisodum. Sem nalsi oranda chomp, goda mil te hasemsn dusakla karaibus mendaiksu oreberum ambis nena',
    },
    {
        level: 2,
        isCleared: true,
        title: 'ABNKKBSANPLKO',
        description: 'Aba nakakabasa na pala ako',
    },
    {
        level: 3,
        isCleared: false,
        title: 'ABNKKBSANPLKO',
        description: 'Aba nakakabasa na pala ako',
    },
    {
        level: 4,
        isCleared: false,
        title: 'ABNKKBSANPLKO',
        description: 'Aba nakakabasa na pala ako',
    },
    {
        level: 5,
        isCleared: false,
        title: 'ABNKKBSANPLKO',
        description: 'Aba nakakabasa na pala ako',
    }
]

const Game = () => {

    const strings = useLocaleContext();

    return (
        <Container>
            <LabelContainer>
                <PageLabel>{ strings.gameLevel }</PageLabel>
            </LabelContainer>
            <SearchBar />
            <LevelsContainer>
                {
                    gamelevels.map((g) => {
                        return (    
                            <Card level={g.level} description={g.description} title={g.title} isCleared={g.isCleared}/>
                        )
                    })
                }
            </LevelsContainer>
        </Container>
    )
}

export default Game;
