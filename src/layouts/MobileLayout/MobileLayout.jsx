import { Box, Typography } from '@mui/material';
import { mobileLayoutStyles } from './mobileLayout.styles';
import { SpeechBubble } from '../../components/SpeechBubble/SpeechBubble';
import { MobileNavbar } from '../../components/MobileNavbar/MobileNavbar';
import { footerInfo } from '../../data/navigation';
import { aboutMe } from '../../data/aboutMe';

export const MobileLayout = ({
  children,
  currentSection,
  currentMessage,
  onNavigate,
}) => {
  const showNavbarBubble = currentSection !== 'contact';
  return (
    <Box sx={mobileLayoutStyles.container}>
      <Box sx={mobileLayoutStyles.topLeft}>
        <Typography variant="mobileInfo">{footerInfo.name}</Typography>
        <Typography variant="mobileInfo">{footerInfo.title[0]}</Typography>
        <Typography variant="mobileInfo">{footerInfo.title[1]}</Typography>
        <Typography variant="mobileInfo">{footerInfo.title[2]}</Typography>
      </Box>

      <Box sx={mobileLayoutStyles.topRight}>
        {showNavbarBubble && (
          <SpeechBubble message={currentMessage} show={showNavbarBubble} />
        )}
        <Typography variant="logo" sx={mobileLayoutStyles.logo}>
          i'm Ayan.
        </Typography>
      </Box>

      <Box sx={mobileLayoutStyles.content}>{children}</Box>

      <Box sx={mobileLayoutStyles.bottomLeft}>
        {aboutMe.icons.map((social, index) => {
          const { Icon, link } = social;
          return (
            <Box
              key={index}
              component="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={mobileLayoutStyles.socialIcon}
            >
              <Icon />
            </Box>
          );
        })}
      </Box>

      <Box sx={mobileLayoutStyles.bottomRight}>
        <MobileNavbar activeSection={currentSection} onNavigate={onNavigate} />
      </Box>
    </Box>
  );
};
