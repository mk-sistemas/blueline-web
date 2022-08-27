import { Paper } from "@components";
import styled from "styled-components";

type ColorStrings = "black" | "warning" | "danger" | "info" | "ok";

type CardProps = {
  title: string;
  information: string;
  type?: ColorStrings;
};

export const Card = ({ title, information, type = "black" }: CardProps) => {
  return (
    <Paper>
      <StyledDiv>
        <StyledHeading color="black">{title}</StyledHeading>
        <StyledContent color={type}>{information}</StyledContent>
      </StyledDiv>
    </Paper>
  );
};

const StyledDiv = styled.div`
  cursor: pointer;
`;

interface StyleHeadingProps {
  color: ColorStrings;
}

const StyledHeading = styled.span<StyleHeadingProps>`
  display: block;
  width: 100%;
  margin: 0.5em 0;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme, color }) => theme.colors[color]};
`;

const StyledContent = styled(StyledHeading)`
  font-family: ${({ theme }) => theme.fontFace.paragraph}, sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
`;
