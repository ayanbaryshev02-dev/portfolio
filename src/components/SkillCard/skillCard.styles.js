export const skillCardStyles = {
  card: {
    textAlign: 'left',
    padding: 2,
    borderRadius: 0.5,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
    cursor: 'default',
    height: '215px',
    width: '230px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    overflow: 'hidden',
    position: 'relative',

    '&:hover': {
      transform: 'translateY(-1px)',
      borderColor: 'primary.main',
      boxShadow: 'none',
    },
  },

  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 50,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,

    '& svg': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.3s ease',
    },

    '&:hover svg': {
      transform: 'scale(1.05)',
    },
  },
};
