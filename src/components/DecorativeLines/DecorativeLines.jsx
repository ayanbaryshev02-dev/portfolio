import { Box } from '@mui/material';
import { decorativeLinesStyles } from './decorativeLines.styles';

export const DecorativeLines = ({ showDivider = false }) => {
  return (
    <>
      <Box sx={decorativeLinesStyles.leftLine} />
      {showDivider && <Box sx={decorativeLinesStyles.horizontalDivider} />}
    </>
  );
};
