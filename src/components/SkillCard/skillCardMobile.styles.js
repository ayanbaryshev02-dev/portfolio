export const skillCardMobileStyles = {
  card: {
    position: 'relative',
    textAlign: 'left',
    padding: 0,
    borderRadius: 0.5,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
    cursor: 'default',
    height: '72px',
    width: '78px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    overflow: 'hidden',

    '&:hover': {
      transform: 'translateY(-1px)',
      borderColor: 'primary.main',
      boxShadow: 'none',
    },
  },

  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
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
      opacity: 0.8,
    },

    '&:hover svg': {
      transform: 'scale(1.05)',
    },
  },

  content: {
    position: 'relative',
    zIndex: 1,
    padding: '6px !important',
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
  },

  text: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.2,
    color: 'text.primary',
  },
};
