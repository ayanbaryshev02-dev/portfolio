import { Box, Typography } from '@mui/material';
import { speechBubbleStyles } from './speechBubble.styles';
import { useState, useEffect } from 'react';

export const SpeechBubble = ({ message, isLarge = false }) => {
  const [displayMessage, setDisplayMessage] = useState(message);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (message !== displayMessage) {
      setIsAnimating(true);

      const timer = setTimeout(() => {
        setDisplayMessage(message);
        setIsAnimating(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [message, displayMessage]);

  return (
    <Box
      sx={{
        ...(isLarge ? speechBubbleStyles.largeContainer : speechBubbleStyles.container),
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
      }}
    >
      <Typography 
        variant={isLarge ? 'h4' : 'bubble'} 
        sx={isLarge ? speechBubbleStyles.largeText : speechBubbleStyles.text}
      >
        {displayMessage}
      </Typography>
      <Box sx={isLarge ? speechBubbleStyles.largeTail : speechBubbleStyles.tail} />
    </Box>
  );
};