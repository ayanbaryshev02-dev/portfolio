export const contactStyles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    py: 8,
    position: 'relative',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: 4,
  },

  description: {
    color: 'text.primary',
    maxWidth: '600px',
  },

  socialLinks: {
    display: 'flex',
    gap: 2,
    mt: 2,
  },

  socialIcon: {
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider',
    color: 'text.primary',
    textDecoration: 'none',
    transition: 'all 0.3s ease',

    '&:hover': {
      backgroundColor: 'primary.main',
      borderColor: 'primary.main',
      transform: 'translateY(-3px)',
    },

    '& svg': {
      width: 22,
      height: 22,
    },
  },

  footer: {
    position: 'absolute',
    bottom: 32,
    right: 132,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 0.5,

    '& .MuiTypography-root': {
      color: 'text.secondary',
    },
  },
};