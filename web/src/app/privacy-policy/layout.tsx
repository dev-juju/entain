/**
 * Privacy Policy layout
 *
 * @packageDocumentation
 * @category Layout
 */

//#region imports
import { Fallback } from 'Entain/components/fallback';
import { Pages } from 'Entain/components/navigation/pages.config';
import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
//#endregion

export const metadata: Metadata = {
  title: `${ Pages.privacyPolicy.name } - ${ process.env.NEXT_PUBLIC_APP_NAME }`
}

export type PrivacyPolicyLayoutProps = {
  children: ReactNode
}

const PrivacyPolicyLayout = ({ children }: PrivacyPolicyLayoutProps) => {
  return (
    <ErrorBoundary fallback={ <Fallback message={ `Oops! Something went wrong.` } /> }>
      { children }
    </ErrorBoundary>
  )
};

export default PrivacyPolicyLayout;
