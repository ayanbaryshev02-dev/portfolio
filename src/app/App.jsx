import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import { Skills } from '../sections/Skills/Skills';
import { About } from '../sections/About/About';
import { Experience } from '../sections/Experience/Experience';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <About />
        <Skills />
        <Experience />
      </ThemeProvider>
    </>
  );
}

export default App;
