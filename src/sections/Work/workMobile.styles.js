export const workMobileStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingX: 0,
    alignItems: 'center',
    marginTop: '110px',
  },

  header: {
    fontSize: '24px',
    fontWeight: 100,
    color: 'textLines',
    marginBottom: '16px',
    alignSelf: 'flex-start',
    paddingLeft: '32px',

    '@media (max-height: 700px)': {
      fontSize: '20px',
      marginBottom: '8px',
      marginTop: '-20px',
    },

    '@media (max-height: 600px)': {
      fontSize: '20px',
      marginBottom: '8px',
    },
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
    alignItems: 'center',
  },
};
