import { ThemeProvider } from "styled-components";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./core/globalStyles";
import { theme } from "./core/theme";
import Navigation from "./features/Navigation";
import CreateFlashcards from "./features/Flashcards/pages/CreateFlashcards";
import PractiseFlashcards from "./features/Flashcards/pages/PractiseFlashcards";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/create-flashcards" element={<CreateFlashcards />} />
          <Route path="/practise" element={<PractiseFlashcards />} />
          <Route path="/" element={<Navigate to="/create-flashcards" />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
