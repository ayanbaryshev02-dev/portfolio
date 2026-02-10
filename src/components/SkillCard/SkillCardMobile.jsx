import { Card, CardContent, Typography, Box } from '@mui/material';
import { skillCardMobileStyles } from './skillCardMobile.styles';

export const SkillCardMobile = ({ name, Icon }) => {
  return (
    <Card sx={skillCardMobileStyles.card}>
      <Box sx={skillCardMobileStyles.iconContainer}>
        <Icon />
      </Box>

      <CardContent sx={skillCardMobileStyles.content}>
        <Typography variant="mobileTitle" sx={skillCardMobileStyles.text}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
