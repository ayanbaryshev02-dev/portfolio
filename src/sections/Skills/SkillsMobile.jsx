import { Box, Typography, Grid } from '@mui/material';
import { skills } from '../../data/skills';
import { SkillCardMobile } from '../../components/SkillCard/SkillCardMobile';
import { skillsMobileStyles } from './skillsMobile.styles';

export const SkillsMobile = () => {
  return (
    <Box sx={skillsMobileStyles.container}>
      <Typography variant="mobileHeader" sx={skillsMobileStyles.header}>
        skills & technologies
      </Typography>
      <Grid container spacing={0} sx={skillsMobileStyles.grid}>
        {skills.map((skill) => (
          <Grid 
            item 
            key={skill.id}
            sx={skillsMobileStyles.gridItem}
          >
            <SkillCardMobile name={skill.name} Icon={skill.Icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};