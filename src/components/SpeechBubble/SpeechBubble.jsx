import { Box, Typography } from '@mui/material';
import { speechBubbleStyles } from './speechBubble.styles';
import { useState, useEffect } from 'react';

export const SpeechBubble = ({ message, isLarge = false, show = true }) => {
  const [displayMessage, setDisplayMessage] = useState(message);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [show]);

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
        ...(isLarge
          ? speechBubbleStyles.largeContainer
          : speechBubbleStyles.container),
        transform: isVisible && !isAnimating ? 'scale(1)' : 'scale(0)',
        opacity: isVisible && !isAnimating ? 1 : 0,
      }}
    >
      <Typography
        variant={isLarge ? 'h4' : 'bubble'}
        sx={isLarge ? speechBubbleStyles.largeText : speechBubbleStyles.text}
      >
        {displayMessage}
      </Typography>
      <Box
        sx={isLarge ? speechBubbleStyles.largeTail : speechBubbleStyles.tail}
      />
    </Box>
  );
};
