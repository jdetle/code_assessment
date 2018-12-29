import styled, { css } from "styled-components";

const p = styled.p<{ center?: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`;
const span = styled.span``;
const pre = styled.pre``;
const h1 = styled.h1`
  font-size: 5.5rem;
  font-weight: 900;
  line-height: 1rem;
  @media (max-width: 420px) {
    font-size: 2rem;
  }
`;
const h2 = styled.h2``;
const h3 = styled.h3``;
const h4 = styled.h4``;
const h5 = styled.h5``;
const h6 = styled.h6``;

export default { p, span, pre, h1, h2, h3, h4, h5, h6 };
