/**
 * @packageDocumentation
 * @category Style
 */

// #region imports
import { filterContainerLeftMargin,filterContainerWidth } from 'Entain/app/movies/filter/style';
// #endregion

export const style = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 1,
    position: 'relative',
    pl: {
      xs: 0,
      md: `${ filterContainerWidth + filterContainerLeftMargin }px`,
    },
    pt: {
      xs: 8,
      md: 0,
    },
  },
};
