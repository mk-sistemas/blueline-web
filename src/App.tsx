import { ThemeProvider } from "styled-components";
import { globalMainTheme, GlobalStyle } from "./assets/css/global";
import { Home } from "@pages";

function App() {
  return (
    <ThemeProvider theme={globalMainTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
