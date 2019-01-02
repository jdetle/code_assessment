import styled, { css } from "styled-components";
export default styled.div<{
  center?: boolean;
  left?: boolean;
  halfSize?: boolean;
  right?: boolean;
  outline?: boolean;
  wrap?: "wrap";
  width?: string;
  direction: "row" | "column";
}>`
  display: flex;
  width: 100%;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  margin: 0.2rem;
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.left &&
    css`
      justify-content: flex-start;
    `}
  ${props =>
    props.center &&
    css`
      justify-content: center;
      align-items: center;
      align-content: center;
    `}
  ${props =>
    props.halfSize &&
    css`
      height: 100%;
      width: 45%;
      @media (max-width: 420px) {
        width: 100%;
      }
    `}
    ${props =>
      props.outline &&
      css`
        border: 0.2rem solid white;
        border-radius: 0.75rem;
        padding: 2rem;
      `}
`;
