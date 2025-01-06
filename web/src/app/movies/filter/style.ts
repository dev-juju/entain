/**
 * @packageDocumentation
 * @category Style
 */

//#region imports
import { navigationBarSize } from "Entain/components/navigation/style";
//#endregion

export const filterContainerWidth = 240;
export const filterContainerLeftMargin = 20;

export const style = {
  container: {
    display: 'flex',
    flexDirection: {
      xs: 'row',
      md: 'column',
    },
    justifyContent: {
      xs: 'center',
      md: 'flex-start',
    },
    alignItems: 'center',
    zIndex: 2,
    width: {
      xs: 'unset',
      md: filterContainerWidth,
    },
    position: 'fixed',
    top: {
      xs: 8,
      md: navigationBarSize + 24,
    },
    left: filterContainerLeftMargin,
    right: {
      xs: filterContainerLeftMargin,
      md: 'auto',
    },
  } as const,
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 1,
    maxWidth: 700,
    padding: 2,
    my: 1,
    mx: {
      xs: 1,
      md: 0,
    },
  } as const,
  categoryBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 1,
    gap: 1,
  } as const,
  textField: {
    width: 1,
    '& .MuiOutlinedInput-input': {
      fontSize: 12,
      py: 1,
    },
  },
  searchIcon: {
    height: 16,
    color: 'text.secondary'
  },
  clearIcon: {
    height: 16,
    color: 'error.light'
  },
  iconButton: {
    width: 30,
    height: 30,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
    mb: 0.5,
    display: {
      xs: 'none',
      md: 'block',
    },
  },
  divider: {
    mb: 2,
    display: {
      xs: 'none',
      md: 'unset',
    },
  }
};
