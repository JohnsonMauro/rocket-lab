import styled from '@emotion/styled';

import ArrowDown from '@svg/arrow-down.svg';

const SelectStyles = styled.select`
  appearance: none;
  background-image: url(${ArrowDown});
  background-position: 97% 50%;
  background-repeat: no-repeat;
  border: 0.2px solid
    ${({ error, theme, touched }) =>
      error && touched ? theme.colors.error : theme.colors.gainsboro};
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

  option[value=''] {
    color: ${({ theme }) => theme.colors.gainsboro};
  }
`;

export { SelectStyles };
