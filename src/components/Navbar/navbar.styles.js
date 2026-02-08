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
    marginBottom: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    position: 'relative',
  },

  bubbleWrapper: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },

  logo: {
    marginTop: '52px', // Отступ сверху, чтобы лого было на постоянном месте
  },

  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  link: {
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
      color: 'text.secondary',
      lineHeight: 'normal',
    },

    '& .MuiTypography-root:first-of-type': {
      marginBottom: '8px',
    },
  },
};