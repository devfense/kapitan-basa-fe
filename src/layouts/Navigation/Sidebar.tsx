import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Items from '../../constants/MenuItem/MenuItem';
import BrandName from '../../components/Brand';
import BrandCard from '../../components/BrandCard/index'
import { useLocaleContext } from '../../providers/localization';
import { LocaleStrings } from '../../providers/localization/types';
import { IoChevronBack } from 'react-icons/io5';


const Container = styled.div<{ toggle?: false | true}>`
    display: flex;
    flex-direction: column;
    width: 18%;
    background-color: ${({theme}) => theme.app.sidebar.normal.BG_COLOR};
    height: 100vh;
    z-index: 20;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media screen and (max-width: 420px) {
        position: fixed;
        top: 0;
        left: ${({ toggle }) => (toggle ? 0 : '-100%')};
        width: 75% !important;
        z-index: 20;
        transition: all 0.3s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    @media screen and (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: ${({ toggle }) => (toggle ? 0 : '-100%')};
        width: 40%;
        z-index: 20;
        transition: all 0.3s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    /* @media screen and (max-width: 1024px) {
        left: ${({ toggle }) => (toggle ? 0 : '-100%')};
        z-index: 20;
        width: 50%;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 5px 5px;
    } */
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    overflow: hidden;
    margin-bottom: 100px;
    @media screen and (max-width: 960px) {
        margin-bottom: 20%;
    }
`;

const MenuBox = styled(NavLink)`
    height: 45px;
    width: auto;
    display: flex;
    align-items: center;
    border-radius: 7px;
    color: ${({theme}) => theme.menuItem.text.normal.TEXT_COLOR};
    font-weight: 600;
    padding: 0px 15px;
    cursor: pointer;
    text-decoration: none;

    &.active {
        color: ${({theme}) => theme.menuItem.text.active?.TEXT_COLOR};
        background-color: ${({theme}) => theme.menuItem.text.active?.BG_COLOR};
        border-radius: 7px;
        transition: all 0.5s ease-in-out;
    }  
    @media screen and (max-width: 960px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 540px) {
        font-size: 0.9rem;
    }
`;

const TitleBox = styled.div`
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center !important;
    padding: 0px 30px;
    margin-bottom: 11%;
`;

const MobileIcon = styled.div`
    display: none;
    color: ${({ theme }) => theme.icon.primary.normal.BG_COLOR};

    @media screen and (max-width: 325px) {
        display: flex;
        align-items: center;
        font-size: 1rem !important;
        cursor: pointer;
        color: ${({ theme }) => theme.icon.primary.normal.SECONDARY_TEXT_COLOR};
    }

    @media screen and (max-width: 540px) {
        display: flex;
        align-items: center;
        font-size: 1.2rem !important;
        cursor: pointer;
        color: ${({ theme }) => theme.icon.primary.normal.SECONDARY_TEXT_COLOR};
    }

    @media screen and (max-width: 1024px) {
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        cursor: pointer;
        color: ${({ theme }) => theme.icon.primary.normal.SECONDARY_TEXT_COLOR};
    }
`;

type ButtonClick = {
    toggle: boolean;
    handleClick: () => void
}

const Sidebar = (props: ButtonClick) => {
    const strings = useLocaleContext();
    return (
        <Container toggle={props.toggle}>
            <TitleBox>
                <BrandName />
                <MobileIcon>
                    <IoChevronBack onClick={props.handleClick} />
                </MobileIcon>
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
            <BrandCard strings={strings.appDesc}/>
        </Container>
    )
};

export default Sidebar;