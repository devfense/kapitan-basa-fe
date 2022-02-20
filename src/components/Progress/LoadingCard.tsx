import React, { FunctionComponent } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 21.7%;
	max-height: 300px;
	margin-right: 20px;
	margin-bottom: 20px;
	background-color: ${({ theme }) => theme.card.primary.normal.BG_COLOR};
	padding: 15px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

	> p {
		margin: 0;
		margin-bottom: 10px;
		font-size: 12px;
	}
	> .level {
		color: #7c8db5;
		text-align: right;
		font-weight: 700;
	}
	> .title {
		color: #25396f;
		font-weight: 700;
	}
	> .desc {
		color: #7c8db5;
		height: 50px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	@media screen and (min-width: 2000px) {
		max-width: 372px;
	}
	@media screen and (min-width: 1444px) and (max-width: 1700px) {
		width: 21%;
		margin-right: 1%;
	}
	@media screen and (min-width: 805px) and (max-width: 1366px) {
		width: 20%;
		margin-right: 1%;
	}
	@media screen and (max-width: 800px) {
		width: 44%;
		margin-right: 1%;
	}
	@media screen and (max-width: 630px) {
		width: 91.5%;
		height: 300px;
		margin-right: 0;
		margin-bottom: 5%;
		max-height: unset;
	}
`;

const ThumbnailBox = styled.div`
	margin-bottom: 20px;
	height: 104px;
`;

const LevelContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 0;
	margin-bottom: 5px;
`;

const TitleContainer = styled.div`
	margin-bottom: 10px;
`;

const DescriptionContainer = styled.div`
	height: 50px;
	margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
	margin-top: 10px;
`;

const LoadingCard: FunctionComponent = () => {
    return (
        <>
            <CardContainer>
				<ThumbnailBox>
					<Skeleton height={100} borderRadius="10px"/>
				</ThumbnailBox>
				<LevelContainer className={'level'}>
					<Skeleton count={1} width={50}/>
				</LevelContainer>
				<TitleContainer className={'title'}>
					<Skeleton count={1} width={170} />
				</TitleContainer>
				<DescriptionContainer>
					<Skeleton />
					<Skeleton width={320} />
					<Skeleton width={270} />
				</DescriptionContainer>
				<ButtonContainer>
					<Skeleton height={43} borderRadius={50}/>
				</ButtonContainer>
            </CardContainer>      
        </>
    )
};

export default LoadingCard;