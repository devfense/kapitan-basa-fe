import React from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import styled from "styled-components";

const Search = styled.div`
    background-color: #FFF;
    width: 200px;
    border-radius: 8px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    margin-bottom: 15px;
`;

const SearchIconWrapper = styled.div`
    height: 45px;
    width: 55px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchIcons = styled(SearchIcon)`
    color: #7C8DB5;
`;

const SearchBar = styled.input`
    height: 45px;
    width: 100%;
    color: #7C8DB5;
    font-size: 1rem;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    outline: none;
    border: none;
    padding-right: 13px;
`;

type SearchProps = {
    searchTerm?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const index = (props: SearchProps) => {
    const { searchTerm } = props;
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcons />
            </SearchIconWrapper>
            <SearchBar type="search" placeholder="search.." onChange={searchTerm} />
        </Search>
    )
}

export default index;