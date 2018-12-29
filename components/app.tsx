import { normalize } from "polished";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const StyledApp = styled.div`
  height: 100%;
  background-color: rgb(59, 65, 113, 1);
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
  overflow: hidden;
  margin: 0;
  height: 100%;
}
#__next {
  height: 100%;
}
#background {
  font-size: 20rem;
  font-weight: 900;
  color: rgba(5,5,5,0.2);
  text-align: center;
  z-index: 0;
  margin-top: 2rem;
  padding: 0;
  overflow: hidden;
  @media (max-width: 420px) { 
    font-size: 4rem;
    top: 15rem;
    left: -10rem;
  }
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
