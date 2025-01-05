'use client';

/**
 * Provides theme to children
 *
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { UIMachineActorContext } from 'Entain/app/state';
import { blackTheme,whiteTheme } from 'Entain/theme/config';
import NextAppDirEmotionCacheProvider from 'Entain/theme/emotion-cache';
import { type ReactNode,useMemo } from 'react';
//#endregion

export type ThemeProviderProps = {
  children: ReactNode
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = UIMachineActorContext.useSelector(state => state.context.theme);

  const themeConfig = useMemo(
    () => {
      if (theme === 'black') return blackTheme;
      if (theme === 'white') return whiteTheme;
      return blackTheme;
    },
    [theme]
  );

  return (
    <NextAppDirEmotionCacheProvider options={ { key: 'mui', prepend: false } }>
      <MuiThemeProvider theme={ themeConfig }>
        <CssBaseline enableColorScheme />
        { children }
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
