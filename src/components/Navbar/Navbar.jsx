import { Box, Typography } from '@mui/material';
import { navItems, footerInfo } from '../../data/navigation';
import { navbarStyles } from './navbar.styles';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

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

  return (
    <>
      <Box sx={navbarStyles.linesContainer} />
      <Box sx={navbarStyles.container}>
        <Box>
          <Box sx={navbarStyles.logoPlaceholder}>
          </Box>

          <Box sx={navbarStyles.nav}>
            {navItems.map((item) => (
              <Typography
                key={item.id}
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
          <Typography>{footerInfo.name}</Typography>
          {footerInfo.title.map((line, index) => (
            <Typography key={index}>{line}</Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};