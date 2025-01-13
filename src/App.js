import { GlobalStyles } from "./core/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { Container } from "./common/Container";
import Navigation from "./features/Navigation";
import Flashcards from "./features/Flashcards";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      <Container>
        <Flashcards />
      </Container>
    </ThemeProvider>
  );
}

export default App;
