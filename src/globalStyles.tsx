import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	overflow: auto;
	padding: 35px 35px;

	@media screen and (max-width: 1024px) {
		height: auto;
		padding: 25px 17px;
	}

	/* 88.2vh */

	/* @media screen and (max-width: 991px) { 
        padding-right: 30px;
        padding-left: 30px;
    } */
`;
