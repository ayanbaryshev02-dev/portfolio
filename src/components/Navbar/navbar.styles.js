export const navbarStyles = {
  linesContainer: {
    position: 'fixed',
    right: '100px',
    top: 0,
    width: '135px',
    height: '100vh',
    zIndex: 999,
    pointerEvents: 'none',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    borderColor: 'divider',
  },


  container: {
    position: 'fixed',
    right: '100px',
    top: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingRight: 0.5,
    paddingTop: 4,
    paddingBottom: 4,
    zIndex: 1000,
  },


  logoPlaceholder: {
    height: '60px',
    marginBottom: '45px',
  },


  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },


  link: {
    fontSize: '16px',
    fontWeight: 400,
    color: 'text.secondary',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    textAlign: 'right',
    lineHeight: 'normal',

    '&:hover': {
      color: 'text.primary',
    },
  },


  activeLink: {
    color: 'primary.main',
  },


  footer: {
    marginTop: '300px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    
    '& .MuiTypography-root': {
      fontSize: '14px',
      fontWeight: 400,
      color: 'text.secondary',
      lineHeight: 'normal',
    },
    
    '& .MuiTypography-root:first-of-type': {
      marginBottom: '8px',
    },
  },
};