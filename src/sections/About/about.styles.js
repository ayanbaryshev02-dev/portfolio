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
    flexDirection: { xs: 'column', md: 'row' },
    gap: '125px',

    '@media (max-width: 1270px)': {
      gap: '80px',
    },
    '@media (max-width: 1100px)': {
      gap: '0px',
    },
    '@media (max-width: 1000px)': {
      gap: '0px',
    },
    '@media (max-width: 900px)': {
      gap: '0px',
    },
  },

  imageContainer: {
    flexShrink: 0,
    width: { xs: '100%', md: '350px' },
  },

  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    display: 'block',

    '@media (max-width: 1270px)': {
      maxWidth: '350px',
    },
    '@media (max-width: 1100px)': {
      maxWidth: '250px',
    },
  },

  content: {
    flex: 1,
    ml: { xs: 0, md: 0 },
  },

  mainText: {
    mb: 3,
    pr: { xs: 0, md: 4, lg: 10 },
    fontSize: { xs: '28px', sm: '32px', md: '36px' },

    '@media (max-width: 1270px)': {
      fontSize: '28px',
    },
    '@media (max-width: 1100px)': {
      fontSize: '24px',
    },
  },

  description: {
    mb: 4,
    lineHeight: 1.6,
    pr: { xs: 0, md: 2, lg: 4 },
    fontSize: { xs: '16px', sm: '18px', md: '20px' },

    '@media (max-width: 1270px)': {
      fontSize: '16px',
    },
    '@media (max-width: 1100px)': {
      fontSize: '14px',
    },
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
