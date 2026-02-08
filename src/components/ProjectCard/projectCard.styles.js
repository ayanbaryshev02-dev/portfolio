export const projectCardStyles = {
  card: {
    position: 'relative',
    height: '450px',
    width: '325px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 0.5,
    backgroundColor: 'background.default',
    boxShadow: 'none',
    overflow: 'hidden',
    transition: 'all 0.3s ease',

    '&:hover': {
      transform: 'translateY(-1px)',
      borderColor: 'primary.main',
    },

    '&:hover .mockup svg': {
      transform: 'scale(1.55)',
    },
  },

  mockupBackground: {
    position: 'absolute',
    bottom: -150,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 0,
    pointerEvents: 'none',

    '& svg': {
      width: '900px',
      height: '400px',
      transform: 'scale(1.5)',
      transition: 'all 0.3s ease',
    },
  },

  content: {
    position: 'relative',
    zIndex: 1,
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  title: {
    mb: 3,
  },
  description: {
    lineHeight: 1.3,
    mb: 2,
  },

  tags: {
    display: 'flex',
    gap: 1,
    flexWrap: 'wrap',
  },

  tag: {
    fontSize: '10px',
    fontWeight: 400,
    height: 24,
    backgroundColor: 'primary.light',
    color: 'text.secondary',
    border: 'none',
    borderRadius: 2,

    '& .MuiChip-label': {
      padding: '0 8px',
    },
  },

  buttons: {
    display: 'flex',
    gap: 2,
    mt: 'auto',
  },

  demoButton: {
    flex: 1,
    backgroundColor: 'primary.main',
    color: 'primary.light',
    textTransform: 'lowercase',
    fontSize: '14px',
    fontWeight: 400,
    borderRadius: 1,
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: 0.9,
      boxShadow: 'none',
    },
  },

  githubButton: {
    flex: 1,
    backgroundColor: 'text.primary',
    color: 'primary.light',
    textTransform: 'lowercase',
    fontWeight: 400,
    borderRadius: 1,
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: 'text.primary',
      opacity: 0.9,
      boxShadow: 'none',
    },
  },
};
