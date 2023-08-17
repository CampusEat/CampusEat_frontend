import React from 'react';

import styled from "styled-components";



function Modal({ isOpen, closeModal }) {
  return (
    <ModalOverlay style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContent><button onClick={closeModal}>X</button></ModalContent>
    </ModalOverlay>
  );
}


const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;

  button {
    font-weight: 900;
    color: #EB4F27;
    border-radius: 10px;
    border: none;
    height: 25px;
    width: 25px;
    background-color:#ffffff;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  }

  button:active{
    box-shadow: 0px 1px 1px rgba(0,0,0,0.25); 
    
}
`;

export default Modal;
