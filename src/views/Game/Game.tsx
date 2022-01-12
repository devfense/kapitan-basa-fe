import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../../components/Game/Card';
import { Container } from '../../globalStyles';
import { useLocaleContext } from '../../providers/localization';
import SearchBar from '../../components/SearchBar';
import { connect, ConnectedProps } from 'react-redux';
import * as gameLevelActions from '../../modules/game-levels/actions';
import { RootState } from '../../store';
import { GameLevel } from '../../modules/game-levels/types';
import Navigator from './Navigator';
import LoadingOverlay from '../../components/Progress/LoadingOverlay';

const LabelContainer = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	@media screen and (max-width: 1024px) {
		margin-bottom: 15px;
	}
`;

const PageLabel = styled.span<{ size?: 'subheader' | 'header' }>`
	font-size: ${({ size }) => (size === 'subheader' ? '1.1rem' : '1.2rem')};
	font-weight: 600;
	color: ${({ theme }) => theme.app.content.normal.TEXT_COLOR};

	@media screen and (max-width: 1024px) {
		font-size: ${({ size }) => (size === 'subheader' ? '0.9rem' : '1rem')};
	}
`;

const LevelsContainer = styled.div`
	display: flex;
	position: relative;
	flex-wrap: wrap;
	width: 100%;
	padding: 15px 0px;
	min-height: 70vh;
	max-height: 700px;
	box-sizing: border-box;
`;

const Thumbnail = styled.div<{ bg: string }>`
	height: 104px;
	margin-bottom: 20px;
	border-radius: 10px;
	background-image: url(${({ bg }) => bg});
	background-size: cover;
	background-repeat: no-repeat;
`;

type Props = ReduxProps;

const Game: FunctionComponent<Props> = ({ levels, studentID, getGameLevels }) => {
	const strings = useLocaleContext();

	useEffect(() => {
		getGameLevels({ studentID: studentID ?? '', limit: 8, page: 1 });
	}, []);

	// search title upon typing
	const [searchGame, setSearchGame] = React.useState('');

	// function search
	const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchGame(e.target.value);
	};

	const onNavigate = (p: number) => {
		getGameLevels({ studentID: studentID ?? '', limit: 8, page: p });
	};

	return (
		<Container>
			<LabelContainer>
				<PageLabel>{strings.gameLevel}</PageLabel>
			</LabelContainer>
			<SearchBar searchTerm={onSearchChange} />
			<LevelsContainer>
				{levels.isLoading && <LoadingOverlay /> }
				{levels.list.length > 0 &&
					levels.list
						.filter((g: GameLevel) =>
							g.gameLevelData.levelTitle.toLowerCase().includes(searchGame.toLowerCase())
						)
						.map((g: GameLevel, i) => {
							return (
								<Card
									level={parseInt(g.gameLevelData.levelName, 10)}
									description={g.gameLevelData.levelDescription}
									title={g.gameLevelData.levelTitle}
									thumbnail={<Thumbnail bg={g.gameLevelData.levelBgImgUrl} />}
									isCleared={g.levelCleared}
									isLocked={g.locked}
									key={i}
								/>
							);
						})}
			</LevelsContainer>
			<Navigator limit={8} itemCount={levels.count || 0} onChange={onNavigate}/>
		</Container>
	);
};

const mapStateToProps = (state: RootState) => ({
	levels: state.gamelevel.levels,
	studentID: state.users.userInfo.studentID,
});

const mapDispatchToProps = {
	getGameLevels: gameLevelActions.getGameLevels,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Game);
