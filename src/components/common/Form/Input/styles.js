import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Error = css`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: 98% 50%;
  background-size: 16px;
`;

const InputStyles = styled.input`
  ${({ error, touched }) => error && touched && Error};
  border: 0.2px solid
    ${({ error, theme, touched }) =>
      error && touched ? `${theme.colors.error}` : `${theme.colors.gainsboro}`};
  border-radius: 1.8px;
  display: block;
  height: 34px;
  max-width: 332px;
  outline: none;
  padding: 6px 5px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gainsboro};
  }
`;

export { InputStyles };
