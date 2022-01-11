import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'
import Card from '../../components/Game/Card';
import { Container } from '../../globalStyles'
import { useLocaleContext } from '../../providers/localization';
import SearchBar from '../../components/SearchBar';
import { connect, ConnectedProps } from 'react-redux';
import * as gameLevelActions from '../../modules/game-levels/actions';
import { RootState } from '../../store';
import { GameLevel } from '../../modules/game-levels/types';

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

const Thumbnail = styled.div<{ bg: string }>`
    height: 104px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-image: url(${({bg}) => bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 -230px;
`;

type Props = ReduxProps;

const Game: FunctionComponent<Props> = ({
    levels,
    getGameLevels
}) => {

    const strings = useLocaleContext();

    useEffect(() => {
        getGameLevels({ limit: 10 })
    }, []);

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
                    levels.list.length > 0 &&
                        levels.list.filter((g: GameLevel) => g.levelTitle.toLowerCase().includes(searchGame.toLowerCase())).map((g: GameLevel) => {
                            return (    
                                <Card level={parseInt(g.levelName, 10)} description={g.levelDescription} title={g.levelTitle} thumbnail={<Thumbnail bg={g.levelBgImgUrl} />} isCleared={false}/>
                            )
                        })
                }
            </LevelsContainer>
        </Container>
    )
}

const mapStateToProps = (state: RootState) => ({
    levels: state.gamelevel.levels,
})

const mapDispatchToProps = {
    getGameLevels: gameLevelActions.getGameLevels
};


const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Game);