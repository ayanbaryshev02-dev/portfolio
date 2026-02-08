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
};
