import styled, { css } from "styled-components";

const p = styled.p<{ center?: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  margin: 1rem;
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
  margin: 1rem;
  line-height: 1rem;
  @media (max-width: 420px) {
    font-size: 2rem;
  }
`;
const h2 = styled.h2`
  font-size: 5rem;
  font-weight: 900;
  margin: 1rem;
  line-height: 1rem;
  @media (max-width: 420px) {
    font-size: 1.9rem;
  }
`;
const h3 = styled.h3`
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1rem;
  @media (max-width: 420px) {
    font-size: 1.8rem;
  }
`;
const h4 = styled.h4`
  font-size: 4rem;
  font-weight: 900;
  margin: 1rem;
  line-height: 1rem;
  @media (max-width: 420px) {
    font-size: 1.6rem;
  }
`;
const h5 = styled.h5`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 1rem;
  line-height: 1rem;
  @media (max-width: 420px) {
    font-size: 1.55rem;
  }
`;
const h6 = styled.h6`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem;
  line-height: 1rem;
  @media (max-width: 420px) {
    font-size: 1.45rem;
  }
`;

export default { p, span, pre, h1, h2, h3, h4, h5, h6 };
