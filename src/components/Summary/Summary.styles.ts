import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
  }
`;
