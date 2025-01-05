/**
 * @packageDocumentation
 * @category Component
 */

//#region Imports
import { Box, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { SxProps, useTheme } from '@mui/material/styles';
import { style } from 'Entain/components/navigation/button/style';
import { useIsActiveMenu } from 'Entain/components/navigation/hooks';
import Link from 'next/link';
//#endregion

export type NavigationButtonProps = {
  route: NavigationMenuItem
  showOnlyIconsOnSmallScreens?: boolean
  listItemSx?: SxProps
}

export const NavigationButton = ({ route, listItemSx={}, showOnlyIconsOnSmallScreens=true }: NavigationButtonProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isActiveMenu = useIsActiveMenu(route);

  const widthControl = showOnlyIconsOnSmallScreens ? style.flexible : {};
  const toolbarStyle = { ...style.toolbar, ...widthControl, ...listItemSx, ...(isActiveMenu ? style.activeMenu : {}) };
  const routeBoxStyle = { ...style.routeBox, ...(isActiveMenu ? style.activeRouteBox : {}) };
  const routeNameStyle = { ...style.routeName, ...(isActiveMenu ? style.activeRouteName : {}) };

  const getListItem = (route: NavigationMenuItem) => (
    <Box component='li' sx={ toolbarStyle }>
      <Box sx={ routeBoxStyle }>
        { route.icon }
        {
          (isSmallScreen && showOnlyIconsOnSmallScreens) || !route.name ?
            <></>
            :
            <Typography sx={ { ...routeNameStyle, pl: route.icon ? 1 : 0 } } variant='body2'>{ route.name }</Typography>
        }
      </Box>
    </Box>
  );

  return (
    <Link key={ route.link.url } href={ route.link.url } as={ route.link.as } passHref data-testid={ route.dataCy }>
      {
        isSmallScreen ?
          getListItem(route)
          :
          <Tooltip title={ route.name } placement='top' sx={ style.tooltip }>{ getListItem(route) }</Tooltip>
      }
    </Link>
  );
};
