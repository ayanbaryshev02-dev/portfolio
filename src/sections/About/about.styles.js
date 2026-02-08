export const aboutStyles = {
  section: {
    py: 8,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },

  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '125px',
    flexDirection: { xs: 'column', md: 'row' },
  },

  imageContainer: {
    flexShrink: 0,
    width: { xs: '100%', md: '350px' },
  },

  image: {
    width: '400px',
    height: '400px',
    display: 'block',
  },

  content: {
    flex: 1,
    ml: 4,
  },

  mainText: {
    mb: 3,
    pr: 10,
  },

  description: {
    mb: 4,
    lineHeight: 1.6,
    pr: 4,
  },

  socialLinks: {
    display: 'flex',
    gap: 2,
    mt: 4,
  },

  socialIcon: {
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    textDecoration: 'none',
    transition: 'all 0.3s ease',

    '&:hover': {
      border: '1px solid',
      color: 'text.primary',
      borderColor: 'primary.main',
      transform: 'translateY(-2px)',
      color: '#fff',
    },

    '& svg': {
      width: 22,
      height: 22,
    },
  },
};
