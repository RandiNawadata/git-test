// src/components/DesktopContainer.js
import * as React from 'react';
import Box from '@mui/material/Box';
import { containerJSON } from '../style/style';

export default function DesktopContainer({ children }) {
  const { containerBoxStyle, imageContainerBoxStyle } = containerJSON;
  
  return (
    <React.Fragment>
      <Box sx={containerBoxStyle} data-testid="desktop-container">
        <Box sx={imageContainerBoxStyle} data-testid="image-container">
          {children}
        </Box>
      </Box>
    </React.Fragment>
  );
}
