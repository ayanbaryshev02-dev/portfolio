export const timelineItemStyles = {
  container: {
    position: 'relative',
    pb: { xs: 4, md: 6 },
    pl: { xs: 4, md: 6 },
  },
  dot: {
    position: 'absolute',
    left: 0,
    top: '6px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'primary.main',
    borderColor: 'background.paper',
  },
  line: {
    position: 'absolute',
    left: '5.5px',
    top: '18px',
    bottom: '-8px',
    height: '350px',
    width: '2px',
    backgroundColor: 'primary.main',
  },
  year: {
    mb: 1,
    color: 'text.primary',
    fontWeight: 600,
  },
  title: {
    mb: 1,
    color: 'primary.main',
  },
  description: {
    color: 'text.secondary',
    lineHeight: 1.7,
  },
};
