import { Box } from '@mui/material';
import { SpeechBubble } from '../SpeechBubble/SpeechBubble';
import { loadingScreenStyles } from './loadingScreen.styles';
import { useState, useEffect } from 'react';
import { getGreeting } from '../../utils/getGreeting';

export const LoadingScreen = ({ onLoadingComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);

    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <Box sx={loadingScreenStyles.container}>
      <SpeechBubble message={getGreeting()} isLarge show={show} />
    </Box>
  );
};
