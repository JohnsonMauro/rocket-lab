import styled from '@emotion/styled';

const TextAreaStyles = styled.textarea`
  border: 0.2px solid ${({ error, theme }) => (error ? theme.colors.error : theme.colors.gainsboro)};
  border-radius: 1.8px;
  display: block;
  width: 100%;
`;

export { TextAreaStyles };
