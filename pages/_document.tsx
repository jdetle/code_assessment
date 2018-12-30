import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document<{ styleTags: Object }> {
  public static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  public render() {
    return (
      <html lang="en" role="main">
        <Head>
          {this.props.styleTags}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta
            name="Description"
            content="A summary of the top 20 words in the internet of things."
          />
        </Head>
        <body tabIndex={0}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
