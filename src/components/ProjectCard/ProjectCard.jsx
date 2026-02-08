import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
} from '@mui/material';
import { projectCardStyles } from './projectCard.styles';

export const ProjectCard = ({
  title,
  description,
  tags,
  image: ImageComponent,
  demoUrl,
  githubUrl,
}) => {
  return (
    <Card sx={projectCardStyles.card}>
      <Box className="mockup" sx={projectCardStyles.mockupBackground}>
        <ImageComponent />
      </Box>
      <CardContent sx={projectCardStyles.content}>
        <Typography variant="h5" sx={projectCardStyles.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={projectCardStyles.description}>
          {description}
        </Typography>
        <Box sx={projectCardStyles.tags}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} sx={projectCardStyles.tag} />
          ))}
        </Box>
        <Box sx={{ flex: 1 }} />
        <Box sx={projectCardStyles.buttons}>
          <Button
            variant="caption"
            href={demoUrl}
            target="_blank"
            sx={projectCardStyles.demoButton}
          >
            live demo
          </Button>
          <Button
            variant="caption"
            href={githubUrl}
            target="_blank"
            sx={projectCardStyles.githubButton}
          >
            git hub
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
