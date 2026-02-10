export const timelineItemMobileStyles = {
  container: {
    position: 'relative',
    paddingLeft: '28px',
    paddingBottom: '12px',
  },

  dot: {
    position: 'absolute',
    left: '1.5px',
    top: '2px',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'primary.main',
    zIndex: 2,
  },

  line: {
    position: 'absolute',
    left: '4.5px',
    top: '10px',
    bottom: 0,
    width: '1px',
    backgroundColor: 'primary.main',
    height: '220px',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: '100%',
  },

  year: {
    fontSize: '10px',
    fontWeight: 400,
    color: 'text.secondary',
    lineHeight: 1.2,
  },

  title: {
    fontSize: '14px',
    fontWeight: 400,
    color: 'primary.main',
    lineHeight: 1.2,

        '@media (max-height: 840px)': {
      fontSize: '12px',
    },
  },

  description: {
    fontSize: '12px',
    fontWeight: 300,
    color: 'text.primary',
    lineHeight: 1.4,
    paddingRight: '0px',
    width: '100%',

     '@media (max-height: 840px)': {
      fontSize: '11px',
      width: '100%',
    },
  },
};
