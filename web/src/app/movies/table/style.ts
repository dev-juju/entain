/**
 * @packageDocumentation
 * @category Style
 */

// #region imports
import { filterContainerLeftMargin,filterContainerWidth } from 'Entain/app/movies/filter/style';
// #endregion

export const style = {
  container: {
    width: 1,
    flexGrow: 1,
    padding: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 2,
    pl: `${ filterContainerWidth + filterContainerLeftMargin }px`,
  } as const,
};
