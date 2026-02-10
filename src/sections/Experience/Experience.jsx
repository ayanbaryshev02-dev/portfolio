import { Box, Container, Typography } from '@mui/material';
import { experience } from '../../data/experience';
import { experienceStyles } from './experience.styles';
import { TimelineItem } from '../../components/TimelineItem/TimelineItem';
import { DecorativeLines } from '../../components/DecorativeLines/DecorativeLines';

export const Experience = () => {
  return (
    <Box component="section" id="experience" sx={experienceStyles.section}>
      <DecorativeLines showDivider />
      <Container>
        <Typography variant="h1" sx={experienceStyles.heading}>
          experience
        </Typography>
        <Box sx={experienceStyles.timeline}>
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              year={item.year}
              title={item.title}
              description={item.description}
              isLast={index === experience.length - 1}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
