import { Box, Typography } from '@mui/material';
import { timelineItemMobileStyles } from './timelineItemMobile.styles';

export const TimelineItemMobile = ({ year, title, description, isLast }) => {
  return (
    <Box sx={timelineItemMobileStyles.container}>
      <Box sx={timelineItemMobileStyles.dot} />
      {!isLast && <Box sx={timelineItemMobileStyles.line} />}
      <Box sx={timelineItemMobileStyles.content}>
        <Typography sx={timelineItemMobileStyles.year}>{year}</Typography>
        <Typography sx={timelineItemMobileStyles.title}>{title}</Typography>
        <Typography sx={timelineItemMobileStyles.description}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
