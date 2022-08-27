import { Paper } from "@components";
import { StyledHeading, StyledContent, StyledDiv } from "./Card.styles";

export type ColorStrings = "black" | "warning" | "danger" | "info" | "ok";

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
