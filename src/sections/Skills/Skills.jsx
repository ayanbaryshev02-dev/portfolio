import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { SkillCard } from '../../components/SkillCard/SkillCard';
import { skills } from '../../data/skills';
import { DecorativeLines } from '../../components/DecorativeLines/DecorativeLines';

export const Skills = () => {
  return (
    <Box component="section" id="skills" sx={{ py: 8, position: 'relative' }}>
      <DecorativeLines showDivider />
      <Container>
        <Typography
          variant="h1"
          sx={{
            mb: 6,
            textAlign: 'left',
          }}
        >
          skills & technologies
        </Typography>

        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid item xs={6} sm={6} md={3} key={skill.id}>
              <SkillCard name={skill.name} Icon={skill.Icon} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
