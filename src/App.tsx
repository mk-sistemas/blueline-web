import { ThemeProvider } from "styled-components";
import { globalMainTheme, GlobalStyle } from "./assets/css/global";

function App() {
  return (
    <ThemeProvider theme={globalMainTheme}>
      <span>Running...</span>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
