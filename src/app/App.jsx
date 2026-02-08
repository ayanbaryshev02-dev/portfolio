import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Box, Fade } from '@mui/material';
import { theme } from './styles/theme';
import { Skills } from '../sections/Skills/Skills';
import { About } from '../sections/About/About';
import { Experience } from '../sections/Experience/Experience';
import { Navbar } from '../components/Navbar/Navbar';
import { Work } from '../sections/Work/Work';
import { Contact } from '../sections/Contact/Contact';
import { LoadingScreen } from '../components/LoadingScreen/LoadingScreen';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Fade in={!isLoading} timeout={800}>
        <Box>
          <Box sx={{ marginRight: '235px' }}>
            <About />
            <Skills />
            <Work />
            <Experience />
            <Contact />
          </Box>
          <Navbar />
        </Box>
      </Fade>
    </ThemeProvider>
  );
}

export default App;
