/**
 * Locations layout
 *
 * @packageDocumentation
 * @category Layout
 */

//#region imports
import { Fallback } from 'Entain/components/fallback';
import { Pages } from 'Entain/components/navigation/pages.config';
import type { Metadata } from 'next';
import { ErrorBoundary } from 'react-error-boundary';
//#endregion

export const metadata: Metadata = {
  title: `${ Pages.movies.name } - ${ process.env.NEXT_PUBLIC_APP_NAME }`
}

export type MoviesLayoutProps = {
  children: React.ReactNode
}

const MoviesLayout = ({ children }: MoviesLayoutProps) => {
  return (
    <ErrorBoundary fallback={ <Fallback message={ `Oops! Something went wrong.` } /> }>
      { children }
    </ErrorBoundary>
  )
};

export default MoviesLayout;
