import { Box, Typography } from '@mui/material';
import { timelineItemStyles } from './timelineItem.styles';

export const TimelineItem = ({ year, title, description, isLast }) => {
  return (
    <Box sx={timelineItemStyles.container}>
      <Box sx={timelineItemStyles.dot} />
      {!isLast && <Box sx={timelineItemStyles.line} />}
      <Typography variant="body2" sx={timelineItemStyles.year}>
        {year}
      </Typography>
      <Typography variant="h5" sx={timelineItemStyles.title}>
        {title}
      </Typography>
      <Typography variant="h6" sx={timelineItemStyles.description}>
        {description}
      </Typography>
    </Box>
  );
};
