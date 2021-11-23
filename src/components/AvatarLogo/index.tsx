import React from 'react'
import styled from 'styled-components'
import BoyReading from '../../assets/media/reading/Reading'

const AvatarBox = styled.div`
    height: 140px;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
`

const Avatar = styled.div`
    height: 140px;
    width: 140px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.app.sidebar.normal.SECONDARY_BG_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
`

const AvatarImg = styled.img`
    width: 85%;
`

const index = () => {
    return (
        <div>
            <AvatarBox>
                <Avatar>
                    <AvatarImg src={BoyReading.Reading}/>
                </Avatar>
            </AvatarBox>
        </div>
    )
}

export default index
