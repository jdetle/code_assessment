import styled, { css } from "styled-components";

export const ol = styled.ol`
  overflow-y: scroll;
  margin-left: 0.5rem;
  list-style-position: inside;
  height: 100%;
`;
export const ul = styled.ul`
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;
`;
export const li = styled.li`
  margin-bottom: 0.4rem;
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
  @media (max-width: 420px) {
    font-size: 2rem;
  }
  :hover,
  :active,
  :focus {
    color: red;
    cursor: pointer;
  }
`;
export default { ol, ul, li };
