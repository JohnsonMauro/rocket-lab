import React from 'react';
import Head from 'next/head';

import Footer from '@components//Layout/Footer';
import Header from '@components/Layout/Header';
import Main from '@components//Layout/Main';

const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        
        <title>{title}</title>

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      </Head>

      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  );
};

Page.defaultProps = {
  title: 'Crunch Accounting',
};

export default Page;
