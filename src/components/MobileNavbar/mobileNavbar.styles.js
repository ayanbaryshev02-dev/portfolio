export const mobileNavbarStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', 
    alignItems: 'flex-end',
  },

  link: {
    fontSize: '16px',
    fontWeight: 400,
    color: 'text.secondary',
    cursor: 'pointer',
    textAlign: 'right',
    lineHeight: 'normal',
    transition: 'color 0.3s ease',

    '&:hover': {
      color: 'text.primary',
    },
  },

  activeLink: {
    color: 'text.primary', 
  },
};