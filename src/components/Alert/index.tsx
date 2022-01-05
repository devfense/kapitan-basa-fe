import React, { FunctionComponent } from 'react'
import AlertType from '../../assets/media/Alert/Alert';
import styled from 'styled-components'

interface AlertInfoProps {
    message?: string;
}

// const ModalMask = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100vh;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: block;
//     transition: opacity all 0.3s ease;
//     overflow-y: scroll;
//     z-index: 50;
// `; 

// const ModalPositioner = styled.div`
//     display: flex;
//     min-height: 100vh;
//     align-items: center;
//     justify-content: center;  
//     padding: 30px 0 30px;  
// `;

const ModalContainer = styled.div`
    height: auto;
    margin: 0px auto;
    width: 20rem;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    padding: 20px 35px 20px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BoxImage = styled.img`
    width: 25%;
    height: 25%;
    object-fit: cover;
    padding: 25px 0px 20px;
`;

const Message = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
    padding: 5px 0px 20px;
`;

type Props = AlertInfoProps;

const index: FunctionComponent<Props> = (props: Props) => {
    const { message } = props
    return (
        <ModalContainer>
            <BoxImage src={AlertType.Success} />
            <Message>{ message }</Message>
        </ModalContainer>
    )
}

export default index
