/**
 * @packageDocumentation
 * @category Style
 */

//#region imports
import { navigationBarSize } from "Entain/components/navigation/style";
//#endregion

export const filterContainerWidth = 280;
export const filterContainerLeftMargin = 20;

export const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 2,
    width: filterContainerWidth,
    position: 'fixed',
    top: navigationBarSize + 24,
    left: filterContainerLeftMargin,
  } as const,
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 1,
    padding: 2,
    my: 1
  } as const,
  categoryBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 1,
    mt: 2,
    gap: 1,
  } as const,
  textField: {
    width: 1,
    maxWidth: 300,
    mt: 2,
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
    mb: 0.5
  },
};
