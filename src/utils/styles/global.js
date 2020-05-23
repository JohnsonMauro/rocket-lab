import React from 'react';
import { css, Global } from '@emotion/react';
import theme from './theme';

const styles = css`
  @font-face {
    font-family: Avenir;
    src: local(Avenir), url('/fonts/AvenirLTStd-Book.otf');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

  * {
    box-sizing: border-box;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  body,
  html {
    height: 100%;
    margin: 0;
  }

  body {
    display: flex;
    flex-direction: column;
  }

  a,
  button,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  label,
  p,
  section,
  select,
  span {
    font-family: ${theme.fonts.Avenir};
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const globalStyles = <Global styles={styles} />;
