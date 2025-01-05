/**
 * @packageDocumentation
 * @category Storybook
 */

//#region imports
import '../src/app/globals.css';

import { Box, Divider } from '@mui/material';
import React from 'react';
import { LanguageMenu } from 'Entain/translations/menu';
import Providers from 'Entain/app/providers';
import { ThemeMenu } from 'Entain/theme/menu';
//#endregion

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 VIEW PORTS
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Customize Storybook view ports
*/
const BREAKPOINTS = { xs: 375, sm: 600, md: 900, lg: 1200, xl: 1536 };

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 PROVIDERS
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Wrap every story with notification and theme providers
*/
export const decorators = [
  (Story: any) => (
    <Providers>
      <Box>
        <Box sx={ { display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', px: 2, py: 1 } }>
          <LanguageMenu />
          <ThemeMenu />
        </Box>
        <Divider flexItem sx={ { mb: 2 } } />
        <Story />
      </Box>
    </Providers>
  )
];

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 PARAMETERS
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Export the configured parameters
*/
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  layout: 'fullscreen',
};
