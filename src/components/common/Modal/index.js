import React, { useState, useEffect, useCallback } from 'react';

import Close from '@svg/close.svg';

import {
  ModalStyles,
  ModalContent,
  ModalHeader,
  ModalHeaderClose,
  ModalHeaderTitle,
  ModalHeaderImg,
  ModalHeaderSubTitle,
  ModalBody,
} from './styles';

const Modal = ({
  children,
  icon,
  initialOpened,
  onClosing,
  onOpening,
  subTitle,
  title,
}) => {
  const [isOpened, setOpening] = useState(false);

  useEffect(() => {
    if (initialOpened) {
      setOpening(true);
    }
  }, [initialOpened]);

  useEffect(() => {
    if (isOpened) {
      onOpening();
      setOpening(true);
    }
  }, [isOpened]);

  const handleClose = useCallback(() => {
    onClosing();
    setOpening(false);
  }, []);

  const handleDismiss = useCallback((e) => {
    if (e.target.id === 'dismiss-modal') {
      handleClose();
    }
  }, []);

  if (!isOpened) {
    return null;
  }

  return (
    <ModalStyles
      aria-modal={isOpened}
      data-testid="modal-component"
      id="dismiss-modal"
      onClick={handleDismiss}
      role="dialog"
    >
      <ModalContent>
        <ModalHeader>
          <ModalHeaderClose
            src={Close}
            data-testid="modal-close-button"
            onClick={handleClose}
          ></ModalHeaderClose>
          <ModalHeaderTitle>{title}</ModalHeaderTitle>
          <ModalHeaderImg src={icon}></ModalHeaderImg>
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
