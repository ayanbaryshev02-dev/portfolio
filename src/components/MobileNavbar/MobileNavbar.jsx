import { Box, Typography } from '@mui/material';
import { mobileNavbarStyles } from './mobileNavbar.styles';
import { navItems } from '../../data/navigation';

export const MobileNavbar = ({ activeSection, onNavigate }) => {
  return (
    <Box sx={mobileNavbarStyles.container}>
      {navItems.map((item) => (
        <Typography
          key={item.id}
          variant="mobileNav"
          onClick={() => onNavigate(item.id)}
          sx={{
            ...mobileNavbarStyles.link,
            ...(activeSection === item.id && mobileNavbarStyles.activeLink),
          }}
        >
          {item.label}
        </Typography>
      ))}
    </Box>
  );
};
