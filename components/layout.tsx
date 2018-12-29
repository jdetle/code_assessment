import styled from "styled-components";
import StyledFooter from "./footer";
import StyledHeader from "./header";

import Head from "next/head";
import Link from "next/link";

const StyledChildren = styled.div`
  margin: 2rem;
`;
const Layout = styled.div`
  flex: 1 1 10rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  header {
    height: 10%;
    width: 100%;
    flex: 0 1 2rem;
  }
  footer {
    height: 10%;
    flex: 0 1 2rem;
  }
  ${StyledChildren} {
    height: 80%;
    flex: 1 1 2rem;
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
      <nav>
        <Link href="/">
          <a aria-label={"Link to the home page"} tabIndex={0}>
            Home
          </a>
        </Link>{" "}
        <Link href="/words_list">
          <a aria-label={"Link to the buzzword page"} tabIndex={0}>
            Buzzwords
          </a>
        </Link>{" "}
        <Link href="/about">
          <a aria-label={"Link to the about button"} tabIndex={0}>
            About
          </a>
        </Link>
      </nav>
    </StyledHeader>
    <StyledChildren>{children}</StyledChildren>
    <StyledFooter>{"All rights reserved: John Detlefs 2018"}</StyledFooter>
  </Layout>
);
