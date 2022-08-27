import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  max-width: 1040px;

  margin: 0 auto;
  padding: 1.5em;
`;

export const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1.5em;
`;
