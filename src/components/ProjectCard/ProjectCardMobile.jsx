import { Card, Typography, Box, Button } from '@mui/material';
import { projectCardMobileStyles } from './projectCardMobile.styles';

export const ProjectCardMobile = ({
  title,
  description,
  demoUrl,
  githubUrl,
  // image убираем - не нужен
}) => {
  return (
    <Card sx={projectCardMobileStyles.card}>
      {/* Название слева */}
      <Box sx={projectCardMobileStyles.titleSection}>
        <Typography sx={projectCardMobileStyles.title}>{title}</Typography>
      </Box>

      {/* Описание в центре */}
      <Box sx={projectCardMobileStyles.descriptionSection}>
        <Typography sx={projectCardMobileStyles.description}>
          {description}
        </Typography>
      </Box>

      {/* Кнопки справа */}
      <Box sx={projectCardMobileStyles.buttonsSection}>
        <Button
          variant="contained"
          href={demoUrl}
          target="_blank"
          sx={projectCardMobileStyles.demoButton}
        >
          live demo
        </Button>
        <Button
          variant="contained"
          href={githubUrl}
          target="_blank"
          sx={projectCardMobileStyles.githubButton}
        >
          git hub
        </Button>
      </Box>
    </Card>
  );
};
