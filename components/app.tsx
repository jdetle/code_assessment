import { normalize } from "polished";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const StyledApp = styled.div`
  height: 100%;
  background-color: rgb(59, 65, 113);
  color: white;
  overflow-x: hidden;
  video,
  img {
    display: block;
    max-width: 100%;
  }
`;

/**
 * Reset our styles
 */
const GlobalStyles = createGlobalStyle`
${normalize()};
*{
box-sizing: border-box;
}
html, body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  height: 100%;
}
#__next {
  height: 100%;
}
`;

const App = props => {
  return (
    <>
      <GlobalStyles />
      <StyledApp {...props}>{props.children}</StyledApp>
    </>
  );
};

export { App, StyledApp };
