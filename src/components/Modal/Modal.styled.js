import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
  
  min-height: 350px;
  max-width: 300px;
  width: 100%;
  padding: 12px;
  background-color: darkgray;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
