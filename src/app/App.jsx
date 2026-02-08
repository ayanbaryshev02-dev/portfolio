import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './styles/theme';
import { Skills } from '../sections/Skills/Skills';
import { About } from '../sections/About/About';
import { Experience } from '../sections/Experience/Experience';
import { Navbar } from '../components/Navbar/Navbar'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <Box sx={{ marginRight: '235px' }}>
        <About />
        <Skills />
        <Experience />
      </Box>
         <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
