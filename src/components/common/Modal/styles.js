import styled from '@emotion/styled';

const ModalStyles = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modalBackGroung};
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.2px solid ${({ theme }) => theme.colors.gainsboro};
  border-radius: 1.8px;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);
  min-height: 903px;
  overflow-y: auto;
  padding: 0 50px;
  position: relative;
  width: 936px;
  z-index: 99;
  -webkit-overflow-scrolling: touch;

  section {
    padding: 0;
  }
`;

const ModalHeader = styled.div`
  height: 117px;
`;

const ModalHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.blackRussian};
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 13px;
`;

const ModalHeaderSubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.blackRussian};
  font-weight: 400;
  margin: 0;
  opacity: 0.5;
`;

const ModalBody = styled.div``;

export { ModalStyles, ModalContent, ModalHeader, ModalHeaderTitle, ModalHeaderSubTitle, ModalBody };
