import styled, { css } from "styled-components";
export default styled.div<{
  center?: boolean;
  left?: boolean;
  halfSize?: boolean;
  right?: boolean;
  outline?: boolean;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
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
      width: 50%;
      height: 100%;
      @media (max-width: 420px) {
        width: 95%;
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
