import styled from "styled-components";
import StyledFooter from "./footer";
import StyledHeader from "./header";
import T from "./typography";
import Head from "next/head";
import Link from "next/link";

const Layout = styled.div`
  flex: 1 1 10rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  header {
    position: fixed;
    top: 0;
    height: 10%;
    width: 100%;
  }
  nav {
    font-size: 2rem;
    font-weight: 500;

    @media (max-width: 420px) {
      font-size: 1rem;
    }
  }
  footer {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 10%;
    flex: 0 1 2rem;
  }
`;

export default ({ children, title = "Buzzwords Of IoT" }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <StyledHeader
      aria-label="Header containing links to Home, buzzwords, and about page"
      tabIndex={0}
    >
      <nav role="navigation">
        <Link href="/">
          <T.a aria-label={"Link to the home page"} tabIndex={0}>
            Home
          </T.a>
        </Link>
        <span>{" // "}</span>
        <Link href="/words_list">
          <T.a aria-label={"Link to the buzzword page"} tabIndex={0}>
            Buzzwords
          </T.a>
        </Link>
        {/*
        <span>{" // "}</span>
        <Link href="/about">
          <T.a aria-label={"Link to the about button"} tabIndex={0}>
            About
          </T.a>
        </Link>
        */}
      </nav>
    </StyledHeader>
    <div style={{ height: "100%" }}>{children}</div>
    <StyledFooter role="contentinfo">
      {"All rights reserved: John Detlefs 2018"}
    </StyledFooter>
  </Layout>
);
