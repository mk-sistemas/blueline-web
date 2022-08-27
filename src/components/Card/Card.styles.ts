import styled from "styled-components";
import { ColorStrings } from "./Card";

interface StyleHeadingProps {
  color: ColorStrings;
}

export const StyledDiv = styled.div`
  cursor: pointer;
`;

export const StyledHeading = styled.span<StyleHeadingProps>`
  display: block;
  width: 100%;
  margin: 0.5em 0;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme, color }) => theme.colors[color]};
`;
export const StyledContent = styled(StyledHeading)`
  font-family: ${({ theme }) => theme.fontFace.paragraph}, sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
`;
