export const mobileNavbarStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', 
    alignItems: 'flex-end',
    marginTop: '20px',  
    paddingTop: '10px', 
    

    '@media (max-height: 700px)': {
      gap: '6px',
    },

    '@media (max-height: 600px)': {
      gap: '4px',
    },
  },

  link: {
    fontSize: '16px',
    fontWeight: 400,
    color: 'text.secondary',
    cursor: 'pointer',
    textAlign: 'right',
    lineHeight: 'normal',
    transition: 'color 0.3s ease',

    '@media (max-height: 700px)': {
      fontSize: '14px',
    },

    '@media (max-height: 600px)': {
      fontSize: '13px',
    },


    '&:hover': {
      color: 'text.primary',
    },
  },

  activeLink: {
    color: 'text.primary', 
  },
};