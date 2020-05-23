import React from 'react';
import { ButtonStyles } from './styles';

const Button = ({ children, onClick, type, variant }) => (
  <ButtonStyles onClick={onClick} type={type} variant={variant}>
    {children}
  </ButtonStyles>
);

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export default Button;
