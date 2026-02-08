export const speechBubbleStyles = {
  container: {
    position: 'relative',
    backgroundColor: 'bubble.main',
    borderRadius: '10px',
    padding: '5px 13px',
    minWidth: '100px',
    boxShadow: '0 2px 12px rgba(74, 222, 128, 0.2)',
    transition:
      'transform 0.4s cubic-bezier(0.34, 1.3, 0.64, 1), opacity 0.3s ease',
    transformOrigin: 'bottom right',

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-4px',
      right: '10px',
      width: '10px',
      height: '8px',
      backgroundColor: 'bubble.main',
      borderRadius: '0px 0px 0px 20px',
      transform: 'skewX(8deg)',
    },
  },

  text: {
    color: '#000000',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  largeContainer: {
    position: 'relative',
    backgroundColor: 'bubble.main',
    borderRadius: '20px',
    padding: '24px 48px',
    width: 'fit-content',
    boxShadow: '0 4px 24px rgba(74, 222, 128, 0.3)',
    transition:
      'transform 0.4s cubic-bezier(0.34, 1.3, 0.64, 1), opacity 0.3s ease',
    transformOrigin: 'bottom right',

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      right: '30px',
      width: '30px',
      height: '30px',
      backgroundColor: 'bubble.main',
      borderRadius: '0px 0px 0px 30px',
      transform: 'skewX(8deg)',
    },
  },

  largeText: {
    color: '#000000',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
};
