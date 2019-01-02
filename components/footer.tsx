import styled from "styled-components";

export default styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  font-size: 0.5rem;
  padding-right: 2rem;
  @media (max-width: 420px) {
    display: none;
  }
`;
