import styled, { css } from "styled-components";
export default styled.div<{
  center?: boolean;
  left?: boolean;
  right?: boolean;
}>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
