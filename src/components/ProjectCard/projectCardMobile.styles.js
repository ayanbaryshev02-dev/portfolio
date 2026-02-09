export const projectCardMobileStyles = {
  card: {
    position: 'relative',
    height: '90px',
    width: 'auto', 
    display: 'flex',
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 0.5,
    backgroundColor: 'background.default',
    boxShadow: 'none',
    overflow: 'hidden',
    padding: 0,
    transition: 'all 0.3s ease',

    '&:hover': {
      transform: 'translateY(-1px)',
      borderColor: 'primary.main',
    },
  },


  titleSection: {
    width: 'auto',
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: '10px',
    paddingRight: '8px',
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    width: 50,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.2,
    color: 'text.primary',
    whiteSpace: 'wrap', 
  },

  descriptionSection: {
    flex: 1, 
    paddingTop: '13px',
    paddingBottom: '13px',
    paddingRight: '13px',
    display: 'flex',
    alignItems: 'center',
  },

  description: {
    fontSize: '10px',
    fontWeight: 300,
    lineHeight: 1.3,
    color: 'text.primary',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
  },


  buttonsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', 
    paddingRight: '13px', 
  },

  demoButton: {
    width: '60px',
    height: '30px',
    minWidth: '60px',
    minHeight: '30px',
    backgroundColor: 'primary.main',
    color: 'primary.light',
    textTransform: 'lowercase',
    fontSize: '10px',
    fontWeight: 400,
    borderRadius: 0.5,
    boxShadow: 'none',
    padding: 0,

    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: 0.9,
      boxShadow: 'none',
    },
  },

  githubButton: {
    width: '60px',
    height: '30px',
    minWidth: '60px',
    minHeight: '30px',
    backgroundColor: 'text.primary',
    color: 'primary.light',
    textTransform: 'lowercase',
    fontSize: '10px',
    fontWeight: 400,
    borderRadius: 0.5,
    boxShadow: 'none',
    padding: 0,

    '&:hover': {
      backgroundColor: 'text.primary',
      opacity: 0.9,
      boxShadow: 'none',
    },
  },
};