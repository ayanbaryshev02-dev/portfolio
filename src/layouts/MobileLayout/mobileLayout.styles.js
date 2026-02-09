export const mobileLayoutStyles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: 'background.default',
  },

  // Верхний левый - Имя и должность
  topLeft: {
    position: 'fixed',
    top: 16,
    left: 32, // ← маржин 32px
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
    zIndex: 100,

    '& .MuiTypography-root': {
      fontSize: '12px',
      fontWeight: 300,
      color: 'text.secondary',
      lineHeight: 'normal',
    },
  },

  // Верхний правый - Logo + Bubble
  topRight: {
    position: 'fixed',
    top: 16,
    right: 32, // ← маржин 32px
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '32px', // ← расстояние между bubble и лого 32px
    zIndex: 100,
  },

  logo: {
    fontSize: '32px',
    fontWeight: 400,
    color: 'text.primary',
  },

  // Контент по центру
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  // Нижний левый - Соцсети
  bottomLeft: {
    position: 'fixed',
    bottom: '150px', // ← маржин снизу 150px
    left: 32, // ← маржин 32px
    display: 'flex',
    flexDirection: 'column',
    gap: '16px', // ← расстояние между иконками 16px
    zIndex: 100,
  },

  socialIcon: {
    width: 36,
    height: 36,
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
  },
};