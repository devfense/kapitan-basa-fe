import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface BrandNameProps {
	fontSize?: string;
};

const Brand = styled.label<{ fontWeight?: string }>`
	color: ${({ theme }) => theme.app.brand.normal.BG_COLOR};
	font-size: ${({ fontWeight }) => (fontWeight === 'medium' ? '1.2rem' : '1.4rem')} !important;
	font-weight: ${({ fontWeight }) => (fontWeight === 'medium' ? '600' : '700')};
	font-family: 'QuickSand-Bold', 'sans-serif';
	> span {
		font-family: 'QuickSand-Bold', 'sans-serif';
		color: ${({ theme }) => theme.app.brand.normal.SECONDARY_BG_COLOR};
	}
	@media screen and (max-width: 960px) {
		font-size: ${({ fontWeight }) => (fontWeight === 'medium' ? '1.1rem' : '1.5rem')} !important;
	}
	@media screen and (max-width: 540px) {
		font-size: ${({ fontWeight }) => (fontWeight === 'medium' ? '1rem' : '1.3rem')} !important;
	}
	@media screen and (min-width: 320px) {
		font-size: ${({ fontWeight }) => (fontWeight === 'medium' ? '1.1rem' : '1.3rem')};
	}

	@media screen and (max-height: 720px) {
		font-size: ${({ fontWeight }) => (fontWeight === 'medium' ? '0.9rem' : '1rem')} !important;
	}
`;

type Props = BrandNameProps;

const BrandName: FunctionComponent<Props> = (props: Props): JSX.Element => {
	const { fontSize } = props;
	return (
		<Brand fontWeight={fontSize}>
			Kapitan <span>Basa</span>
		</Brand>
	);
};

export default BrandName;
