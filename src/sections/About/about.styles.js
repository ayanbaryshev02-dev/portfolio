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
    width: '100%',
    height: 'auto',
    display: 'block',
  },

  content: {
    flex: 1,
  },

  mainText: {
    mb: 3,
  },

  description: {
    mb: 4,
    color: 'text.secondary', 
    lineHeight: 1.8,
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
      color: '#fff',
    },

    '& svg': {
      width: 22,
      height: 22,
    },
  },
};