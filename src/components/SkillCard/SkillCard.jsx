import { Card, CardContent, Typography, Box } from '@mui/material';
import { skillCardStyles } from './skillCard.styles';

export const SkillCard = ({ name, Icon }) => {
  return (
    <Card sx={skillCardStyles.card}>
      <Box sx={skillCardStyles.iconContainer}>
        <Icon />
      </Box>
      <CardContent sx={{ position: 'relative', zIndex: 1, padding: 0 }}>
        <Typography variant="h5">{name}</Typography>
      </CardContent>
    </Card>
  );
};
