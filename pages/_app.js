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
        <link rel="shortcut icon" href="/Favicon.ico" />
      </Head>
    </>
  )
  
}


export default MyApp;
