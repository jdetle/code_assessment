import styled, { css } from "styled-components";

const p = styled.p<{ center?: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  margin: 2rem;
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`;
const a = styled.a<{ small?: boolean }>`
  :hover,
  :active,
  :focus {
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
`;
const span = styled.span`
  display: inline-block;
`;
const pre = styled.pre``;
const h1 = styled.h1`
  margin: 0;
  font-size: 5.5rem;
  font-weight: 900;
  line-height: 5rem;
  @media (max-width: 420px) {
    font-size: 2rem;
  }
`;
const h2 = styled.h2`
  margin: 0;
  font-size: 5rem;
  font-weight: 900;
  line-height: 5rem;
  @media (max-width: 420px) {
    font-size: 1.9rem;
  }
`;
const h3 = styled.h3`
  margin: 0;
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 5rem;
  @media (max-width: 420px) {
    font-size: 1.8rem;
  }
`;
const h4 = styled.h4`
  margin: 0;
  font-size: 4rem;
  font-weight: 900;
  line-height: 5rem;
  @media (max-width: 420px) {
    font-size: 1.6rem;
  }
`;
const h5 = styled.h5`
  margin: 0;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 5rem;
  @media (max-width: 420px) {
    font-size: 1.55rem;
  }
`;
const h6 = styled.h6`
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  line-height: 5rem;
  @media (max-width: 420px) {
    font-size: 1.45rem;
  }
`;

export default { a, p, span, pre, h1, h2, h3, h4, h5, h6 };
