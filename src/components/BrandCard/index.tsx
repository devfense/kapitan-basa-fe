import React from 'react';
import styled from 'styled-components';
import AvatarLogo from '../../components/AvatarLogo/index';
import BrandName from '../../components/Brand';

const BrandCard = styled.div`
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
    font-size: 0.9rem;
    color: ${({ theme }) => theme.card.secondary.normal.TEXT_COLOR};
    @media screen and (max-width: 960px) {
        font-size: 11px;
    }
`;

type BrandedCard = {
    strings: string;
}

const index = (props: BrandedCard) => {
	return (
		<BrandCard>
			<AvatarContainer>
				<AvatarLogo />
			</AvatarContainer>
			<BrandName />
			<DetailContainer>
				<Typography>
					{ props.strings }
				</Typography>
			</DetailContainer>
		</BrandCard>
	);
};

export default index;
