import { Box, Typography } from '@mui/material';
import { contactMobileStyles } from './contactMobile.styles';
import { SpeechBubble } from '../../components/SpeechBubble/SpeechBubble';

export const ContactMobile = () => {
  return (
    <Box sx={contactMobileStyles.container}>
      {/* Bubble в центре */}
      <Box sx={contactMobileStyles.bubbleWrapper}>
        <SpeechBubble message="Let's Work Together !" isLarge show={true} />
      </Box>

      {/* Описание */}
      <Typography variant="caption" sx={contactMobileStyles.description}>
        I'm always interested in hearing about new projects and opportunities.
        <br />
        Feel free to reach out!
      </Typography>
    </Box>
  );
};
