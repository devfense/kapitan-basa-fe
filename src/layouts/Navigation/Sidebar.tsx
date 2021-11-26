import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Items from '../../constants/MenuItem/MenuItem';
import BrandName from '../../components/Brand';
import { useLocaleContext } from '../../providers/localization';
import { LocaleStrings } from '../../providers/localization/types';
import AvatarLogo from '../../components/AvatarLogo/index'
import { IoCloseOutline } from 'react-icons/io5'

const Container = styled.div<{ click?: false | true}>`
    display: flex;
    flex-direction: column;
    width: 18%;
    background-color: ${({theme}) => theme.app.sidebar.normal.BG_COLOR};
    height: 100vh;
    z-index: 10;

    @media screen and (max-width: 960px) {
        position: fixed;
        top: 0;
        left: ${({ click }) => (click ? 0 : '-100%')};
        width: 75%;
        z-index: 20;
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        z-index: 20;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 5px 5px;
    }
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
    @media screen and (max-width: 960px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 420px) {
        font-size: 0.9rem;
    }
`;


const TitleBox = styled.div`
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    margin-bottom: 11%;
`;

const MobileIcon = styled.div`
    display: none;
    color: #000;

    @media screen and (max-width: 960px) {
        display: block;
        padding: 0px 0px;
        font-size: 1.5rem;
        cursor: pointer;
        color: #cac2c2;
        position: absolute;
        top: 2.3%;
        right: 5%;
    }
`;

const BrandCard = styled.div`
    width: 67%;
    background-color: ${({ theme }) => theme.app.sidebar.normal.TERTIARY_BG_COLOR};
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    padding: 10px 23px;
    border-radius: 8px;
    
    @media screen and (max-width: 960px) {
        height: auto;
        width: 59%;
    }
`

const AvatarContainer = styled.div`
    padding: 5% 0px;
    display: flex;
    justify-content: center;
`;

const DetailContainer = styled.div`
    display: flex;
    padding: 15px 0;
`;

const Typography = styled.span`
    display: flex;
    justify-content: center;
    font-weight: 400;
    color: ${({ theme }) => theme.app.sidebar.normal.TERTIARY_TEXT_COLOR};
    @media screen and (max-width: 960px) {
        font-size: 0.8rem;
    }
`;

type ButtonClick = {
    click: boolean;
    handleClick: () => void
}

const Sidebar = (props: ButtonClick) => {
    const strings = useLocaleContext();
    return (
        <Container click={props.click}>
            <TitleBox>
                <BrandName medium='large'>Kapitan <span>Basa</span></BrandName>
                <MobileIcon onClick={props.handleClick}><IoCloseOutline /></MobileIcon>
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
            <BrandCard>
                <AvatarContainer>
                    <AvatarLogo />
                </AvatarContainer>
                <BrandName medium='medium'>Kapitan <span>Basa</span></BrandName>
                <DetailContainer>
                    <Typography>
                        { strings.appDesc }
                    </Typography>
                </DetailContainer>
            </BrandCard>
        </Container>
    )
};

export default Sidebar;