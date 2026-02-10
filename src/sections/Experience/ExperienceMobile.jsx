import { Box, Typography } from '@mui/material';
import { experience } from '../../data/experience';
import { TimelineItemMobile } from '../../components/TimelineItem/TimelineItemMobile';
import { experienceMobileStyles } from './experienceMobile.styles';

export const ExperienceMobile = () => {
  return (
    <Box sx={experienceMobileStyles.container}>
      <Typography variant="mobileHeader" sx={experienceMobileStyles.header}>
        experience
      </Typography>
      <Box sx={experienceMobileStyles.timeline}>
        {experience.map((item, index) => (
          <TimelineItemMobile
            key={item.id}
            year={item.year}
            title={item.title}
            description={item.description}
            isLast={index === experience.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};
