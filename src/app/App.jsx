import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './styles/theme';
import { Skills } from '../sections/Skills/Skills';
import { About } from '../sections/About/About';
import { Experience } from '../sections/Experience/Experience';
import { Navbar } from '../components/Navbar/Navbar';
import { Work } from '../sections/Work/Work';
import { Contact } from '../sections/Contact/Contact';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ marginRight: '235px' }}>
          <About />
          <Skills />
          <Work />
          <Experience />
          <Contact />
        </Box>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
