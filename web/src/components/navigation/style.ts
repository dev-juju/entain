/**
 * @packageDocumentation
 * @category Style
 */

//#region imports
import { Theme } from '@mui/material';
//#endregion

export const navigationBarSize = 48;

export const style: any = {
  container: {
    width: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
    overflow: 'hidden',
    padding: 0,
    pb: {
      xs: `${ navigationBarSize }px`,
      md: 0,
    },
    pt: {
      xs: 0,
      md: `${ navigationBarSize }px`,
    },
  } as const,
  paper: {
    position: 'fixed',
    bottom: {
      xs: 0,
      md: 'auto',
    },
    top: {
      xs: 'auto',
      md: 0,
    },
    left: 0,
    right: 0,
    borderRadius: 0,
    height: navigationBarSize,
    display: 'flex',
    justifyContent: 'space-between',
    px: '10vw',
    alignItems: 'center',
    color: (theme: Theme) => theme.colors?.navigationForeground,
    backgroundColor: (theme: Theme) => theme.colors?.navigationBackground,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    border: 'none !important'
  },
}
