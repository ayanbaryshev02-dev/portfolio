export const aboutMobileStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingX: '32px',
    marginTop: '110px', 
  },

  header: {
    fontSize: '24px', 
    fontWeight: 100,
    color: 'textLines',
    marginBottom: '16px', 

    '@media (max-height: 700px)': {
      fontSize: '30px',
      marginBottom: '12px',
    },

    '@media (max-height: 600px)': {
      fontSize: '30px',
      marginBottom: '10px',
    },
  },

  mainText: {
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: 1.4,
    marginBottom: 2,
    color: 'text.primary',

     '@media (max-height: 700px)': {
      fontSize: '20px',
      marginBottom: 1.5,
    },

    '@media (max-height: 600px)': {
      fontSize: '20px',
      marginBottom: 1,
    },
  },

  description: {
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: 1.4,
    color: 'text.primary',

    '@media (max-height: 700px)': {
      fontSize: '14px',
    },

    '@media (max-height: 600px)': {
      fontSize: '12px',
      lineHeight: 1.3,
    },
  },
};