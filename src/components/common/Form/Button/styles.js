import styled from '@emotion/styled';
import { css } from '@emotion/core';

const variantns = ({ variant, theme }) =>
  ({
    primary: css`
      background-color: ${theme.colors.blazeOrange};
      border: 1px solid ${theme.colors.blazeOrange};
      color: ${theme.colors.white};
    `,
    secondary: css`
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      color: ${theme.colors.blazeOrange};
    `,
  }[variant]);

const ButtonStyles = styled.button`
  ${variantns};
  border-radius: 1.8px;
  cursor: pointer;
  outline: none;
  padding: 7px 22px;
  user-select: none;
  vertical-align: middle;
`;

export { ButtonStyles };
