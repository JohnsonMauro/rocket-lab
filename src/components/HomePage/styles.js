import styled from '@emotion/styled';

const HomePageStyles = styled.div`
  width: 100%;

  section {
    margin-bottom: 60px;
  }

  section:nth-of-type(1) {
    margin-top: 50px;
  }

  section:nth-of-type(3) > article > div > div {
    margin: 0;
    width: 100%;
  }

  @media (max-width: 576px) {
    section {
      padding: 0 20px;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;

  &:last-of-type {
    max-width: 679px;
    width: 100%;
  }

  & > div:nth-of-type(1) {
    margin-right: 15px;

    @media (max-width: 576px) {
      margin-right: 0;
      max-width: 100%;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const InputGroup = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  width: 332px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoGroup = styled.div`
  display: flex;
  margin-bottom: 25px;

  label {
    margin-right: 40px;
    opacity: 0.5;
    text-align: right;
    width: 174px;
  }

  span {
    display: block;
    min-width: 203px;
    width: 100%;
  }
`;

export { HomePageStyles, InputContainer, InputGroup, InfoContainer, InfoGroup };
