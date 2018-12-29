import styled, { css } from "styled-components";

export const ol = styled.ol`
  overflow: hidden;
  overflow-y: scroll;
  padding: 0;
  height: 50rem;
  @media (max-width: 420px) {
    height: 30rem;
  }
`;
export const li = styled.li`
  margin-bottom: 0.4rem;
  font-size: 3rem;
  font-weight: 900;
  @media (max-width: 420px) {
    font-size: 2rem;
  }
  :hover {
    color: red;
  }
  :active {
    color: red;
  }
  :focus {
    color: red;
  }
`;
export default { ol, li };
