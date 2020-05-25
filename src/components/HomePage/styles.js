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

export { HomePageStyles, InputContainer, InputGroup };
