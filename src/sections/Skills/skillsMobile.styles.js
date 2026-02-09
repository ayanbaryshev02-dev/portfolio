export const skillsMobileStyles = {
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

  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0,
    marginLeft: '-5px',
  },

  gridItem: {
    width: '78px',
    height: '72px',
    marginRight: '10px', 
    marginBottom: '32px', 
  },
};