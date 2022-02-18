import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import AvatarLogo from '../../components/AvatarLogo/index';
import BrandName from '../../components/Brand';

const Container = styled.div`
	width: 67%;
	background-color: ${({ theme }) => theme.card.secondary.normal.BG_COLOR};
	margin: 0px auto;
	display: flex;
	flex-direction: column;
	padding: 10px 23px;
	border-radius: 8px;

	@media screen and (max-width: 960px) {
		height: auto;
		width: 59%;
	}
`;

const AvatarContainer = styled.div`
	padding: 5% 0px;
	display: flex;
	justify-content: center;
`;

const DetailContainer = styled.div`
	display: flex;
	padding: 15px 0;
`;

const Typography = styled.span`
	display: flex;
	justify-content: center;
	font-weight: 500;
	font-size: 0.9rem !important;
	color: ${({ theme }) => theme.card.secondary.normal.TEXT_COLOR};
	@media screen and (max-width: 960px) {
		font-size: 13px !important;
	}
	@media screen and (max-width: 540px) {
		font-size: 12px !important;
	}
	@media screen and (max-width: 414px) {
		font-size: 12px !important;
	}
	@media screen and (min-width: 320px) {
		font-size: 12px;
	}

	@media screen and (max-height: 720px) {
		font-size: 9px !important;
	}
`;

type BrandedCard = {
	strings: string;
};

const BrandCard: FunctionComponent<BrandedCard> = (props: BrandedCard) => {
	return (
		<Container>
			<AvatarContainer>
				<AvatarLogo />
			</AvatarContainer>
			<BrandName fontSize='medium'/>
			<DetailContainer>
				<Typography>{props.strings}</Typography>
			</DetailContainer>
		</Container>
	);
};

export default BrandCard;
