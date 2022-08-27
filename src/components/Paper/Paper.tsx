import { ReactNode } from "react";
import { StyledDiv } from "./Paper.styles";

type PaperProps = {
  children: ReactNode;
};

export const Paper = ({ children }: PaperProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};
