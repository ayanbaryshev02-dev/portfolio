export const mobileLayoutStyles = {
  container: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: 'background.default',
    marginTop: '32px',
    paddingTop: '32px',
  },

  topLeft: {
    position: 'fixed',
    top: 40,
    left: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
    zIndex: 100,
    justifyContent: 'flex-end',
    height: '80px',

    '@media (max-height: 700px)': {
      top: 32,
      height: '60px',
    },

    '@media (max-height: 600px)': {
      top: 32,
      height: '60px',
      fontSize: '10px',
    },

    '& .MuiTypography-root': {
      fontSize: '12px',
      fontWeight: 300,
      color: 'text.secondary',
      lineHeight: 'normal',
    },
    '& .MuiTypography-root:first-of-type': {
    marginBottom: '8px', 
  },
     '& .MuiTypography-root:nth-child(n+2)': {
    lineHeight: 1.0, 
  },
  },

  topRight: {
    position: 'fixed',
    top: 40,
    right: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '6px',
    zIndex: 100,
    justifyContent: 'flex-end',
    height: '80px',

    '@media (max-height: 700px)': {
      top: 62,
      height: '32px',
      gap: '4px',
    },

    '@media (max-height: 600px)': {
      top: 32,
      height: '60px',
    },
  },

  logo: {
    fontSize: '32px',
    fontWeight: 400,
    color: 'text.primary',
    lineHeight: 1,
  },

  content: {
    position: 'fixed',
    top: '180px',
    bottom: '180px',
    width: 'calc(100% - 64px)',
    height: '100%',
    display: 'flex',
    top: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',

    '@media (max-height: 700px)': {
      padding: '0 0px',
      top: 28,
    },
    '@media (max-height: 650px)': {
      padding: '0 0px',
      top: 12,
    },
    '@media (max-height: 600px)': {
      padding: '0 0px',
      top: 32,
    },
  },

  bottomLeft: {
    position: 'fixed',
    bottom: '80px',
    left: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    zIndex: 100,

    '@media (max-height: 790px)': {
      bottom: '50px',
    },
    '@media (max-height: 745px)': {
      bottom: '40px',
    },
    '@media (max-height: 735px)': {
      bottom: '35px',
    },
    '@media (max-height: 715px)': {
      bottom: '25px',
    },

    '@media (max-height: 700px)': {
      bottom: '50px',
      gap: '12px',
    },

    '@media (max-height: 670px)': {
      bottom: '25px',
    },

    '@media (max-height: 645px)': {
      bottom: '15px',
    },
    '@media (max-height: 625px)': {
      bottom: '10px',
    },
    '@media (max-height: 600px)': {
      bottom: '30px',
      gap: '10px',
    },
  },

  socialIcon: {
    width: 15,
    height: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    transition: 'all 0.3s ease',

    '&:hover': {
      transform: 'scale(1.1)',
    },

    '& svg': {
      width: 20,
      height: 20,
    },
  },

  bottomRight: {
    position: 'fixed',
    bottom: '80px',
    right: 32,
    zIndex: 100,

    '@media (max-height: 790px)': {
      bottom: '50px',
    },
    '@media (max-height: 745px)': {
      bottom: '40px',
    },
    '@media (max-height: 735px)': {
      bottom: '35px',
    },
    '@media (max-height: 725px)': {
      bottom: '25px',
    },
    '@media (max-height: 715px)': {
      bottom: '15px',
    },
    '@media (max-height: 700px)': {
      bottom: '50px',
    },

    '@media (max-height: 670px)': {
      bottom: '25px',
    },

    '@media (max-height: 645px)': {
      bottom: '15px',
    },
    '@media (max-height: 625px)': {
      bottom: '10px',
    },
    '@media (max-height: 600px)': {
      bottom: '30px',
    },
  },
};
