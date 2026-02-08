import { Box, Container, Typography, Fade } from '@mui/material';
import { contactStyles } from './contact.styles';
import { aboutMe } from '../../data/aboutMe';
import { SpeechBubble } from '../../components/SpeechBubble/SpeechBubble';
import { useState, useEffect } from 'react';

export const Contact = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Большой bubble появляется после исчезновения маленького
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 400); // 300ms (fade out navbar) + 100ms задержка

    return () => clearTimeout(timer);
  }, []);

  // При выходе из секции скрываем bubble
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isInView && showBubble) {
          setShowBubble(false);
        } else if (isInView && !showBubble) {
          setTimeout(() => setShowBubble(true), 400);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBubble]);

  return (
    <Box component="section" id="contact" sx={contactStyles.section}>
      <Container>
        <Box sx={contactStyles.content}>
          <Fade in={showBubble} timeout={500}>
            <Box>
              <SpeechBubble message="Let's Work Together !" isLarge />
            </Box>
          </Fade>

          <Typography variant="subtitle1" sx={contactStyles.description}>
            I'm always interested in hearing about new projects and opportunities.
            <br />
            Feel free to reach out!
          </Typography>

          <Box sx={contactStyles.socialLinks}>
            {aboutMe.icons.map((social, index) => {
              const { Icon, link } = social;
              return (
                <Box
                  key={index}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={contactStyles.socialIcon}
                >
                  <Icon />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};