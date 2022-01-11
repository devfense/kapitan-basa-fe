import React from 'react';
import styled from 'styled-components';

const ModalMask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    transition: opacity all 0.3s ease;
    overflow-y: scroll;
    z-index: 50;

    @media screen and (max-width: 1024px) {
        height: 100vh;
    }

    @media screen and (max-width: 420px) {
        height: 100% !important;
        margin: 0;
    }

    &::-webkit-scrollbar {
    width: 4px;
    cursor: pointer;
    /*background-color: rgba(229, 231, 235, var(--bg-opacity));*/
    }
    &::-webkit-scrollbar-track {
    background-color: rgba(229, 231, 235, var(--bg-opacity));
    cursor: pointer;
    /*background: red;*/
    }
    &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: #a0aec0;
    /*outline: 1px solid slategrey;*/
    }
`;

const ModalPositioner = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;  
    padding: 30px 0 30px;  
`;



const Container = styled.div`
    height: 60%;
    width: 25%;
    background-color: ${({ theme }) => theme.card.primary.normal.BG_COLOR};
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    margin-top: 25px;

    @media screen and (max-width: 1024px) {
        width: 55%;
    }

    @media screen and (max-width: 420px) {
        width: 90%;
    }
`;

const TextBox = styled.div`
    height: 70px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 0px 22px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    @media screen and (max-width: 420px) {
        margin-bottom: 5px;
    }
`;

const Label = styled.div`
    height: 50px;
    color: ${({ theme }) => theme.card.primary.normal.TEXT_COLOR};
    font-weight: 600;
    font-size: 1.3rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 5px;

    @media screen and (max-width: 420px) {
        font-size: 1.05rem;
    }
`;

const TextFieldContainer = styled.div`
    height: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 0px 28px;
    
    @media screen and (max-width: 420px) {
        padding: 0px 20px
    }
`;

type ModalProps = {
    modalTitle: string;
    children: React.ReactNode;
}

const index = (props: ModalProps) => {
	return (
		<ModalMask>
			<ModalPositioner>
				<Container>
					<TextBox>
						<Label>{ props.modalTitle }</Label>
					</TextBox>
					<TextFieldContainer>
						{ props.children }
					</TextFieldContainer>
				</Container>
			</ModalPositioner>
		</ModalMask>
	);
};

export default index;
