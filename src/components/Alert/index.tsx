import React, { FunctionComponent } from 'react';
import AlertType from '../../assets/media/Alert/Alert';
import styled from 'styled-components';

interface AlertInfoProps {
	type: string;
	title: string;
	message: string;
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
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	padding: 15px 35px;
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

const Title = styled.span`
	font-size: 1.2rem;
	font-weight: 600;
	color: #000;
	padding: 0px 0px 10px;
`;

const Message = styled.span`
	font-size: 1rem;
	color: #000;
	padding: 0px 0px 20px;
	text-align: center;
`;

type Props = AlertInfoProps;

const index: FunctionComponent<Props> = (props: Props) => {
	const { type, title, message } = props;
	return (
		<ModalContainer>
			<BoxImage src={type === 'Error' ? AlertType.Error : AlertType.Success} />
			<Title>{title}</Title>
			<Message>{message}</Message>
		</ModalContainer>
	);
};

export default index;
