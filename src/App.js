import { GlobalStyles } from "./core/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import Flashcards from "./features/Flashcards";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Flashcards />
    </ThemeProvider>
  );
}

export default App;
