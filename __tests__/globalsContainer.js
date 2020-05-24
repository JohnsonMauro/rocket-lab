/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { globalStyles } from '@utils/styles/global';
import theme from '@utils/styles/theme';

const GlobalsContainer = ({ children }) => (
  <ThemeProvider theme={theme}>
    {globalStyles}
    {children}
  </ThemeProvider>
);

export default GlobalsContainer;
