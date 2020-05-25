import styled from '@emotion/styled';

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const InfoGroup = styled.div`
  display: grid;
  grid-template-columns: 174px 1fr;
  margin-bottom: 25px;

  label {
    margin-right: 40px;
    opacity: 0.5;
    text-align: right;
  }

  @media (max-width: 768px) {
    grid-template-columns: 151px 1fr;

    span {
      font-size: 14px;
    }
  }

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;

    label {
      margin-right: 0;
      opacity: 0.5;
      text-align: left;
    }
  }
`;

export { InfoContainer, InfoGroup };
