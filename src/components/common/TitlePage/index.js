
import { TitlePageStyles, TitleHeader, Title, ButtonContainer } from './styles';

const TitlePage = ({ buttons, title }) => (
  <TitlePageStyles>
    <TitleHeader>
      <Title>{title}</Title>
      <ButtonContainer>{buttons}</ButtonContainer>
    </TitleHeader>
  </TitlePageStyles>
);

export default TitlePage;
