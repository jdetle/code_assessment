import styled, { css } from "styled-components";

export default styled.a<{ primary?: boolean; xl?: boolean }>`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 0rem 0;
  margin: 0.5rem 1rem;
  height: 4rem;
  font-size: 2rem;
  font-weight: 600;
  width: 11rem;
  background: transparent;
  color: white;
  border: 0.2rem solid white;
  text-decoration: none;
  z-index: 1;
  @media (max-width: 420px) {
    font-size: 1rem;
    height: 4rem;
  }

  :hover {
    cursor: pointer;
    color: #35e0ff;
    border: 0.2rem solid #35e0ff;
  }
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
      font-size: 3rem;
      text-align: center;
      font-weight: 900;
      border-radius: 2rem;
      @media (max-width: 420px) {
        font-size: 2rem;
        height: 6rem;
        width: 18rem;
      }
    `}
`;
