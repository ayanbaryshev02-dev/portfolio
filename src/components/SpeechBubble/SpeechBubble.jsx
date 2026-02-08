import { Box, Typography } from '@mui/material';
import { speechBubbleStyles } from './speechBubble.styles';
import { useState, useEffect } from 'react';

export const SpeechBubble = ({ message }) => {
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
        ...speechBubbleStyles.container,
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
      }}
    >
      <Typography variant="bubble" sx={speechBubbleStyles.text}>
        {displayMessage}
      </Typography>
      <Box sx={speechBubbleStyles.tail} />
    </Box>
  );
};
