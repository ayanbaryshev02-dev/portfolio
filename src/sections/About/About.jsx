import { Box, Container, Typography } from '@mui/material';
import { aboutMe } from '../../data/aboutMe';
import { aboutStyles } from './about.styles';

export const About = () => {
  return (
    <Box component="section" id="about" sx={aboutStyles.section}>
      <Container>
        <Box sx={aboutStyles.wrapper}>
          <Box sx={aboutStyles.imageContainer}>
            <Box
              component="img"
              src={aboutMe.profileImage}
              alt="Profile"
              sx={aboutStyles.image}
            />
          </Box>

          <Box sx={aboutStyles.content}>
            <Typography variant="body2" sx={aboutStyles.mainText}>
              I'm a{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                frontend developer
              </Box>{' '}
              focused on clean, responsive, and user-friendly interfaces.
            </Typography>

            <Typography variant="body1" sx={aboutStyles.description}>
              My current stack includes{' '}
              <Box
                component="span"
                sx={{ color: 'primary.main', fontWeight: 400 }}
              >
                React, TypeScript, Redux Toolkit, and Tailwind CSS
              </Box>
              . I actively work with{' '}
              <Box
                component="span"
                sx={{ color: 'primary.main', fontWeight: 400 }}
              >
                REST APIs
              </Box>{' '}
              and continuously improve my skills by learning new tools and best
              practices.
            </Typography>

            <Box sx={aboutStyles.socialLinks}>
              {aboutMe.icons.map((social, index) => {
                const { Icon, link } = social;
                return (
                  <Box
                    key={index}
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={aboutStyles.socialIcon}
                  >
                    <Icon />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
