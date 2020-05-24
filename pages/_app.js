/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextApp from 'next/app';
import { withApollo } from '../lib/apollo';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from 'emotion-theming';

import { globalStyles } from '@utils/styles/global';
import theme from '@utils/styles/theme';
import Page from '@components/Page';

const cache = createCache({});

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          {globalStyles}
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </CacheProvider>
    );
  }
}

export default withApollo({ ssr: true })(App);
