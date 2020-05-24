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

  @media (max-width: 992px) {
    padding: 0 25px;
    width: 85%;
  }

  @media (max-width: 576px) {
    box-shadow: none;
    height: 100%;
    min-height: unset;
    width: 100%;
  }
`;

const ModalHeader = styled.div`
  height: 117px;
`;

const ModalHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.blackRussian};
  display: inline-block;
  font-size: 25px;
  font-weight: 400;
  margin: 50px 15px 13px 0;
`;

const ModalHeaderImg = styled.img`
  height: 16px;
  width: 22px;
`;

const ModalHeaderClose = styled.img`
  cursor: pointer;
  height: 16px;
  position: absolute;
  right: 37px;
  top: 30px;
  width: 16px;

  @media (max-width: 576px) {
    right: 23px;
    top: 19px;
  }
`;

const ModalHeaderSubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.blackRussian};
  font-weight: 400;
  margin: 0;
  opacity: 0.5;
`;

const ModalBody = styled.div``;

export {
  ModalStyles,
  ModalContent,
  ModalHeader,
  ModalHeaderTitle,
  ModalHeaderImg,
  ModalHeaderClose,
  ModalHeaderSubTitle,
  ModalBody,
};
