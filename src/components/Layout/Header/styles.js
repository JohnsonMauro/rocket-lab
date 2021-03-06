import styled from '@emotion/styled';

const HeaderStyles = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 78px;
  justify-content: center;
  margin: auto 0;
`;

const HeaderImg = styled.img`
  width: 212px;
`;

export { HeaderStyles, HeaderImg };
