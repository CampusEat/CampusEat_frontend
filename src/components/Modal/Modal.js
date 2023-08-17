import React from 'react';
import "./modal.css"
import styled from "styled-components";



function Modal({ isOpen, closeModal, message }) {
  return (
    <ModalOverlay style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContent>
        <button onClick={closeModal}>✕</button>
        <p>{message}</p>
      </ModalContent>
    </ModalOverlay>
  );
}

// Styled Components
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
  padding-top:0%;
  border-radius: 5px;

  button {
    font-size: 20px;
    color: #4C4A4B;
    border-radius: 15px;
    height: 5px;
    width: 10px;
    background-color:#ffffff;
    box-shadow: none;
  }
    
}
`;

export default Modal;
