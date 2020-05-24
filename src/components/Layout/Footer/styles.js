import styled from '@emotion/styled';

const FooterStyles = styled.footer`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 166px;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const RightReserved = styled.p`
  color: ${({ theme }) => theme.colors.blackRussian};
  font-size: 14px;
  line-height: 20px;
  opacity: 0.4;

  @media (max-width: 850px) {
    display: block;
    text-align: center;
    width: 100%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 216px;

  @media (max-width: 850px) {
    margin-bottom: 5px;
  }
`;

export { FooterStyles, RightReserved, LinkContainer };
