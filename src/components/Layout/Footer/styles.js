import styled from '@emotion/styled';

const FooterStyles = styled.footer`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 166px;
`;

const RightReserved = styled.span`
  color: ${({ theme }) => theme.colors.blackRussian};
  font-size: 14px;
  line-height: 20px;
  opacity: 0.4;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 216px;
`;

export { FooterStyles, RightReserved, LinkContainer };
