import styled from "styled-components";

const Brand = styled.label<{ medium?: 'medium' | 'large' }>`
    color: ${({ theme }) => theme.app.brand.normal.BG_COLOR};
    font-size: ${({ medium }) => medium === 'medium' ? '1.2rem' : '1.7rem'} !important;
    font-weight: ${({ medium }) => medium === 'medium' ? '600' : '700'};
    font-family: 'QuickSand-Bold', 'sans-serif';
    > span {
        font-family: 'QuickSand-Bold', 'sans-serif';
        color: ${({ theme }) => theme.app.brand.normal.SECONDARY_BG_COLOR};
    }
    @media screen and (max-width: 960px) {
        font-size: ${({ medium }) => medium === 'medium' ? '1.2rem' : '1.5rem'};
    }
    @media screen and (max-width: 540px) {
        font-size: ${({ medium }) => medium === 'medium' ? '1.1rem' : '1.3rem'};
    }
    @media screen and (min-width: 320px) {
        font-size: ${({ medium }) => medium === 'medium' ? '1.1rem' : '1.2rem'};
    }
`;

const BrandName = () => {
    return <Brand medium='large'>Kapitan <span>Basa</span></Brand>
};

export default BrandName;