import styled from "styled-components";

const BrandName = styled.label<{ medium?: 'medium' | 'large' }>`
    color: ${({ theme }) => theme.app.brand.normal.BG_COLOR};
    font-size: ${({ medium }) => medium === 'medium' ? '1.5rem' : '1.7rem'};
    font-weight: ${({ medium }) => medium === 'medium' ? '600' : '700'};
    > span {
        color: ${({ theme }) => theme.app.brand.normal.SECONDARY_BG_COLOR};
    }
`;

export default BrandName;