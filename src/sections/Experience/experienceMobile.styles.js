export const experienceMobileStyles = {
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

  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    position: 'relative',
  },
};
