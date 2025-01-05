/**
 * @packageDocumentation
 * @category Hook
 */

//#region imports
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
//#endregion

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 useCurrentPage
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Get the name of the current page from the URL.
 * This value is automatically updated as the user navigates between pages
 *
 * @returns {String} Name of page extracted from URL path
*/
export const useCurrentPage = () => {
  const pathname = usePathname();
  const currentPage = useMemo(() => (pathname?.split('/')[1] || '/'), [pathname]);

  return currentPage;
};

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 getPathname
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Get the name of the current page from the URL.
 * This value is automatically updated as the user navigates between pages
 *
 * @param {PageLink} link The link to get the pathname from
 * @returns {String} Name of page extracted from URL path
*/
export const getPathname = (link?: PageLink) => link?.as?.split('/').pop() || '/';


/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 useIsActiveMenu
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Check if a menu item is active
 *
 * @param {NavigationMenuItem} route The menu item to check
 * @returns {Boolean} True if the menu item is active, false otherwise
*/
export const useIsActiveMenu = (route: NavigationMenuItem) => {
  const currentPage = useCurrentPage();

  return useMemo(
    () => getPathname(route?.link) === currentPage,
    [route, currentPage]
  );
};
