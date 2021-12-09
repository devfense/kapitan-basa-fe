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
    padding: 15px 0px;
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
        title: 'DYLAN GAMING',
        description: 'Aba nakakabasa na pala ako',
    },
    {
        level: 5,
        isCleared: false,
        title: 'TEST',
        description: 'Aba nakakabasa na pala ako',
    }
]

const Game = () => {

    const strings = useLocaleContext();
    
    // bind to constant data "gamelevels"
    const [gameList] = React.useState(gamelevels);

    // search title upon typing
    const [searchGame, setSearchGame] = React.useState("");

    // function search
    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchGame(e.target.value);
    }

    return (
        <Container>
            <LabelContainer>
                <PageLabel>{ strings.gameLevel }</PageLabel>
            </LabelContainer>
            <SearchBar searchTerm={onSearchChange} />
            <LevelsContainer>
                {
                    gameList.length > 0 &&
                        gameList.filter((g) => g.title.toLowerCase().includes(searchGame.toLowerCase())).map((g) => {
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