import { Box, Container, Typography } from '@mui/material';
import { experience } from '../../data/experience';
import { experienceStyles } from './experience.styles';
import { TimelineItem } from '../../components/TimelineItem/TimelineItem';

export const Experience = () => {
  return (
    <Box component="section" sx={experienceStyles.section}>
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
