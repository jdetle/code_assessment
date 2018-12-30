import styled, { css } from "styled-components";

export const ol = styled.ol`
  overflow: hidden;
  overflow-y: scroll;
  padding: 0;
  height: 100%;
`;
export const li = styled.li`
  margin-bottom: 0.4rem;
  font-size: 3rem;
  font-weight: 900;
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
export default { ol, li };
