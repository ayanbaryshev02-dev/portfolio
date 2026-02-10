import { Box, Typography } from '@mui/material';
import { aboutMe } from '../../data/aboutMe';
import { aboutMobileStyles } from './aboutMobile.styles';

export const AboutMobile = () => {
  return (
    <Box sx={aboutMobileStyles.container}>
      <Typography variant="mobileHeader" sx={aboutMobileStyles.header}>
        about me
      </Typography>

      <Typography variant="body2" sx={aboutMobileStyles.mainText}>
        I'm a{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          frontend developer
        </Box>{' '}
        focused on clean, responsive, and user-friendly interfaces.
      </Typography>

      <Typography variant="caption" sx={aboutMobileStyles.description}>
        My current stack includes{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          React, Redux Toolkit, Tailwind CSS, and SCSS
        </Box>
        . I actively work with{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          REST APIs
        </Box>{' '}
        and continuously improve my skills by learning new tools and best
        practices.
      </Typography>
    </Box>
  );
};
