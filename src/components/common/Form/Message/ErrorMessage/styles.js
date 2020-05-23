import styled from '@emotion/styled';

const ErrorMessageStyles = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-weight: 600;
  display: block;
  font-size: 12px;
  padding-left: 5px;
`;

export { ErrorMessageStyles };
