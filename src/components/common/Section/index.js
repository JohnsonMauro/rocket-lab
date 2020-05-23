import { SectionStyles, SectionTitleHeader, SectionTitle, SectionArticle } from './styles';

const Section = ({ children, title }) => (
  <SectionStyles>
    <SectionTitleHeader>
      <SectionTitle>{title}</SectionTitle>
    </SectionTitleHeader>
    <SectionArticle>{children}</SectionArticle>
  </SectionStyles>
);

export default Section;
