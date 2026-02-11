import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { theme } from '../app/styles/theme';
import { useSpeechBubble } from './useSpeechBubble';

export const useApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('about');

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const currentMessage = useSpeechBubble(currentSection);

  const handleLoadingComplete = () => setIsLoading(false);
  const handleNavigate = (sectionId) => setCurrentSection(sectionId);

  return {
    isLoading,
    currentSection,
    isMobile,
    currentMessage,
    handleLoadingComplete,
    handleNavigate,
  };
};
