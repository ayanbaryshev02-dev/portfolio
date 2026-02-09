import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Box, Fade, useMediaQuery } from '@mui/material';
import { theme } from './styles/theme';
import { Skills } from '../sections/Skills/Skills';
import { About } from '../sections/About/About';
import { Experience } from '../sections/Experience/Experience';
import { Navbar } from '../components/Navbar/Navbar';
import { Work } from '../sections/Work/Work';
import { Contact } from '../sections/Contact/Contact';
import { LoadingScreen } from '../components/LoadingScreen/LoadingScreen';
import { useState } from 'react';
import { MobileLayout } from '../layouts/MobileLayout/MobileLayout';
import { AboutMobile } from '../sections/About/AboutMobile';
import { useSpeechBubble } from '../hooks/useSpeechBubble';
import { SkillsMobile } from '../sections/Skills/SkillsMobile';
import { WorkMobile } from '../sections/Work/WorkMobile';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('about');
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
   const currentMessage = useSpeechBubble(currentSection);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleNavigate = (sectionId) => {
    setCurrentSection(sectionId);
  };

  const renderMobileSection = () => {
    switch (currentSection) {
      case 'about':
        return <AboutMobile />;
      case 'skills':
        return <SkillsMobile />; 
      case 'work':
        return <WorkMobile />;
      default:
        return <AboutMobile />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Fade in={!isLoading} timeout={800}>
        <Box>
           {isMobile ? (
            // МОБИЛЬНАЯ ВЕРСИЯ
             <MobileLayout
              currentSection={currentSection}
              currentMessage={currentMessage}
              onNavigate={handleNavigate}
            >
              {renderMobileSection()}
            </MobileLayout>
          ) : (
            // ДЕСКТОПНАЯ ВЕРСИЯ
            <>
          <Box sx={{ marginRight: '235px' }}>
            <About />
            <Skills />
            <Work />
            <Experience />
            <Contact />
          </Box>
          <Navbar />
          </>
          )}
        </Box>
      </Fade>
    </ThemeProvider>
  );
}

export default App;
