import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: auto;
    padding: 35px 35px;

    @media screen and (max-width: 991px) { 
        padding-right: 30px;
        padding-left: 30px;
    }
`;
