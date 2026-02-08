import { COLORS } from '../../utils/constants';

export const experienceStyles = {
  section: {
    py: { xs: 6, md: 8 },
    minHeight: '100vh',
    backgroundColor: 'background.default',
  },
  heading: {
    mb: { xs: 4, md: 6 },
    textAlign: 'left',
    color: COLORS.textLines,
  },
  timeline: {
    position: 'relative',
    maxWidth: '900px',
    alignItems: 'flex-start',
  },
};
