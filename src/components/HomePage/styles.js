import styled from '@emotion/styled';

const HomePageStyles = styled.div`
  width: 100%;

  section {
    margin-bottom: 60px;
  }

  section:nth-of-type(1) {
    margin-top: 50px;
  }

  section:nth-child(4) > article > div > div {
    margin: 0;
    width: 100%;
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
  }
`;

const InputGroup = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  width: 332px;
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
    width: 142px;
  }
`;

export { HomePageStyles, InputContainer, InputGroup, InfoContainer, InfoGroup };
