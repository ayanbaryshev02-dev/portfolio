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
    top: 62,
    left: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
    zIndex: 100,
     justifyContent: 'flex-end', 
  height: '80px',

   '@media (max-height: 700px)': {
      top: 62, 
      height: '60px',
    },

    '@media (max-height: 600px)': {
      top: 32,
      height: '60px',
    },

    '& .MuiTypography-root': {
      fontSize: '12px',
      fontWeight: 300,
      color: 'text.secondary',
      lineHeight: 'normal',

      '@media (max-height: 600px)': {
        fontSize: '10px', 
      },
    },
  },


  topRight: {
    position: 'fixed',
    top: 62,
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
      height: '60px',
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
    top: '50%',
    width: '100%',
    height: '100%',
    display: 'flex',
    top: 62,
    alignItems: 'flex-start',
    justifyContent: 'center',

    '@media (max-height: 700px)': {
      padding: '0 0px',
     top: 44,
    },

    '@media (max-height: 600px)': {
      padding: '0 0px',
      top: 32,
    },
  },


  bottomLeft: {
    position: 'fixed',
    bottom: '150px', 
    left: 32, 
    display: 'flex',
    flexDirection: 'column',
    gap: '16px', 
    zIndex: 100,

     '@media (max-height: 700px)': {
      bottom: '100px', 
      gap: '12px',
    },

    '@media (max-height: 600px)': {
      bottom: '80px',
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
    bottom: '150px', 
    right: 32, 
    zIndex: 100,

     '@media (max-height: 700px)': {
      bottom: '100px',
    },

    '@media (max-height: 600px)': {
      bottom: '80px',
    },
  },
};