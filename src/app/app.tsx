import type { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import Head from 'next/head';
import MainLayout from './layouts/main-layout';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Museums</title>
      </Head>
      <Provider store={store}>
        <AppCacheProvider {...props}>
          <CssBaseline />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AppCacheProvider>
      </Provider>
    </>
  );
}
