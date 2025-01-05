/**
 * @packageDocumentation
 * @category Config
 */

//#region imports
import { ThemeOptions } from '@mui/material/styles';
//#endregion

const black: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: { main: '#1e88e5' },
    secondary: { main: '#1565c0' },
    background: {
      default: '#0f0f0f',
      paper: '#090909',
    },
    success: { main: '#81c784' },
  },
  colors: {
    tooltip: 'black',
    tooltipBackground: '#ffffff',
    hoveredMenu: 'rgba(0, 0, 0, 0.1)',
    selectedMenu: 'rgba(0, 0, 0, 0.17) !important',
    selectedHoveredMenu: 'rgba(0, 0, 0, 0.24) !important',
  },
};

const white: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: '#318FCE' },
    secondary: { main: '#605e60' },
    background: {
      default: '#ffffff',
      paper: '#fcfcfc',
    },
    success: { main: '#36b259' },
    info: { main: '#318FCE' },
    error: { main: '#CB655F' },
  },
  colors: {
    tooltip: '#ffffff',
    tooltipBackground: '#292F32',
    hoveredMenu: 'rgba(255, 255, 255, 0.1)',
    selectedMenu: 'rgba(255, 255, 255, 0.17) !important',
    selectedHoveredMenu: 'rgba(255, 255, 255, 0.24) !important',
  },
};

export const themeVariants = { white, black };
