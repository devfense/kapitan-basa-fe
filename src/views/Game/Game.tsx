import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Game/Card';
import { Container } from '../../globalStyles'

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
        title: 'ABNKKBSANPLKO',
        description: 'Aba nakakabasa na pala ako',
    },
    {
        level: 2,
        title: 'ABNKKBSANPLKO',
        description: 'Aba nakakabasa na pala ako',
    },
    {
        level: 2,
        title: 'ABNKKBSANPLKO',
        description: 'Aba nakakabasa na pala ako',
    },
    {
        level: 2,
        title: 'ABNKKBSANPLKO',
        description: 'Aba nakakabasa na pala ako',
    }
]

const Game = () => {
    return (
        <Container>
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
