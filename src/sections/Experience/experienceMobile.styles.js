export const experienceMobileStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
     paddingLeft: '32px',
    paddingRight: '0px',
    marginTop: '110px',

  },

  header: {
    fontSize: '24px',
    fontWeight: 100,
    color: 'textLines',
    marginBottom: '16px',

    '@media (max-height: 700px)': {
      fontSize: '20px',
      marginBottom: '12px',
      marginTop: '-20px',
    },
    

    '@media (max-height: 600px)': {
      fontSize: '20px',
      marginBottom: '10px',
      marginTop: '-30px',
    },
  },

  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    position: 'relative',
  },
};
