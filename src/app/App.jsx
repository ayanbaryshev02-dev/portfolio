import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import { Skills } from '../sections/Skills/Skills';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Skills />
        <div>Portfolio</div>
      </ThemeProvider>
    </>
  );
}

export default App;
