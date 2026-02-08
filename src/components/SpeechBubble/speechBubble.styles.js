export const speechBubbleStyles = {
  container: {
    position: 'relative',
    backgroundColor: 'bubble.main',
    borderRadius: '20px',
    padding: '5px 12px',
    minWidth: '100px',
    boxShadow: '0 2px 12px rgba(74, 222, 128, 0.2)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  },

 text: {
    color: '#000000',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  tail: {
    position: 'absolute',
    bottom: '-6px',
    right: '16px',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: (theme) => `8px solid ${theme.palette.bubble.main}`,
  },


  largeContainer: {
    position: 'relative',
    backgroundColor: 'bubble.main',
    borderRadius: '32px',
    padding: '24px 48px',
    width: 'fit-content',
    boxShadow: '0 4px 24px rgba(74, 222, 128, 0.3)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  },

  largeText: {
    color: '#000000',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  largeTail: {
    position: 'absolute',
    bottom: '-16px',
    right: '80px',
    width: 0,
    height: 0,
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderTop: (theme) => `20px solid ${theme.palette.bubble.main}`,
  },
};
