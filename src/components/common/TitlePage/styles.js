import styled from '@emotion/styled';

const TitlePageStyles = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ultraMarine};
  display: grid;
  height: 58px;
  padding: 0 40px;
  width: 100%;
`;

const TitleHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  font-size: 25px;
  font-weight: 400;
  margin: 0;
`;

const ButtonContainer = styled.div`
  button:nth-of-type(1) {
    margin-right: 10px;
  }
`;

export { TitlePageStyles, TitleHeader, Title, ButtonContainer };