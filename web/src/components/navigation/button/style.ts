/**
 * @packageDocumentation
 * @category Style
 */

//#region imports
import { Theme } from '@mui/material';
import { blue } from '@mui/material/colors';
//#endregion

export const style: any = {
  activeMenu: {
    backgroundColor: (theme: Theme) => theme.colors?.selectedMenu,
    '&:hover': {
      backgroundColor: (theme: Theme) => theme.colors?.selectedHoveredMenu
    },
  },
  activeRouteBox: {
    '& .MuiSvgIcon-root': {
      color: (theme: Theme) => theme.palette.mode === 'light' ? theme.palette.primary.main : blue[500]
    },
    '& .MuiTypography-root': {
      color: (theme: Theme) => theme.palette.mode === 'light' ? theme.palette.primary.main : blue[500]
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer !important',
    padding: 0,
    mx: {
      xs: 0.5,
      lg: 1,
      xl: 2,
    },
    borderRadius: '4px',
    height: 34,
    '&:hover': {
      backgroundColor: (theme: Theme) => theme.colors?.hoveredMenu
    },
  },
  flexible: {
    mx: {
      xs: 0.5,
      md: 2,
      lg: 1,
      xl: 2,
    },
    width: {
      xs: 34,
      sm: 'unset',
    },
  },
  routeBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '8px',
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
    '& .MuiTypography-root': {
      fontSize: 12,
      whiteSpace: 'nowrap',
      color: 'white',
    },
  },
  iconBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mr: 1
  },
  tooltip: {
    '& .MuiTooltip-root': {
      backgroundColor: (theme: Theme) => theme.colors?.selectedMenu,
      color: (theme: Theme) => theme.colors?.tooltipForeground,
    },
    '& .MuiTooltip-arrow': {
      color: (theme: Theme) => theme.colors?.selectedMenu,
    }
  },
};
