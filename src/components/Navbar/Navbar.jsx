import { Box, Typography, Fade } from '@mui/material';
import { navItems, footerInfo } from '../../data/navigation';
import { navbarStyles } from './navbar.styles';
import { useState, useEffect } from 'react';
import { SpeechBubble } from '../SpeechBubble/SpeechBubble';
import { useSpeechBubble } from '../../hooks/useSpeechBubble';
import { SECTION_IDS } from '../../utils/constants';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const currentMessage = useSpeechBubble(activeSection);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const showBubble = activeSection !== SECTION_IDS.CONTACT;

  return (
    <>
      <Box sx={navbarStyles.linesContainer} />
      <Box sx={navbarStyles.container}>
        <Box>
          <Box sx={navbarStyles.logoPlaceholder}>
            <Fade in={showBubble} timeout={300}>
              <Box sx={navbarStyles.bubbleWrapper}>
                {showBubble && (
                  <SpeechBubble message={currentMessage} show={showBubble} />
                )}
              </Box>
            </Fade>
            <Typography variant="logo" sx={navbarStyles.logo}>
              i'm Ayan.
            </Typography>
          </Box>

          <Box sx={navbarStyles.nav}>
            {navItems.map((item) => (
              <Typography
                key={item.id}
                variant="nav"
                onClick={() => handleScroll(item.id)}
                sx={{
                  ...navbarStyles.link,
                  ...(activeSection === item.id && navbarStyles.activeLink),
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={navbarStyles.footer}>
          <Typography variant="caption">{footerInfo.name}</Typography>
          {footerInfo.title.map((line, index) => (
            <Typography key={index} variant="caption">
              {line}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};
