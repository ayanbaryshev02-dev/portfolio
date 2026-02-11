import { Box } from '@mui/material';
import { DecorativeLines } from '../../components/DecorativeLines/DecorativeLines';
import { Navbar } from '../../components/Navbar/Navbar';
import { About } from '../../sections/About/About';
import { Skills } from '../../sections/Skills/Skills';
import { Work } from '../../sections/Work/Work';
import { Experience } from '../../sections/Experience/Experience';
import { Contact } from '../../sections/Contact/Contact';

export const DesktopApp = () => (
  <>
    <DecorativeLines />

    <Box sx={{ marginRight: '235px' }}>
      <About />
      <Skills />
      <Work />
      <Experience />
      <Contact />
    </Box>

    <Navbar />
  </>
);
