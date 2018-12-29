import styled, { css } from "styled-components";
export default styled.a<{ primary?: boolean; xl?: boolean }>`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 0.2rem solid white;
  text-decoration: none;
  ${props =>
    props.primary &&
    css`
      background: white;
      color: palevioletred;
    `}
  ${props =>
    props.xl &&
    css`
      width: 22rem;
      height: 10rem;
      font-size: 3.5rem;
      text-align: center;
      font-weight: 900;
      border-radius: 2rem;
    `}
`;
