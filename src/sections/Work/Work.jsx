import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import { workStyles } from './work.styles';

export const Work = () => {
  return (
    <Box component="section" id="work" sx={workStyles.section}>
      <Container>
        <Typography variant="h1" sx={workStyles.title}>
          work
        </Typography>

        <Grid container spacing={2.5}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
