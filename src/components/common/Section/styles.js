import styled from '@emotion/styled';

const SectionStyles = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px;
  width: 100%;
`;

const SectionTitleHeader = styled.header`
  display: flex;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.blazeOrange};
  font-size: 22px;
  font-weight: 500;
  margin: 0;
`;

const SectionArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

export { SectionStyles, SectionTitleHeader, SectionTitle, SectionArticle };
