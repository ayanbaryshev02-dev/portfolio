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
      fontSize: '20px',
      marginBottom: '12px',
    },
    '@media (max-height: 620px)': {
      fontSize: '20px',
      marginBottom: '5px',
      marginTop: '-30px',
    },
    '@media (max-height: 600px)': {
      fontSize: '20px',
      marginBottom: '10px',
    },
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 78px)',
    columnGap: '8px',
    rowGap: '16px',
    justifyContent: 'flex-start',

    '@media (max-height: 700px)': {
      columnGap: '6px',
      rowGap: '12px',
    },

    '@media (max-height: 600px)': {
      columnGap: '4px',
      rowGap: '8px',
    },
  },

  gridItem: {
    width: '78px',
    height: '72px',
    marginRight: '10px',
    marginBottom: '32px',

    '@media (max-height: 700px)': {
      marginRight: '8px',
      marginBottom: '24px',
    },

    '@media (max-height: 600px)': {
      marginRight: '6px',
      marginBottom: '16px',
    },
  },
};
