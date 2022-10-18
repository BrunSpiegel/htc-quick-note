import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import { globalTheme } from "./styles/globalTheme";


function App() {

  return (
    <ThemeProvider theme={globalTheme}>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
