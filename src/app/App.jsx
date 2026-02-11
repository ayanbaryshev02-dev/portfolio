import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Box, Fade } from '@mui/material';
import { theme } from './styles/theme';
import { useApp } from '../hooks';
import { LoadingScreen } from '../components';
import { DesktopApp, MobileApp } from './components';

function App() {
  const {
    isLoading,
    currentSection,
    isMobile,
    currentMessage,
    handleLoadingComplete,
    handleNavigate,
  } = useApp();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <Fade in={!isLoading} timeout={800}>
        <Box>
          {isMobile ? (
            <MobileApp
              currentSection={currentSection}
              currentMessage={currentMessage}
              onNavigate={handleNavigate}
            />
          ) : (
            <DesktopApp />
          )}
        </Box>
      </Fade>
    </ThemeProvider>
  );
}

export default App;
