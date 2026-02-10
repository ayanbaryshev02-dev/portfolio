import { Box, Typography } from '@mui/material';
import { projects } from '../../data/projects';
import { ProjectCardMobile } from '../../components/ProjectCard/ProjectCardMobile';
import { workMobileStyles } from './workMobile.styles';

export const WorkMobile = () => {
  return (
    <Box sx={workMobileStyles.container}>
      <Typography variant="mobileHeader" sx={workMobileStyles.header}>
        work
      </Typography>
      <Box sx={workMobileStyles.list}>
        {projects.map((project) => (
          <ProjectCardMobile key={project.id} {...project} />
        ))}
      </Box>
    </Box>
  );
};
