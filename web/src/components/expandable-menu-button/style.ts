/**
 * @packageDocumentation
 * @category Style
 */

//#region imports
import { Theme } from '@mui/material';
//#endregion

export const style: any = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    py: 0,
    mx: {
      xs: 0.5,
      xl: 1,
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 1,
    height: 34,
    minWidth: 34,
    my: 0.5,
    '&:hover': {
      backgroundColor: (theme: Theme) => theme.colors?.hoveredMenu,
    },
  },
  activeButton: {
    backgroundColor: (theme: Theme) => theme.colors?.selectedMenu,
    '&:hover': {
      backgroundColor: (theme: Theme) => theme.colors?.selectedHoveredMenu
    },
  },
  text: {
    display: 'none',
    cursor: 'pointer',
    ml: 2,
  },
  openText: {
    display: 'block'
  },
};
