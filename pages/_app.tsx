import React, { Fragment } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "@styles/global.scss";
import AuthProvider from "../src/contexts/authContext";
import NavBar from "@components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WashNow</title>
      </Head>
      <AuthProvider>
        {/* <NavBar /> */}
        <Component {...pageProps} />
      </AuthProvider>
    </Fragment>
  );
}

export default MyApp;
