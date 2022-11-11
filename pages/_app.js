import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Head>
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/AlexZXu/new-fbla-app/master/public/favicon.ico" />
      </Head>
    </>
  )
  
}


export default MyApp;
