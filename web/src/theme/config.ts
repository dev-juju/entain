'use client';

/**
 * @packageDocumentation
 * @category Theme
 */

//#region imports
import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles';
import { CSSProperties } from '@mui/material/styles/createMixins';
import { deepmerge } from '@mui/utils';
import { themeVariants } from 'Entain/theme/variants';
//#endregion

declare module '@mui/material/styles' {
  interface Theme {
    colors?: {
      tooltip: CSSProperties['color'];
      tooltipBackground: CSSProperties['color'];
      hoveredMenu: CSSProperties['color'];
      selectedMenu: CSSProperties['color'];
      selectedHoveredMenu: CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    colors?: {
      tooltip: CSSProperties['color'];
      tooltipBackground: CSSProperties['color'];
      hoveredMenu: CSSProperties['color'];
      selectedMenu: CSSProperties['color'];
      selectedHoveredMenu: CSSProperties['color'];
    };
  }
}

const defaultOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiInput: {
      defaultProps: {
        size: 'small',
      },
    },
  },
};

const createThemeWithThemeProps = (theme: Theme) => {
  const merged = createTheme(theme, {
    components: {
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        },
        styleOverrides: {
          tooltip: {
            backgroundColor: theme.colors?.tooltipBackground,
            color: theme.colors?.tooltip,
          },
          arrow: {
            color: theme.colors?.tooltipBackground,
          },
        },
      },
    },
  });

  return merged;
};

const whiteTheme = responsiveFontSizes(
  createThemeWithThemeProps(
    createTheme(deepmerge(defaultOptions, themeVariants.white))
  )
);
const blackTheme = responsiveFontSizes(
  createThemeWithThemeProps(
    createTheme(deepmerge(defaultOptions, themeVariants.black))
  )
);

export const getTheme = (theme: keyof typeof themeVariants) => {
  switch (theme) {
    case 'black': return blackTheme;
    default: return whiteTheme;
  }
};

export { blackTheme, whiteTheme };
