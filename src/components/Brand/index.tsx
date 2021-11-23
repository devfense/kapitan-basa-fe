import styled from "styled-components";

const BrandName = styled.label<{ medium?: 'medium' | 'large' }>`
    color: ${({ theme }) => theme.app.brand.normal.BG_COLOR};
    font-size: ${({ medium }) => medium === 'medium' ? '1.5rem' : '2rem'};
    font-weight: 700;
    > span {
        color: ${({ theme }) => theme.app.brand.normal.SECONDARY_BG_COLOR};
    }
`;

export default BrandName;