import React, { useState, useEffect, useCallback } from 'react';

import {
  ModalStyles,
  ModalContent,
  ModalHeader,
  ModalHeaderTitle,
  ModalHeaderSubTitle,
  ModalBody,
} from './styles';

const Modal = ({ children, isInitiallyOpened, onOpening, subTitle, title }) => {
  const [isOpened, setOpeningStatus] = useState(false);

  useEffect(() => {
    if (isInitiallyOpened) {
      setOpeningStatus(true);
    }
  }, [isInitiallyOpened]);

  useEffect(() => {
    if (isOpened) {
      onOpening();
      setOpeningStatus(true);
    }
  }, [isOpened]);

  const handleClosingClick = useCallback(() => {
    onClosing();
    setOpeningStatus(false);
  }, []);

  const handleDismiss = useCallback((e) => {
    if (e.target.id === 'dismiss-modal') {
      handleClosingClick();
    }
  }, []);

  if (!isOpened) {
    return null;
  }

  return (
    <ModalStyles aria-modal={isOpened} id="dismiss-modal" onClick={handleDismiss} role="dialog">
      <ModalContent>
        <ModalHeader>
          <ModalHeaderTitle>{title}</ModalHeaderTitle>
          <ModalHeaderSubTitle>{subTitle}</ModalHeaderSubTitle>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalStyles>
  );
};

Modal.defaultProps = {
  isInitiallyOpened: false,
  onOpening: () => {},
  onClosing: () => {},
};

export default Modal;
