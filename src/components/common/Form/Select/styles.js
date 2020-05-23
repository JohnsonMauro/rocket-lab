import styled from '@emotion/styled';

const SelectStyles = styled.select`
  border: 0.2px solid ${({ theme }) => theme.colors.gainsboro};
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
