import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Items from '../../constants/MenuItem/MenuItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    background-color: ${({theme}) => theme.app.sidebar.normal.BG_COLOR};
    height: 100vh;
    z-index: 10;

    @media screen and (max-width: 960px) {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
    }
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    overflow: hidden;
`;

const MenuBox = styled.div`
    height: 45px;
    width: auto;
    display: flex;
    align-items: center;
    border-radius: 7px;
    color: #25396F;
    font-weight: 600;
    padding: 0px 15px;
    cursor: pointer;
    a {
        line-height: 30px;
        text-decoration: none;
    }

    &:hover {
        color: #FFF;
        background-color: #435EBE;
        border-radius: 7px;
        transition: all 0.5s ease-in-out; 
    }
    &.active {
        background-color: #435EBE;
        border-radius: 7px;
    }  
`

const TitleBox = styled.div`
    height: 51px;
    display: flex;
    align-items: center;
    padding: 0px 30px;
    margin-bottom: 40px;
`

const Title = styled.span`
    color: #435EBE;
    font-size: 20px;
    font-weight: 700;
    > span {
        color: #41BBDD;
    }
`

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <TitleBox>
                <Title>Kapitan <span>Basa</span></Title>
            </TitleBox>
            <NavContainer>
                { 
                    Items.map((item, index) => 
                        <MenuBox 
                            key={index}
                            onClick={() => navigate(`${item.route}`)}
                        >
                            { item.title }
                        </MenuBox>
                    )
                }
            </NavContainer>
        </Container>
    )
};

export default Sidebar;