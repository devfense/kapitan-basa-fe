import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Items from '../../constants/MenuItem/MenuItem';
import BrandName from '../../components/Brand';
import { useLocaleContext } from '../../providers/localization';
import { LocaleStrings } from '../../providers/localization/types';

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

const MenuBox = styled(NavLink)`
    height: 45px;
    width: auto;
    display: flex;
    align-items: center;
    border-radius: 7px;
    color: ${({theme}) => theme.app.nav.normal.TEXT_COLOR};
    font-weight: 600;
    padding: 0px 15px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: ${({theme}) => theme.app.nav.hover?.TEXT_COLOR};
        background-color: ${({theme}) => theme.app.nav.hover?.BG_COLOR};
        border-radius: 7px;
        transition: all 0.5s ease-in-out; 
    }
    &.active {
        color: ${({theme}) => theme.app.nav.active?.TEXT_COLOR};
        background-color: ${({theme}) => theme.app.nav.active?.BG_COLOR};
        border-radius: 7px;
    }  
`;

const TitleBox = styled.div`
    height: 51px;
    display: flex;
    align-items: center;
    padding: 0px 30px;
    margin-bottom: 40px;
`;

const Sidebar = () => {
    const strings = useLocaleContext();
    return (
        <Container>
            <TitleBox>
                <BrandName medium='medium'>Kapitan<span>Basa</span></BrandName>
            </TitleBox>
            <NavContainer>
                {
                    Items.map((menu, indx) => {
                        return (
                            <MenuBox to={menu.route} key={indx}>{strings[menu.key as keyof LocaleStrings]}</MenuBox>
                        )
                    })
                }
            </NavContainer>
        </Container>
    )
};

export default Sidebar;