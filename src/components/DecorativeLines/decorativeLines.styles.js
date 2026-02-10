export const decorativeLinesStyles = {
  leftLine: {
    position: 'fixed',
    left: '60px',
    top: 0,
    bottom: 0,
    width: '1px',
    backgroundColor: 'divider',
    zIndex: 1,
    pointerEvents: 'none',
    display: { xs: 'none', md: 'block' },

    '@media (max-width: 1270px)': {
      left: '40px',
    },
    '@media (max-width: 1100px)': {
      left: '30px',
    },
  },

  horizontalDivider: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    backgroundColor: 'divider',
    display: { xs: 'none', md: 'block' },
  },
};
