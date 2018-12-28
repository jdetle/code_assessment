import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { StyledHtml, Layout } from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
type DocumentContext = { renderPage: Function };
export default class MyDocument extends Document<{ styleTags: Object }> {
  static getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <StyledHtml lang="en">
        <Head>
          {this.props.styleTags}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <body>
          <Layout>
            <Header />
            <Main />
            <Footer />
          </Layout>
          <NextScript />
        </body>
      </StyledHtml>
    );
  }
}
