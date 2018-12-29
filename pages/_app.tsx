import App, { Container } from "next/app";
import React from "react";
import { WindowSize } from "react-fns";
import { App as AppWrapper } from "../components/app";
import Layout from "../components/layout";

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <AppWrapper>
        <Container>
          <WindowSize>
            {size => (
              <Layout>
                <Component
                  {...pageProps}
                  size={size.width > 0 ? { ...size } : null}
                />
              </Layout>
            )}
          </WindowSize>
        </Container>
      </AppWrapper>
    );
  }
}

export default MyApp;
