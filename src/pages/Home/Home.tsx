import { StyledTitle, StyledMain } from "./Home.styles";

import { Summary } from "@components";

export const Home = () => {
  return (
    <StyledMain>
      <StyledTitle>BlueLine v1.0.0</StyledTitle>
      <Summary />
    </StyledMain>
  );
};
