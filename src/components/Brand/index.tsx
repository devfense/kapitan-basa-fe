import styled from "styled-components";

const BrandName = styled.label<{ medium?: 'medium' | 'large' }>`
    color: #435EBE;
    font-size: ${({ theme, medium }) => medium === 'medium' ? theme.fontsize.medium.normal.MEDIUM_FONT : theme.fontsize.large.normal.LARGE_FONT};
    font-weight: 700;
    > span {
        color: #41BBDD;
    }
`;

export default BrandName;